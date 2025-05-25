   // Global-like variables for filter functionality
// These will be assigned their DOM elements once the DOM is loaded.
let expansionCheckboxesContainer, philosophyCheckboxesContainer;
const CORE_GAME_EXPANSION_NAME = "Core Game";

// Helper function to check if a filter is active from localStorage
function isFilterActive(type, name) {
  const storageKey = `filter_${type}_${name.replace(/\s+/g, '_')}`;
  const storedValue = localStorage.getItem(storageKey);
  return storedValue === null || storedValue === 'true'; // Default to true (selected)
}

// Debounce function
const debounce = (fn, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

document.addEventListener('DOMContentLoaded', function() {
  // UI Element Variables
  const searchInput = document.getElementById('search');
  const suggestionBox = document.getElementById('list');
  const previewFrame = document.getElementById('preview');
  const printBtn = document.getElementById('print');

  // Elements within Label Settings Dialog (even though dialogs aren't fully functional yet, IDs are there)
  const saveBtn = document.getElementById('save');
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const marginTopInput = document.getElementById('marginTop');
  const marginRightInput = document.getElementById('marginRight');
  const marginBottomInput = document.getElementById('marginBottom');
  const marginLeftInput = document.getElementById('marginLeft');
  const showCalibrationLabelBtn = document.getElementById('showCalibrationLabelBtn');

  const menuBtn = document.getElementById('menuBtn');
  const mainMenu = document.getElementById('mainMenu'); // This is the panel with menu item links

  // Dialog related elements (for future use in next step, ensure IDs are correct in HTML)
  const openLabelSettingsBtn = document.getElementById('openLabelSettingsBtn');
  const openContentFiltersBtn = document.getElementById('openContentFiltersBtn');
  const labelSettingsDialog = document.getElementById('labelSettingsDialog');
  const contentFiltersDialog = document.getElementById('contentFiltersDialog');
  const dialogOverlay = document.getElementById('dialogOverlay');
  const closeDialogBtns = document.querySelectorAll('.dialog-close-btn');

  // Dialog related elements (for Unlocked Status)
  const openUnlockedStatusBtn = document.getElementById('openUnlockedStatusBtn');
  const unlockedStatusDialog = document.getElementById('unlockedStatusDialog');
  const clearUnlockedDataBtn = document.getElementById('clearUnlockedDataBtn'); // Ensured this is active

  // Dialog related elements (for Deck Building)
  const openDeckBuildingBtn = document.getElementById('openDeckBuildingBtn');
  const deckBuildingDialog = document.getElementById('deckBuildingDialog');
  const availableTraitsContainer = document.getElementById('availableTraitsContainer'); // Now used
  const deckTotalItemsSpan = document.getElementById('deckTotalItems');
  const deckImpairmentCountSpan = document.getElementById('deckImpairmentCount');
  const deckAbilitiesPerImpairmentSpan = document.getElementById('deckAbilitiesPerImpairment');
  const deckLegendaryCountSpan = document.getElementById('deckLegendaryCount');
  const deckRuleViolationsDiv = document.getElementById('deckRuleViolations');

  // Assign DOM elements for filter containers here (these are inside contentFiltersDialog)
  expansionCheckboxesContainer = document.getElementById('expansionCheckboxes');
  philosophyCheckboxesContainer = document.getElementById('philosophyCheckboxes');

  const selectAllExpansionsBtn = document.getElementById('selectAllExpansions');
  const deselectAllExpansionsBtn = document.getElementById('deselectAllExpansions');
  const selectAllPhilosophiesBtn = document.getElementById('selectAllPhilosophies');
  const deselectAllPhilosophiesBtn = document.getElementById('deselectAllPhilosophies');

  const romanNumeralRegex = /\s+(I|II|III)$/; // This is already here, good.
  const philosophyKnowledgeMap = { "The First Step": "Path of the First Step", "The Second Step": "Path of the Second Step", "The Third Step": "Path of the Third Step" };

  let defaultSettings = {
      width: 50.8, height: 25.4,
      marginTop: 1, marginRight: 1, marginBottom: 1, marginLeft: 1,
      unit: 'mm'
  };
  let loadedSettings = JSON.parse(localStorage.getItem('labelSettings'));
  let settings = { ...defaultSettings };

  if (loadedSettings) {
      settings.width = loadedSettings.width !== undefined ? loadedSettings.width : defaultSettings.width;
      settings.height = loadedSettings.height !== undefined ? loadedSettings.height : defaultSettings.height;
      settings.unit = loadedSettings.unit || defaultSettings.unit;
      if (loadedSettings.margin !== undefined && typeof loadedSettings.margin === 'number') {
          const oldMargin = parseFloat(loadedSettings.margin);
          settings.marginTop = oldMargin; settings.marginRight = oldMargin; settings.marginBottom = oldMargin; settings.marginLeft = oldMargin;
      } else {
          settings.marginTop = loadedSettings.marginTop !== undefined ? loadedSettings.marginTop : defaultSettings.marginTop;
          settings.marginRight = loadedSettings.marginRight !== undefined ? loadedSettings.marginRight : defaultSettings.marginRight;
          settings.marginBottom = loadedSettings.marginBottom !== undefined ? loadedSettings.marginBottom : defaultSettings.marginBottom;
          settings.marginLeft = loadedSettings.marginLeft !== undefined ? loadedSettings.marginLeft : defaultSettings.marginLeft;
      }
  }

  if (widthInput) widthInput.value = settings.width;
  if (heightInput) heightInput.value = settings.height;
  if (marginTopInput) marginTopInput.value = settings.marginTop;
  if (marginRightInput) marginRightInput.value = settings.marginRight;
  if (marginBottomInput) marginBottomInput.value = settings.marginBottom;
  if (marginLeftInput) marginLeftInput.value = settings.marginLeft;

  let selectedIndex = -1;

  function updatePreviewSize() {
      if (previewFrame) {
        previewFrame.style.width = settings.width + settings.unit;
        previewFrame.style.height = settings.height + settings.unit;
      }
  }

  function search(query) {
    const trimmedQuery = query.trim().toLowerCase();

    if (!window.dataset || !Array.isArray(window.dataset)) {
      console.error("Dataset not loaded or is not an array.");
      return [];
    }

    const filterablePhilosophyNames = new Set();
    if (philosophyCheckboxesContainer) {
        const philosophyCheckboxes = philosophyCheckboxesContainer.querySelectorAll('input[type="checkbox"]');
        philosophyCheckboxes.forEach(cb => filterablePhilosophyNames.add(cb.value));
    }

    return window.dataset.filter(item => {
      if (!item || typeof item.name !== 'string' || typeof item.type !== 'string') {
        return false;
      }

      const nameMatches = !trimmedQuery || item.name.toLowerCase().includes(trimmedQuery);
      if (!nameMatches && trimmedQuery) {
        return false;
      }

      let itemExpansionName = item.expansion && item.expansion.trim() !== "" ? item.expansion.trim() : CORE_GAME_EXPANSION_NAME;
      if (!isFilterActive('expansion', itemExpansionName)) {
        return false;
      }

      if (item.type === 'Philosophy') {
        if (!isFilterActive('philosophy', item.name.trim())) {
          return false;
        }
      } else if (item.type === 'Knowledge') {
        const linkedPhilosophy = item.philosophyLinked ? item.philosophyLinked.trim() : null;
        if (linkedPhilosophy && linkedPhilosophy !== "" && filterablePhilosophyNames.has(linkedPhilosophy)) {
          if (!isFilterActive('philosophy', linkedPhilosophy)) {
            return false;
          }
        }
      }
      return true;
    });
  }

  function renderSuggestions(filteredItems) {
      if (!suggestionBox || !searchInput) return;
      suggestionBox.innerHTML = '';
      selectedIndex = -1;

      const queryIsEmpty = searchInput.value.trim() === '';
      if (queryIsEmpty && (!filteredItems || filteredItems.length === (window.dataset ? window.dataset.length : 0))) {
          suggestionBox.style.display = 'none';
          return;
      }
      if (queryIsEmpty && filteredItems && filteredItems.length > 0 && filteredItems.length < (window.dataset ? window.dataset.length : 0) ){
         // Query is empty, but filters ARE active, so show the filtered list.
      } else if (queryIsEmpty){
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
              if (!item || typeof item.name !== 'string' || typeof item.type !== 'string') {
                  return;
              }
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

              div.addEventListener('click', () => {
                  selectItem(item);
              });
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
              if (defaultLevelItem) {
                  knowledgeToFetchFullName = defaultLevelName;
              } else {
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
          settings: JSON.parse(JSON.stringify(settings)),
          tenetKnowledgeItem: tenetKnowledgeItemData
      };

      const iframeSrc = 'label_render.html';
      const targetOrigin = window.location.origin === 'null' || window.location.protocol === 'file:' ? '*' : window.location.origin;

      const postDataToIframe = () => {
          if (previewFrame.contentWindow) {
              previewFrame.contentWindow.postMessage(dataForIframe, targetOrigin);
          } else { console.error(`KDMLabels.html: previewFrame.contentWindow not ready.`);}
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

          // --- Auto-unlock logic ---
          if (currentItem && (currentItem.type === 'Philosophy' || currentItem.type === 'Knowledge')) {
            const itemTypeLower = currentItem.type.toLowerCase();
            const safeItemName = currentItem.name.replace(/\s+/g, '_');
            const storageKey = `${UNLOCKED_STATUS_PREFIX}${itemTypeLower}_${safeItemName}`;

            if (localStorage.getItem(storageKey) !== 'true') {
              localStorage.setItem(storageKey, 'true');
              console.log(`Auto-unlocked ${currentItem.name} (${currentItem.type}) upon printing.`);
            }

            // Handle unlocking preceding levels for leveled Knowledges
            if (currentItem.type === 'Knowledge') {
              const levelMatch = currentItem.name.match(romanNumeralRegex); // romanNumeralRegex is accessible from DOMContentLoaded scope
              if (levelMatch) {
                const currentLevelRoman = levelMatch[1]; // I, II, or III
                const baseName = currentItem.name.replace(romanNumeralRegex, '').trim();

                const levelsToUnlock = [];
                if (currentLevelRoman === 'III') {
                  levelsToUnlock.push(`${baseName} II`, `${baseName} I`);
                } else if (currentLevelRoman === 'II') {
                  levelsToUnlock.push(`${baseName} I`);
                }

                levelsToUnlock.forEach(levelNameToUnlock => {
                  const precedingLevelItem = window.dataset.find(
                    k => k.name === levelNameToUnlock && k.type === 'Knowledge'
                  );
                  if (precedingLevelItem) {
                    const precedingSafeName = precedingLevelItem.name.replace(/\s+/g, '_');
                    // UNLOCKED_STATUS_PREFIX is accessible from the higher scope
                    const precedingStorageKey = `${UNLOCKED_STATUS_PREFIX}knowledge_${precedingSafeName}`; 
                    if (localStorage.getItem(precedingStorageKey) !== 'true') {
                      localStorage.setItem(precedingStorageKey, 'true');
                      console.log(`Auto-unlocked preceding level ${precedingLevelItem.name} upon printing ${currentItem.name}.`);
                    }
                  }
                });
              }
            }
          }
          // --- End auto-unlock logic ---

          // Existing logic for lastPrinted_ for Knowledges (keep this)
          if (currentItem && currentItem.type === 'Knowledge') {
              // const baseNameRegexForLastPrinted = /\s+(I|II|III)$/; // Can reuse romanNumeralRegex
              let baseNameForLastPrinted = labelTitle;
              if (romanNumeralRegex.test(labelTitle)) { // Re-use romanNumeralRegex
                  baseNameForLastPrinted = labelTitle.replace(romanNumeralRegex, '').trim();
              }
              try { localStorage.setItem(`lastPrinted_${baseNameForLastPrinted}`, labelTitle); }
              catch (e) { console.warn("LocalStorage error in printLabel for lastPrinted_:", e); }
          }
      }
  }

  // --- Content Filter Functions ---
  function populateExpansionFilters() {
      if (!window.dataset || !expansionCheckboxesContainer) return; // expansionCheckboxesContainer is now global-like
      const expansionNames = new Set([CORE_GAME_EXPANSION_NAME]);
      window.dataset.forEach(item => {
          if (item.expansion && typeof item.expansion === 'string' && item.expansion.trim() !== "") {
              expansionNames.add(item.expansion.trim());
          }
      });
      expansionCheckboxesContainer.innerHTML = '';
      expansionNames.forEach(name => {
          createFilterCheckbox(name, expansionCheckboxesContainer, 'expansion', `filter_expansion_${name.replace(/\s+/g, '_')}`);
      });
  }

  function populatePhilosophyFilters() {
      if (!window.dataset || !philosophyCheckboxesContainer) return; // philosophyCheckboxesContainer is now global-like
      const philosophyNames = new Set();
      window.dataset.forEach(item => {
          if (item.type === 'Philosophy' && item.name && typeof item.name === 'string' && item.name.trim() !== "") {
              philosophyNames.add(item.name.trim());
          }
      });
      philosophyCheckboxesContainer.innerHTML = '';
      philosophyNames.forEach(name => {
          createFilterCheckbox(name, philosophyCheckboxesContainer, 'philosophy', `filter_philosophy_${name.replace(/\s+/g, '_')}`);
      });
  }

  function createFilterCheckbox(name, container, type, storageKey) {
      const div = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `${type}_${name.replace(/\s+/g, '_')}`;
      checkbox.value = name;
      const storedValue = localStorage.getItem(storageKey);
      checkbox.checked = (storedValue === null || storedValue === 'true');

      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      label.textContent = name;

      checkbox.addEventListener('change', function() {
          localStorage.setItem(storageKey, this.checked);
          if(searchInput) {
            const currentQuery = searchInput.value;
            renderSuggestions(search(currentQuery));
          }
      });

      div.appendChild(checkbox);
      div.appendChild(label);
      container.appendChild(div);
  }

  function setupFilterControls() {
      if (selectAllExpansionsBtn) {
          selectAllExpansionsBtn.addEventListener('click', () => setAllCheckboxes(expansionCheckboxesContainer, true));
      }
      if (deselectAllExpansionsBtn) {
          deselectAllExpansionsBtn.addEventListener('click', () => setAllCheckboxes(expansionCheckboxesContainer, false));
      }
      if (selectAllPhilosophiesBtn) {
          selectAllPhilosophiesBtn.addEventListener('click', () => setAllCheckboxes(philosophyCheckboxesContainer, true));
      }
      if (deselectAllPhilosophiesBtn) {
          deselectAllPhilosophiesBtn.addEventListener('click', () => setAllCheckboxes(philosophyCheckboxesContainer, false));
      }
  }

  function setAllCheckboxes(container, isChecked) {
      if (!container) return;
      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(checkbox => {
          if (checkbox.checked !== isChecked) {
              checkbox.checked = isChecked;
              const event = new Event('change', { bubbles: true });
              checkbox.dispatchEvent(event);
          }
      });
  }
  // --- End Content Filter Functions ---

  // --- Event Listeners ---
  if (searchInput) {
    searchInput.addEventListener('input', debounce(e => {
        const results = search(e.target.value);
        renderSuggestions(results);
    }, 300));
    searchInput.addEventListener('focus', () => {
        searchInput.select();
        const results = search(searchInput.value);
        renderSuggestions(results);
    });
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

  document.addEventListener('click', (e) => {
      let clickedInsideMenuOrButton = (menuBtn && menuBtn.contains(e.target)) || (mainMenu && mainMenu.contains(e.target));

      // This part handles clicks outside of active elements to close them.
      // It's important to check if elements exist before trying to access their properties.
      if (suggestionBox && !suggestionBox.contains(e.target) && e.target !== searchInput) {
          suggestionBox.style.display = 'none';
      }
      if (mainMenu && !mainMenu.classList.contains('hidden') && !clickedInsideMenuOrButton) {
        let clickedInsideDialog = false;
        // Check if any dialog is currently open and if the click was inside it.
        // This assumes dialogOverlay, labelSettingsDialog, contentFiltersDialog are defined.
        if (dialogOverlay && !dialogOverlay.classList.contains('hidden')) {
            if (labelSettingsDialog && !labelSettingsDialog.classList.contains('hidden') && labelSettingsDialog.contains(e.target)) clickedInsideDialog = true;
            if (contentFiltersDialog && !contentFiltersDialog.classList.contains('hidden') && contentFiltersDialog.contains(e.target)) clickedInsideDialog = true;
            if (e.target === dialogOverlay) clickedInsideDialog = true;
        }
        if(!clickedInsideDialog) mainMenu.classList.add('hidden');
      }
  });

  if (printBtn) { printBtn.addEventListener('click', printLabel); }

  // This is the main menu toggle
  if (menuBtn && mainMenu) {
    menuBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      mainMenu.classList.toggle('hidden');
    });
  }

  // Event listeners for Label Settings save and calibration (ensure these elements exist)
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
        if (widthInput) settings.width = parseFloat(widthInput.value);
        if (heightInput) settings.height = parseFloat(heightInput.value);
        if (marginTopInput) settings.marginTop = parseFloat(marginTopInput.value);
        if (marginRightInput) settings.marginRight = parseFloat(marginRightInput.value);
        if (marginBottomInput) settings.marginBottom = parseFloat(marginBottomInput.value);
        if (marginLeftInput) settings.marginLeft = parseFloat(marginLeftInput.value);
        localStorage.setItem('labelSettings', JSON.stringify(settings));
        updatePreviewSize();

        const currentSelectedItemName = searchInput ? searchInput.value : "";
        let itemToReselect = null;
        if (currentSelectedItemName === "--- PRINT CALIBRATION LABEL ---") {
             itemToReselect = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };
        } else if (currentSelectedItemName && window.dataset) {
            itemToReselect = window.dataset.find(i => i.name === currentSelectedItemName);
        }
        if (itemToReselect) { selectItem(itemToReselect); }
    });
  }
  if (showCalibrationLabelBtn) {
      showCalibrationLabelBtn.addEventListener('click', function() {
          const calibrationItem = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };
          selectItem(calibrationItem);
      });
  }

  // Initial Population and Setup for filters
  // Ensure these containers are valid before calling population functions
  if (expansionCheckboxesContainer && philosophyCheckboxesContainer) {
      populateExpansionFilters();
      populatePhilosophyFilters();
      setupFilterControls();
  } else {
      // It's possible these elements are not in the DOM if this script runs before dialog HTML is injected
      // or if the dialogs are not yet part of the main page structure this script expects.
      // console.error("Filter checkbox containers not found during DOMContentLoaded. Ensure HTML is correct.");
  }

  updatePreviewSize(); // Initial call
  // Perform an initial search to apply default filters (everything on)
  if (searchInput) { // Make sure searchInput exists
    const initialResults = search(searchInput.value);
    renderSuggestions(initialResults);
  }

  // --- Dialog Management ---
  function openDialog(dialogElement) {
    if (dialogElement && dialogOverlay && mainMenu) {
      dialogElement.classList.remove('hidden');
      dialogOverlay.classList.remove('hidden');
      mainMenu.classList.add('hidden'); // Hide main menu when dialog opens
    }
  }

  function closeDialog(dialogElement) {
    if (dialogElement && dialogOverlay) {
      dialogElement.classList.add('hidden');
      dialogOverlay.classList.add('hidden');
    }
  }

  if (openLabelSettingsBtn && labelSettingsDialog) {
    openLabelSettingsBtn.addEventListener('click', function(event) {
      event.preventDefault();
      openDialog(labelSettingsDialog);
    });
  }

  if (openContentFiltersBtn && contentFiltersDialog) {
    openContentFiltersBtn.addEventListener('click', function(event) {
      event.preventDefault();
      openDialog(contentFiltersDialog);
    });
  }

  closeDialogBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const parentDialog = this.closest('.dialog-modal');
      if (parentDialog) {
        closeDialog(parentDialog);
      }
    });
  });

  if (dialogOverlay) {
    dialogOverlay.addEventListener('click', function() {
      if (labelSettingsDialog && !labelSettingsDialog.classList.contains('hidden')) {
        closeDialog(labelSettingsDialog);
      }
      if (contentFiltersDialog && !contentFiltersDialog.classList.contains('hidden')) {
        closeDialog(contentFiltersDialog);
      }
      if (unlockedStatusDialog && !unlockedStatusDialog.classList.contains('hidden')) { // Add this condition
        closeDialog(unlockedStatusDialog);
      }
    });
  }

  // Event Listener for "Unlocked Status" Dialog
  if (openUnlockedStatusBtn && unlockedStatusDialog) {
    openUnlockedStatusBtn.addEventListener('click', function(event) {
      event.preventDefault();
      populateUnlockedStatusDialog(); // Call it here
      openDialog(unlockedStatusDialog);
    });
  }
  // --- End Dialog Management ---

  const UNLOCKED_STATUS_PREFIX = 'unlocked_'; // Define storage key prefix

  // --- Unlocked Status Dialog Population ---
  function populateUnlockedStatusDialog() {
    const container = document.getElementById('unlockedItemsContainer');
    if (!container) {
      console.error("populateUnlockedStatusDialog: container 'unlockedItemsContainer' not found.");
      return;
    }
    container.innerHTML = ''; // Clear previous items

    if (!window.dataset || !Array.isArray(window.dataset)) {
      container.innerHTML = '<p>Error: Dataset not loaded.</p>';
      return;
    }

    // Helper to get all filterable philosophy names (similar to search function)
    // This is to ensure a knowledge's linked philosophy is one that *can* be filtered
    const filterablePhilosophyNames = new Set();
    if (philosophyCheckboxesContainer) { // philosophyCheckboxesContainer is global-like
        const philosophyCheckboxes = philosophyCheckboxesContainer.querySelectorAll('input[type="checkbox"]');
        philosophyCheckboxes.forEach(cb => filterablePhilosophyNames.add(cb.value));
    }


    const itemsToShow = window.dataset.filter(item => {
      const itemExpansionName = item.expansion && item.expansion.trim() !== "" ? item.expansion.trim() : CORE_GAME_EXPANSION_NAME;
      
      // Common check for expansion filter
      if (!isFilterActive('expansion', itemExpansionName)) {
        return false;
      }

      if (item.type === 'Philosophy') {
        return isFilterActive('philosophy', item.name.trim());
      } else if (item.type === 'Knowledge') {
        const linkedPhilosophy = item.philosophyLinked ? item.philosophyLinked.trim() : null;
        if (linkedPhilosophy && linkedPhilosophy !== "" && filterablePhilosophyNames.has(linkedPhilosophy)) {
          // If it's linked to a filterable philosophy, that philosophy must be active
          return isFilterActive('philosophy', linkedPhilosophy);
        } else if (linkedPhilosophy && linkedPhilosophy !== "" && !filterablePhilosophyNames.has(linkedPhilosophy)) {
          // If it's linked to a philosophy that IS NOT in the filter list (e.g. an "Other" or "General" type not explicitly listed),
          // it should probably be shown, as it cannot be filtered out by a philosophy filter.
          // However, the current isFilterActive('philosophy', linkedPhilosophy) would return true if it's not in localStorage (default true)
          // For safety, let's stick to the original logic: if linked, it must pass the filter.
          // If the philosophy is not in the filter list, isFilterActive will default to true, showing it.
          // This matches the example logic: isFilterActive('philosophy', linkedPhilosophy)
           return isFilterActive('philosophy', linkedPhilosophy);
        }
        // For knowledges not linked to a specific filterable philosophy, they are shown (as long as their expansion is active)
        return true;
      }
      return false;
    }).sort((a, b) => { // Basic sort: Type (Philosophy then Knowledge), then Name
      if (a.type === 'Philosophy' && b.type === 'Knowledge') return -1;
      if (a.type === 'Knowledge' && b.type === 'Philosophy') return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    if (itemsToShow.length === 0) {
      container.innerHTML = '<p>No Philosophies or Knowledges match the current content filters or none exist in the dataset.</p>';
      return;
    }

    itemsToShow.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('checkbox-item'); // For potential styling

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const safeItemName = item.name.replace(/\s+/g, '_'); // Use a consistent safe name for ID and storage
      const itemTypeLower = item.type.toLowerCase();
      checkbox.id = `unlocked_checkbox_${itemTypeLower}_${safeItemName}`; // Make ID more specific for checkboxes
      checkbox.value = item.name;
      checkbox.dataset.itemType = item.type;

      // --- Load status from localStorage ---
      const storageKey = `${UNLOCKED_STATUS_PREFIX}${itemTypeLower}_${safeItemName}`;
      const isUnlocked = localStorage.getItem(storageKey) === 'true';
      checkbox.checked = isUnlocked;
      // --- End Load status ---

      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      let labelText = item.name;
      if (item.type === 'Knowledge') {
          labelText += ` (Knowledge${item.philosophyLinked ? ' - ' + item.philosophyLinked : ''})`;
      } else { // Philosophy
          labelText += ` (Philosophy)`;
      }
      label.textContent = labelText;

      // --- Save status to localStorage on change ---
      checkbox.addEventListener('change', function() {
        // We can re-derive storageKey or use the one from the outer scope if careful
        const currentStorageKey = `${UNLOCKED_STATUS_PREFIX}${this.dataset.itemType.toLowerCase()}_${this.value.replace(/\s+/g, '_')}`;
        localStorage.setItem(currentStorageKey, this.checked);
        // console.log(`Saved ${currentStorageKey} = ${this.checked}`);
      });
      // --- End Save status ---

      div.appendChild(checkbox);
      div.appendChild(label);
      container.appendChild(div);
    });
  }
  // --- End Unlocked Status Dialog Population ---

  // --- Clear Unlocked Data Functionality ---
  if (clearUnlockedDataBtn) {
    clearUnlockedDataBtn.addEventListener('click', function() {
      if (confirm('Are you sure you want to clear ALL unlocked Philosophies and Knowledges data? This action cannot be undone.')) {
        let clearedCount = 0;
        const keysToRemove = [];

        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith(UNLOCKED_STATUS_PREFIX)) {
            keysToRemove.push(key);
          }
        }

        keysToRemove.forEach(key => {
          localStorage.removeItem(key);
          clearedCount++;
        });

        if (clearedCount > 0) {
          console.log(`Cleared ${clearedCount} unlocked item statuses from localStorage.`);
        } else {
          console.log('No unlocked item statuses found in localStorage to clear.');
        }

        // Refresh the dialog view if it's open
        // unlockedStatusDialog is accessible from the outer scope
        if (unlockedStatusDialog && !unlockedStatusDialog.classList.contains('hidden')) {
          populateUnlockedStatusDialog(); // populateUnlockedStatusDialog is accessible
        }
      }
    });
  }
  // --- End Clear Unlocked Data Functionality ---

  // --- Event Listener for Opening "Deck Building" Dialog ---
  if (openDeckBuildingBtn && deckBuildingDialog) {
    openDeckBuildingBtn.addEventListener('click', function(event) {
      event.preventDefault();
      populateDeckBuildingDialog();
      // updateDeckSummaryAndRules(); // Called at the end of populateDeckBuildingDialog now
      openDialog(deckBuildingDialog);
    });
  }
  // --- End Event Listener for Opening "Deck Building" Dialog ---

  // --- Deck Building Dialog Population and Rules ---
  function populateDeckBuildingDialog() {
    if (!availableTraitsContainer) {
      console.error("populateDeckBuildingDialog: container 'availableTraitsContainer' not found.");
      return;
    }
    availableTraitsContainer.innerHTML = '';

    if (!window.dataset || !Array.isArray(window.dataset)) {
      availableTraitsContainer.innerHTML = '<p>Error: Dataset not loaded.</p>';
      return;
    }

    const characterTraits = window.dataset.filter(item => {
      if (item.type === 'Character Trait') {
        const itemExpansionName = item.expansion && item.expansion.trim() !== "" ? item.expansion.trim() : CORE_GAME_EXPANSION_NAME;
        return isFilterActive('expansion', itemExpansionName); // CORE_GAME_EXPANSION_NAME & isFilterActive are accessible
      }
      return false;
    }).sort((a, b) => { // Sort by subtype, then name
      const subTypeA = a.traitSubType || 'Unknown'; // Handle undefined/null traitSubType
      const subTypeB = b.traitSubType || 'Unknown';
      if (subTypeA < subTypeB) return -1;
      if (subTypeA > subTypeB) return 1;
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    if (characterTraits.length === 0) {
      availableTraitsContainer.innerHTML = '<p>No Character Traits match the current content filters or none exist in the dataset.</p>';
      return;
    }

    characterTraits.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('checkbox-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const safeName = item.name.replace(/\s+/g, '_').replace(/[^\w-]/g, ''); // Make ID safer
      checkbox.id = `deck_trait_${safeName}`;
      checkbox.value = item.name;
      checkbox.dataset.itemName = item.name;
      checkbox.dataset.traitSubType = item.traitSubType || 'Unknown'; // Default if undefined
      checkbox.dataset.itemId = item.id || safeName; // Use ID if available, else safeName as fallback

      checkbox.addEventListener('change', function() {
        // console.log(`Trait ${this.value} (${this.dataset.traitSubType}) selected: ${this.checked}`);
        updateDeckSummaryAndRules(); // This function will be implemented next
      });

      const label = document.createElement('label');
      label.htmlFor = checkbox.id;
      label.textContent = `${item.name} (${item.traitSubType || 'Trait'})`; // Display fallback if subtype missing

      div.appendChild(checkbox);
      div.appendChild(label);
      availableTraitsContainer.appendChild(div);
    });
    updateDeckSummaryAndRules(); // Initial call after populating and before dialog is shown if called from open button.
  }

  function updateDeckSummaryAndRules() {
    if (!availableTraitsContainer || !deckTotalItemsSpan || !deckImpairmentCountSpan || !deckAbilitiesPerImpairmentSpan || !deckLegendaryCountSpan || !deckRuleViolationsDiv) {
      console.error("updateDeckSummaryAndRules: One or more UI elements for deck summary are missing.");
      return;
    }

    const selectedTraitCheckboxes = availableTraitsContainer.querySelectorAll('input[type="checkbox"]:checked');

    let totalItems = 0;
    let impairmentCount = 0;
    let abilityCount = 0;
    let legendaryCount = 0;

    selectedTraitCheckboxes.forEach(checkbox => {
      totalItems++;
      const subType = checkbox.dataset.traitSubType;
      if (subType === 'Impairment') impairmentCount++;
      if (subType === 'Ability') abilityCount++;
      if (subType === 'Legendary Ability') legendaryCount++;
    });

    // Update Summary Spans
    const minItemsRule = 24;
    deckTotalItemsSpan.textContent = `${totalItems}/${minItemsRule}`;
    deckImpairmentCountSpan.textContent = impairmentCount;
    deckAbilitiesPerImpairmentSpan.textContent = `${abilityCount}`; // Displaying current ability count
    const maxLegendaryRule = 1;
    deckLegendaryCountSpan.textContent = `${legendaryCount}/${maxLegendaryRule}`;

    // Check Rules and Display Violations
    deckRuleViolationsDiv.innerHTML = '';
    let violations = [];

    // Rule 1: Min 24 items
    const minItemsRule = 24; // Defined this earlier in the function, but good to re-affirm
    if (totalItems > 0 && totalItems < minItemsRule) { // Only show if some items are selected but not enough
        violations.push(`Minimum ${minItemsRule} items required.`);
    }
    deckTotalItemsSpan.parentElement.classList.toggle('violated', totalItems > 0 && totalItems < minItemsRule);
    // deckTotalItemsSpan.textContent = `${totalItems}/${minItemsRule}`; // Already set earlier


    // Rule 2: If Impairments > 0, then Abilities <= 5
    const maxAbilitiesWithImpairments = 5;
    if (impairmentCount > 0 && abilityCount > maxAbilitiesWithImpairments) {
      violations.push(`Max ${maxAbilitiesWithImpairments} 'Ability' traits allowed when 'Impairment' traits are present.`);
    }
    deckAbilitiesPerImpairmentSpan.parentElement.classList.toggle('violated', impairmentCount > 0 && abilityCount > maxAbilitiesWithImpairments);

    // Rule 3: Max 1 Legendary Ability
    if (legendaryCount > maxLegendaryRule) {
      violations.push(`Maximum ${maxLegendaryRule} 'Legendary Ability' trait allowed.`);
    }
    deckLegendaryCountSpan.parentElement.classList.toggle('violated', legendaryCount > maxLegendaryRule);

    // Display Violations
    if (violations.length > 0) {
      violations.forEach(msg => {
        const p = document.createElement('p');
        p.classList.add('rule-violation-message'); // For styling
        p.textContent = msg;
        deckRuleViolationsDiv.appendChild(p);
      });
    }
  }
  // --- End Deck Building Dialog Population and Rules ---

  // Update dialogOverlay click listener (original location in script)
  // This is a bit of a re-declaration of the listener, ensure it's the only one or refactor.
  // For now, assuming this replaces or is the primary one for the overlay.
  // NO CHANGE NEEDED HERE FOR THIS SUBTASK, the previous subtask already updated it.
  // if (dialogOverlay) { ... }

  // Ensure updateDeckSummaryAndRules is called after populating traits in populateDeckBuildingDialog
  // Modify populateDeckBuildingDialog to call updateDeckSummaryAndRules at the end
  // This is done by replacing the existing populateDeckBuildingDialog function
  // with one that includes this call.
  // The previous diff for populateDeckBuildingDialog already has the call to updateDeckSummaryAndRules
  // in the checkbox event listener. We need to add it once after the loop.

  // Re-defining populateDeckBuildingDialog to include the call to updateDeckSummaryAndRules at the end.
  // This will replace the version from the previous step.

  // The change is inside the existing populateDeckBuildingDialog, just adding a line at the end.
  // So, will use a SEARCH/REPLACE block for that.
});

// The following is a conceptual placement. The actual change will be inside populateDeckBuildingDialog
// <<< SEARCH inside populateDeckBuildingDialog
//     availableTraitsContainer.appendChild(div);
//   });
// }
// >>> REPLACE
//     availableTraitsContainer.appendChild(div);
//   });
//   updateDeckSummaryAndRules(); // Initial call to set summary based on (empty) current selection
// }
// >>>
// This specific block is better handled by directly modifying the function body.
// I'll add it as a separate replace block for clarity of the intended change.