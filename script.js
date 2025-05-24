document.addEventListener('DOMContentLoaded', function() {
      // Original script content, with necessary modifications for new structure
      const searchInput = document.getElementById('search');
      const suggestionBox = document.getElementById('list');
      const previewFrame = document.getElementById('preview');
      // Note: saveBtn, widthInput, etc., will be re-queried when dialog content is loaded.
      // However, their event listeners are defined here and will be attached after content load.

      const romanNumeralRegex = /\s+(I|II|III)$/; 
      const philosophyKnowledgeMap = { "The First Step": "Path of the First Step", "The Second Step": "Path of the Second Step", "The Third Step": "Path of the Third Step" };

      let defaultSettings = {
          width: 50.8, height: 25.4,
          marginTop: 1, marginRight: 1, marginBottom: 1, marginLeft: 1,
          unit: 'mm'
      };
      let loadedSettings = JSON.parse(localStorage.getItem('labelSettings'));
      let settings = { ...defaultSettings }; // Initialize with defaults

      // Function to apply settings from localStorage or defaults
      function applyLabelSettings() {
        loadedSettings = JSON.parse(localStorage.getItem('labelSettings'));
        settings = { ...defaultSettings, ...loadedSettings }; // Merge, ensuring all keys are present

        const widthInput = document.getElementById('width');
        const heightInput = document.getElementById('height');
        const marginTopInput = document.getElementById('marginTop');
        const marginRightInput = document.getElementById('marginRight');
        const marginBottomInput = document.getElementById('marginBottom');
        const marginLeftInput = document.getElementById('marginLeft');

        if (widthInput) widthInput.value = settings.width;
        if (heightInput) heightInput.value = settings.height;
        if (marginTopInput) marginTopInput.value = settings.marginTop;
        if (marginRightInput) marginRightInput.value = settings.marginRight;
        if (marginBottomInput) marginBottomInput.value = settings.marginBottom;
        if (marginLeftInput) marginLeftInput.value = settings.marginLeft;
        updatePreviewSize(); // Update preview after applying settings
      }
      
      let selectedIndex = -1;
      
      const debounce = (fn, delay = 300) => {
          let timeoutId;
          return (...args) => {
              clearTimeout(timeoutId);
              timeoutId = setTimeout(() => fn(...args), delay);
          };
      };

      function updatePreviewSize() {
          if (previewFrame) { 
            previewFrame.style.width = settings.width + settings.unit;
            previewFrame.style.height = settings.height + settings.unit;
          }
      }

      function search(query) {
          const trimmedQuery = query.trim().toLowerCase();
          if (!trimmedQuery) return [];
          if (!window.dataset || !Array.isArray(window.dataset)) {
              console.error("Dataset not loaded or is not an array.");
              return [];
          }
          // Placeholder for content filter logic - to be added in a later step
          // For now, uses all window.dataset
          return window.dataset.filter(item => item && item.name && typeof item.name === 'string' && item.name.toLowerCase().includes(trimmedQuery));
      }
      
      function renderSuggestions(filteredItems) {
          if (!suggestionBox || !searchInput) return; 
          suggestionBox.innerHTML = ''; 
          selectedIndex = -1; 
          if (searchInput.value.trim() === '') {
              suggestionBox.style.display = 'none';
              return;
          }

          if (!filteredItems || filteredItems.length === 0) {
              const noResult = document.createElement('div');
              noResult.textContent = 'No matches found.';
              noResult.classList.add('suggestion'); 
              suggestionBox.appendChild(noResult);
          } else {
              const itemsToShow = filteredItems.slice(0, 50);
              itemsToShow.forEach(item => {
                  if (!item || typeof item.name !== 'string' || typeof item.type !== 'string') return; 
                  const div = document.createElement('div');
                  div.classList.add('suggestion');
                  let baseText = `${item.name} (${item.type})`;
                  let iconHTML = ''; 
                  if (item.type === 'Knowledge') {
                    const philosophyName = philosophyKnowledgeMap[item.name.replace(romanNumeralRegex, '').trim()];
                    if (philosophyName) baseText += ` (${philosophyName})`;
                  }
                  if (item.type === 'Knowledge') {
                      const levelMatch = item.name.match(romanNumeralRegex); 
                      if (levelMatch) { 
                          const baseName = item.name.replace(romanNumeralRegex, '').trim();
                          try {
                            const lastPrintedFullName = localStorage.getItem(`lastPrinted_${baseName}`);
                            if (lastPrintedFullName && lastPrintedFullName === item.name) {
                                iconHTML = '<span class="lp-icon">✓</span>'; 
                            }
                          } catch (e) { console.warn("LocalStorage access error in renderSuggestions:", e); }
                      }
                  }
                  div.innerHTML = baseText + iconHTML; 
                  div.addEventListener('click', () => { selectItem(item); });
                  suggestionBox.appendChild(div);
              });
          }
          suggestionBox.style.display = 'block';
      }

    function selectItem(item) { 
        if (!previewFrame || !searchInput) { console.error("selectItem: previewFrame or searchInput missing."); return; }
        if (!item || typeof item.name === 'undefined') { console.error("selectItem: Invalid item.", item); return; }
        
        if (suggestionBox) { suggestionBox.style.display = 'none'; }
        searchInput.value = item.name;

        let tenetKnowledgeItemData = null;
        if (item.type === 'Philosophy' && item.tenetKnowledge && typeof window.dataset !== 'undefined') {
            const baseKnowledgeName = item.tenetKnowledge; 
            let knowledgeToFetchFullName = null;
            try {
                const lastPrintedFull = localStorage.getItem(`lastPrinted_${baseKnowledgeName}`);
                if (lastPrintedFull) {
                    const lastPrintedItemExists = window.dataset.find(k => k.name === lastPrintedFull && k.type === 'Knowledge');
                    if (lastPrintedItemExists) knowledgeToFetchFullName = lastPrintedFull;
                }
            } catch(e) { console.warn("LocalStorage access error for tenetKnowledge:", e); }
            
            if (!knowledgeToFetchFullName) {
                const defaultLevelName = `${baseKnowledgeName} I`;
                const defaultLevelItem = window.dataset.find(k => k.name === defaultLevelName && k.type === 'Knowledge');
                if (defaultLevelItem) knowledgeToFetchFullName = defaultLevelName;
                else {
                    const directMatchItem = window.dataset.find(k => k.name === baseKnowledgeName && k.type === 'Knowledge');
                    if (directMatchItem) knowledgeToFetchFullName = baseKnowledgeName;
                }
            }
            if (knowledgeToFetchFullName) {
                const fetchedData = window.dataset.find(k => k.name === knowledgeToFetchFullName && k.type === 'Knowledge');
                if (fetchedData) tenetKnowledgeItemData = JSON.parse(JSON.stringify(fetchedData));
            }
        }

        const dataForIframe = {
            item: JSON.parse(JSON.stringify(item)), 
            settings: JSON.parse(JSON.stringify(settings)), // Ensure current settings are used
            tenetKnowledgeItem: tenetKnowledgeItemData 
        };
        
        const iframeSrc = 'label_render.html'; 
        const targetOrigin = window.location.origin === 'null' || window.location.protocol === 'file:' ? '*' : window.location.origin;
        
        const postDataToIframe = () => {
            if (previewFrame.contentWindow) {
                previewFrame.contentWindow.postMessage(dataForIframe, targetOrigin);
            } else { console.error(`script.js: previewFrame.contentWindow not ready.`);}
        };

        if (previewFrame.getAttribute('src') !== iframeSrc || (item.type === 'Philosophy' || item.type === 'Calibration')) {
            previewFrame.setAttribute('src', iframeSrc); 
            previewFrame.onload = () => {
                if (previewFrame.getAttribute('src') === iframeSrc && previewFrame.contentWindow) { 
                     postDataToIframe(); 
                }
                previewFrame.onload = null; 
            };
        } else { 
            postDataToIframe(); 
        }
    }

    function printLabel() {
        if (!previewFrame || !previewFrame.contentWindow || !searchInput) { 
            console.error("[PRINT] Aborting: previewFrame, contentWindow, or searchInput missing.");
            return; 
        }
        try {
            previewFrame.contentWindow.focus();
            previewFrame.contentWindow.print();
        } catch (e) { 
            console.error("[PRINT] Error during print attempt:", e); 
            alert("Print Error. Ensure you are running from a web server and the iframe content has fully loaded.");
        }
        
        const labelTitle = searchInput.value; 
        if (labelTitle && window.dataset && Array.isArray(window.dataset)) {
            const currentItem = window.dataset.find(i => i.name === labelTitle);
            if (currentItem && currentItem.type === 'Knowledge') {
                const baseNameRegex = /\s+(I|II|III)$/; 
                let baseName = labelTitle;
                if (baseNameRegex.test(labelTitle)) {
                    baseName = labelTitle.replace(baseNameRegex, '').trim();
                }
                try { localStorage.setItem(`lastPrinted_${baseName}`, labelTitle); } 
                catch (e) { console.warn("LocalStorage error in printLabel:", e); }
            }
        }
    }

      // --- Event Listeners for original functionality ---
      if (searchInput) {
        searchInput.addEventListener('input', debounce(e => {
            const results = search(e.target.value);
            renderSuggestions(results);
        }, 300));
        searchInput.addEventListener('focus', () => { searchInput.select(); });
        searchInput.addEventListener('keydown', e => { 
            if (!suggestionBox) return; const items = suggestionBox.querySelectorAll('.suggestion'); if (!items.length || suggestionBox.style.display === 'none') {selectedIndex = -1; return;}
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter') e.preventDefault();
            if (e.key === 'ArrowDown') selectedIndex = Math.min(selectedIndex + 1, items.length - 1);
            else if (e.key === 'ArrowUp') selectedIndex = Math.max(selectedIndex - 1, 0);
            else if (e.key === 'Enter') { if (selectedIndex >= 0 && items[selectedIndex] && typeof items[selectedIndex].click === 'function') { if (items[selectedIndex].textContent !== 'No matches found.') items[selectedIndex].click(); } return; }
            else if (e.key === 'Escape') { suggestionBox.style.display = 'none'; selectedIndex = -1; return;}
            else return;
            items.forEach((el, idx) => el.classList.toggle('active', idx === selectedIndex));
            if (items[selectedIndex]) items[selectedIndex].scrollIntoView({ block: 'nearest' });
        });
      }
      
      // Initial call to apply settings and update preview
      applyLabelSettings(); 

      // --- NEW JS FOR MENU, DIALOGS, AND DYNAMIC CONTENT ---
      const hamburgerMenuBtn = document.getElementById('hamburgerMenuBtn');
      const mainMenu = document.getElementById('mainMenu');
      const menuLabelSettings = document.getElementById('menuLabelSettings');
      const menuContentFilters = document.getElementById('menuContentFilters');
      const dialogOverlay = document.getElementById('dialogOverlay');
      const labelSettingsDialog = document.getElementById('labelSettingsDialog');
      const contentFiltersDialog = document.getElementById('contentFiltersDialog');
      const closeDialogBtns = document.querySelectorAll('.dialog-modal .close-dialog-btn'); 
      const footerPrintBtn = document.querySelector('.fixed-footer #print'); 

      if (footerPrintBtn) {
          footerPrintBtn.addEventListener('click', printLabel);
      }

      function openMenu() {
        if (mainMenu) mainMenu.style.left = '0px';
        if (dialogOverlay) dialogOverlay.style.display = 'block';
      }

      function closeMenuAndOverlayIfNeeded() {
        if (mainMenu) mainMenu.style.left = '-280px';
        const anyDialogActive = (labelSettingsDialog && labelSettingsDialog.style.display === 'block') || 
                               (contentFiltersDialog && contentFiltersDialog.style.display === 'block');
        if (!anyDialogActive && dialogOverlay) {
            dialogOverlay.style.display = 'none';
        }
      }
      
      function openDialog(dialogElement, contentUrl, callbackAfterLoad) {
        if (mainMenu) mainMenu.style.left = '-280px'; 
        
        fetch(contentUrl)
            .then(response => response.text())
            .then(html => {
                const dialogContentArea = dialogElement.querySelector('.dialog-content-area');
                if (dialogContentArea) {
                     dialogContentArea.innerHTML = html;
                } else { 
                     console.error("Dialog content area not found in dialog:", dialogElement);
                }

                if (dialogElement) dialogElement.style.display = 'block';
                if (dialogOverlay) dialogOverlay.style.display = 'block';

                if (callbackAfterLoad) callbackAfterLoad();
            })
            .catch(error => console.error('Error loading dialog content:', error));
      }

      function closeDialogAndOverlayIfNeeded(dialogElement) {
        if (dialogElement) {
            dialogElement.style.display = 'none';
            const dialogContentArea = dialogElement.querySelector('.dialog-content-area');
            if (dialogContentArea) {
                 dialogContentArea.innerHTML = '';
            }
        }
        closeMenuAndOverlayIfNeeded(); 
      }

      if (hamburgerMenuBtn) {
        hamburgerMenuBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (mainMenu && mainMenu.style.left !== '0px') {
            openMenu();
          } else {
            closeMenuAndOverlayIfNeeded(); 
          }
        });
      }
      
      // Close menu button inside the main menu itself
      const closeMenuBtn = mainMenu.querySelector('.close-menu-btn'); // Ensure this is queried correctly
      if (closeMenuBtn) { 
        closeMenuBtn.addEventListener('click', closeMenuAndOverlayIfNeeded);
      }
      
      if (dialogOverlay) {
        dialogOverlay.addEventListener('click', () => {
          closeMenuAndOverlayIfNeeded(); 
          if (labelSettingsDialog && labelSettingsDialog.style.display === 'block') closeDialogAndOverlayIfNeeded(labelSettingsDialog);
          if (contentFiltersDialog && contentFiltersDialog.style.display === 'block') closeDialogAndOverlayIfNeeded(contentFiltersDialog);
        });
      }
      
      closeDialogBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          let parentDialog = btn.closest('.dialog-modal');
          if (parentDialog) {
              closeDialogAndOverlayIfNeeded(parentDialog);
          }
        });
      });

      if (menuLabelSettings) {
        menuLabelSettings.addEventListener('click', (e) => {
          e.preventDefault();
          openDialog(labelSettingsDialog, 'label_settings_content.html', () => {
            applyLabelSettings(); 

            const saveBtnInDialog = document.getElementById('save'); 
            const showCalibrationLabelBtnInDialog = document.getElementById('showCalibrationLabelBtn'); 

            if (saveBtnInDialog) {
              saveBtnInDialog.addEventListener('click', () => {
                  const widthInputInDialog = document.getElementById('width'); 
                  const heightInputInDialog = document.getElementById('height');
                  const marginTopInputInDialog = document.getElementById('marginTop');
                  const marginRightInputInDialog = document.getElementById('marginRight');
                  const marginBottomInputInDialog = document.getElementById('marginBottom');
                  const marginLeftInputInDialog = document.getElementById('marginLeft');

                  if (widthInputInDialog) settings.width = parseFloat(widthInputInDialog.value);
                  if (heightInputInDialog) settings.height = parseFloat(heightInputInDialog.value);
                  if (marginTopInputInDialog) settings.marginTop = parseFloat(marginTopInputInDialog.value);
                  if (marginRightInputInDialog) settings.marginRight = parseFloat(marginRightInputInDialog.value);
                  if (marginBottomInputInDialog) settings.marginBottom = parseFloat(marginBottomInputInDialog.value);
                  if (marginLeftInputInDialog) settings.marginLeft = parseFloat(marginLeftInputInDialog.value);
                  
                  localStorage.setItem('labelSettings', JSON.stringify(settings));
                  updatePreviewSize();
                  const currentSelectedItemName = searchInput.value;
                  let itemToReselect = null;
                  if (currentSelectedItemName === "--- PRINT CALIBRATION LABEL ---") {
                       itemToReselect = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };
                  } else if (currentSelectedItemName && window.dataset) { 
                      itemToReselect = window.dataset.find(i => i.name === currentSelectedItemName);
                  }
                  if (itemToReselect) { selectItem(itemToReselect); }
              }); 
            }
            if (showCalibrationLabelBtnInDialog) {
              showCalibrationLabelBtnInDialog.addEventListener('click', function() {
                  const calibrationItem = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };
                  selectItem(calibrationItem); 
              });
            }
          });
        });
      }
      if (menuContentFilters) {
        menuContentFilters.addEventListener('click', (e) => {
          e.preventDefault();
          openDialog(contentFiltersDialog, 'content_filters_content.html', () => {
            // Placeholder for attaching listeners for content filters UI later
          });
        });
      }
      
      document.addEventListener('click', (e) => {
          if (suggestionBox && searchInput && !suggestionBox.contains(e.target) && e.target !== searchInput &&
              (!mainMenu || !mainMenu.contains(e.target)) && 
              (!hamburgerMenuBtn || e.target !== hamburgerMenuBtn) &&
              (!labelSettingsDialog || !labelSettingsDialog.contains(e.target) || labelSettingsDialog.style.display === 'none') &&
              (!contentFiltersDialog || !contentFiltersDialog.contains(e.target) || contentFiltersDialog.style.display === 'none') &&
              e.target !== dialogOverlay 
            ) {
              suggestionBox.style.display = 'none';
          }

          if (mainMenu && mainMenu.style.left === '0px' && !mainMenu.contains(e.target) && e.target !== hamburgerMenuBtn && e.target !== dialogOverlay) {
              if ( (menuLabelSettings && menuLabelSettings.contains(e.target)) || (menuContentFilters && menuContentFilters.contains(e.target)) ) {
                  // Dialog opening will handle menu closure
              } else {
                  closeMenuAndOverlayIfNeeded();
              }
          }
      });
});
    </script>
