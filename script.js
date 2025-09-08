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
  const exportJpgBtn = document.getElementById('exportJpg');

  // Elements within Label Settings Dialog (even though dialogs aren't fully functional yet, IDs are there)
  const saveBtn = document.getElementById('save');
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const marginTopInput = document.getElementById('marginTop');
  const marginRightInput = document.getElementById('marginRight');
  const marginBottomInput = document.getElementById('marginBottom');
  const marginLeftInput = document.getElementById('marginLeft');
  const autoPrintCheckbox = document.getElementById('autoPrint');
  const printCalibrationLabelBtn = document.getElementById('printCalibrationLabelBtn'); // Renamed from showCalibrationLabelBtn

  // Unit switching elements
  const unitMMRadio = document.getElementById('unitMM');
  const unitInchesRadio = document.getElementById('unitInches');
  const unitDisplays = document.querySelectorAll('.unit-display'); // Collection of all spans showing "mm" or "in"

  // Embedded calibration preview elements
  // const calibrationPreviewContainer = document.getElementById('calibrationPreviewContainer'); // Obsolete
  const embeddedCalibrationPreviewFrame = document.getElementById('embeddedCalibrationPreviewFrame'); // Changed from embeddedCalibrationLabel
  // const previewMarginDisplayTop = document.getElementById('previewMarginDisplayTop'); // Obsolete
  // const previewMarginDisplayRight = document.getElementById('previewMarginDisplayRight'); // Obsolete
  // const previewMarginDisplayBottom = document.getElementById('previewMarginDisplayBottom'); // Obsolete
  // const previewMarginDisplayLeft = document.getElementById('previewMarginDisplayLeft'); // Obsolete

  const menuBtn = document.getElementById('menuBtn');
  const mainMenu = document.getElementById('mainMenu'); // This is the panel with menu item links

  // Dialog related elements (for future use in next step, ensure IDs are correct in HTML)
  const openLabelSettingsBtn = document.getElementById('openLabelSettingsBtn');
  const openContentFiltersBtn = document.getElementById('openContentFiltersBtn');
  const labelSettingsDialog = document.getElementById('labelSettingsDialog');
  const contentFiltersDialog = document.getElementById('contentFiltersDialog');
  const dialogOverlay = document.getElementById('dialogOverlay');
  const closeDialogBtns = document.querySelectorAll('.dialog-close-btn');

  const survivorSheetBtn = document.getElementById('survivorSheetBtn');
  const survivorSheetMenu = document.getElementById('survivorSheetMenu');
  const survivorSheetSubMenu = document.getElementById('survivorSheetSubMenu');
  const helpBtn = document.getElementById('helpBtn');
  const helpDialog = document.getElementById('helpDialog');
  const patchNotesBtn = document.getElementById('patchNotesBtn');
  const patchNotesDialog = document.getElementById('patchNotesDialog');
  const filterSaveFeedback = document.getElementById('filterSaveFeedback'); // Added for filter save feedback
  const resetKnowledgeBtn = document.getElementById('resetKnowledgeBtn');

  // Assign DOM elements for filter containers here (these are inside contentFiltersDialog)
  expansionCheckboxesContainer = document.getElementById('expansionCheckboxes');
  philosophyCheckboxesContainer = document.getElementById('philosophyCheckboxes');

  // const weaponViewRadios = document.querySelectorAll('input[name="weaponView"]'); // Removed

  const selectAllExpansionsBtn = document.getElementById('selectAllExpansions');
  const deselectAllExpansionsBtn = document.getElementById('deselectAllExpansions');
  const selectAllPhilosophiesBtn = document.getElementById('selectAllPhilosophies');
  const deselectAllPhilosophiesBtn = document.getElementById('deselectAllPhilosophies');

  const romanNumeralRegex = /\s+(I|II|III)$/;
  const philosophyKnowledgeMap = { "The First Step": "Path of the First Step", "The Second Step": "Path of the Second Step", "The Third Step": "Path of the Third Step" };

  const MM_TO_INCHES = 1 / 25.4;
  const INCHES_TO_MM = 25.4;

  let defaultSettings = {
      width: 54,    // mm - Updated default
      height: 25,   // mm - Updated default
      marginTop: 1,   // mm - Standard default
      marginRight: 1, // mm - Standard default
      marginBottom: 1,// mm - Standard default
      marginLeft: 1,  // mm - Standard default
      preferredUnit: 'mm',
      autoPrint: true
  };
  let settings = { ...defaultSettings }; // Initialize settings with defaults

  // Function to update all unit display spans
  function updateUnitDisplays(unit) {
    unitDisplays.forEach(span => span.textContent = unit);
  }

  // Function to convert settings values to a target unit
  function convertSettingsValues(currentSettings, targetUnit) {
    const newSettings = { ...currentSettings };
    const fieldsToConvert = ['width', 'height', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft'];

    if (currentSettings.preferredUnit === targetUnit) {
      return newSettings; // No conversion needed
    }

    const conversionFactor = targetUnit === 'in' ? MM_TO_INCHES : INCHES_TO_MM;

    fieldsToConvert.forEach(field => {
      // If converting from MM to IN, or IN to MM
      if (currentSettings.preferredUnit === 'mm' && targetUnit === 'in') {
        newSettings[field] = parseFloat((currentSettings[field] * MM_TO_INCHES).toFixed(3));
      } else if (currentSettings.preferredUnit === 'in' && targetUnit === 'mm') {
        newSettings[field] = parseFloat((currentSettings[field] * INCHES_TO_MM).toFixed(1));
      }
    });
    newSettings.preferredUnit = targetUnit;
    return newSettings;
  }

  // Function to load settings from localStorage and apply them
  function loadAndApplySettings() {
    const loadedSettingsString = localStorage.getItem('labelSettings');
    if (loadedSettingsString) {
        const loaded = JSON.parse(loadedSettingsString);
        // Ensure all fields from defaultSettings are present
        settings = { ...defaultSettings, ...loaded };
    } else {
        settings = { ...defaultSettings };
    }

    // Values in 'settings' are already in the preferredUnit from storage, or default (mm)
    // No conversion needed here, just apply to UI
    if (widthInput) widthInput.value = settings.width;
    if (heightInput) heightInput.value = settings.height;
    if (marginTopInput) marginTopInput.value = settings.marginTop;
    if (marginRightInput) marginRightInput.value = settings.marginRight;
    if (marginBottomInput) marginBottomInput.value = settings.marginBottom;
    if (marginLeftInput) marginLeftInput.value = settings.marginLeft;

    if (settings.preferredUnit === 'in') {
        if (unitInchesRadio) unitInchesRadio.checked = true;
    } else {
        if (unitMMRadio) unitMMRadio.checked = true; // Default
    }
    if (autoPrintCheckbox) autoPrintCheckbox.checked = settings.autoPrint;
    updateUnitDisplays(settings.preferredUnit);
    updatePreviewSize(); // Ensure preview uses correct unit if it depends on global settings object
  }


  // Function to update input fields from the global 'settings' object
  function updateInputFieldsFromSettings() {
    if (widthInput) widthInput.value = settings.width;
    if (heightInput) heightInput.value = settings.height;
    if (marginTopInput) marginTopInput.value = settings.marginTop;
    if (marginRightInput) marginRightInput.value = settings.marginRight;
    if (marginBottomInput) marginBottomInput.value = settings.marginBottom;
    if (marginLeftInput) marginLeftInput.value = settings.marginLeft;
    updateUnitDisplays(settings.preferredUnit);
    // Also update the embedded preview when input fields are programmatically changed
    // This ensures consistency if settings are loaded or units change.
    updateEmbeddedCalibrationPreview();
  }


  // Event listener for unit change
  function handleUnitChange(event) {
    const newUnit = event.target.value;
    if (newUnit !== settings.preferredUnit) {
      // Get current values from input fields, assuming they are in the OLD unit
      const currentValues = {
        width: parseFloat(widthInput.value),
        height: parseFloat(heightInput.value),
        marginTop: parseFloat(marginTopInput.value),
        marginRight: parseFloat(marginRightInput.value),
        marginBottom: parseFloat(marginBottomInput.value),
        marginLeft: parseFloat(marginLeftInput.value),
        preferredUnit: settings.preferredUnit // The old unit
      };

      const convertedValues = convertSettingsValues(currentValues, newUnit);

      // Update global settings object
      settings = { ...settings, ...convertedValues }; // Spread to keep other non-converted settings if any

      // Update UI input fields with new converted values
      updateInputFieldsFromSettings();
      // Note: Save button will persist these new settings.
    }
  }

  if (unitMMRadio) unitMMRadio.addEventListener('change', handleUnitChange);
  if (unitInchesRadio) unitInchesRadio.addEventListener('change', handleUnitChange);


  // Initial load of settings
  loadAndApplySettings(); // This already calls updatePreviewSize

  function updateEmbeddedCalibrationPreview() {
    if (!embeddedCalibrationPreviewFrame) return;

    // 1. Get current values from input fields (these are in the currently selected unit)
    const currentWidth = parseFloat(widthInput.value);
    const currentHeight = parseFloat(heightInput.value);
    const currentMarginTop = parseFloat(marginTopInput.value);
    const currentMarginRight = parseFloat(marginRightInput.value);
    const currentMarginBottom = parseFloat(marginBottomInput.value);
    const currentMarginLeft = parseFloat(marginLeftInput.value);
    const currentUnit = settings.preferredUnit; // mm or in

    // 2. Convert all dimensions to MM for sending to the iframe
    let settingsForIframe = {
        width: currentWidth,
        height: currentHeight,
        marginTop: currentMarginTop,
        marginRight: currentMarginRight,
        marginBottom: currentMarginBottom,
        marginLeft: currentMarginLeft,
        preferredUnit: currentUnit // Keep original unit for a moment
    };

    if (currentUnit === 'in') {
        settingsForIframe.width = parseFloat((currentWidth * INCHES_TO_MM).toFixed(1));
        settingsForIframe.height = parseFloat((currentHeight * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginTop = parseFloat((currentMarginTop * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginRight = parseFloat((currentMarginRight * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginBottom = parseFloat((currentMarginBottom * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginLeft = parseFloat((currentMarginLeft * INCHES_TO_MM).toFixed(1));
    }
    settingsForIframe.unit = 'mm'; // Explicitly tell iframe units are mm
    delete settingsForIframe.preferredUnit; // Not needed by label_render.html

    // 3. Prepare calibration item data
    const calibrationItem = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };

    // 4. Prepare data for iframe
    const dataForIframe = {
        item: calibrationItem,
        settings: settingsForIframe,
        // No tenetKnowledgeItem or weaponViewType for calibration label
    };

    // 5. Scale the iframe container itself
    const PREVIEW_MAX_WIDTH = 150;
    const PREVIEW_MAX_HEIGHT = 100;
    let displayWidthPx, displayHeightPx;

    // Use the MM dimensions for scaling the iframe box
    const widthInMMForScaling = (currentUnit === 'in') ? currentWidth * INCHES_TO_MM : currentWidth;
    const heightInMMForScaling = (currentUnit === 'in') ? currentHeight * INCHES_TO_MM : currentHeight;

    if (widthInMMForScaling <= 0 || heightInMMForScaling <= 0) {
        displayWidthPx = 0;
        displayHeightPx = 0;
    } else {
        const aspectRatio = widthInMMForScaling / heightInMMForScaling;
        if (widthInMMForScaling > heightInMMForScaling) {
            displayWidthPx = PREVIEW_MAX_WIDTH;
            displayHeightPx = displayWidthPx / aspectRatio;
            if (displayHeightPx > PREVIEW_MAX_HEIGHT) {
                displayHeightPx = PREVIEW_MAX_HEIGHT;
                displayWidthPx = displayHeightPx * aspectRatio;
            }
        } else {
            displayHeightPx = PREVIEW_MAX_HEIGHT;
            displayWidthPx = displayHeightPx * aspectRatio;
            if (displayWidthPx > PREVIEW_MAX_WIDTH) {
                displayWidthPx = PREVIEW_MAX_WIDTH;
                displayHeightPx = displayWidthPx / aspectRatio;
            }
        }
    }
    displayWidthPx = Math.max(0, Math.round(displayWidthPx));
    displayHeightPx = Math.max(0, Math.round(displayHeightPx));

    embeddedCalibrationPreviewFrame.style.width = displayWidthPx + 'px';
    embeddedCalibrationPreviewFrame.style.height = displayHeightPx + 'px';

    // 6. Post data to iframe
    const targetOrigin = window.location.origin === 'null' || window.location.protocol === 'file:' ? '*' : window.location.origin;

    // Ensure iframe is loaded before posting. If src is static, this might be tricky without onload.
    // A common pattern is to set src and then post on iframe's 'load' event.
    // For simplicity, if iframe.contentWindow is available, try posting.
    // This assumes "label_render.html" is set as src in HTML and has loaded.
    if (embeddedCalibrationPreviewFrame.contentWindow) {
        embeddedCalibrationPreviewFrame.contentWindow.postMessage(dataForIframe, targetOrigin);
    } else {
        // This might happen if called too early. Could add a listener for iframe load.
        console.warn("Embedded calibration preview iframe contentWindow not ready.");
    }
  }

  // Call it once initially after settings are loaded and applied to UI
  // loadAndApplySettings itself will trigger necessary updates.
  // We might need to call it when the dialog becomes visible if it's not initially.
  // However, event listeners will cover changes while dialog is open.
  // Let's ensure it's called after the first full setup.
  // The `loadAndApplySettings` already calls `updateInputFieldsFromSettings` which sets values.
  // Then, the event listeners should pick up from there.
  // A direct call after load might be good.
  // updateEmbeddedCalibrationPreview(); // Initial call moved to iframe onload

  if (embeddedCalibrationPreviewFrame) {
    // Set the source for the iframe if it's not already set, or to ensure it reloads if necessary.
    // However, it's already set in HTML to label_render.html.
    // We just need to ensure we post data after it's loaded.

    let initialUpdateDone = false; // Flag to ensure initial update runs only once via onload or direct check

    const performInitialPreviewUpdate = () => {
      if (!initialUpdateDone) {
        // console.log("Performing initial embedded preview update.");
        updateEmbeddedCalibrationPreview();
        initialUpdateDone = true;
      }
    };

    embeddedCalibrationPreviewFrame.onload = () => {
      // console.log("Embedded preview iframe loaded via onload event.");
      performInitialPreviewUpdate();
      // To prevent this onload from firing multiple times if src were changed by JS (not planned here):
      // embeddedCalibrationPreviewFrame.onload = null;
    };

    // Fallback for browsers that might have already loaded the iframe (e.g. from cache)
    // before the onload listener was attached.
    if (embeddedCalibrationPreviewFrame.contentWindow &&
        embeddedCalibrationPreviewFrame.contentWindow.document.readyState === 'complete') {
      // console.log("Embedded preview iframe already complete on script run, attempting update.");
      // A small delay can sometimes help ensure everything is truly ready.
      setTimeout(performInitialPreviewUpdate, 100);
    }
  } else {
    console.warn("embeddedCalibrationPreviewFrame not found for onload setup.");
  }

  // Add event listeners to all dimension/margin inputs to update the preview live
  const inputsForLivePreview = [
    widthInput, heightInput,
    marginTopInput, marginRightInput, marginBottomInput, marginLeftInput
  ];

  inputsForLivePreview.forEach(input => {
    if (input) { // Check if the element exists
      input.addEventListener('input', updateEmbeddedCalibrationPreview);
    }
  });

  // Note: The unit radio button change is already handled because `handleUnitChange`
  // calls `updateInputFieldsFromSettings`, which now calls `updateEmbeddedCalibrationPreview`.


  // Set initial state of weapon view radio buttons // Removed
  // weaponViewRadios.forEach(radio => {
  //   if (radio.value === preferredWeaponView) {
  //     radio.checked = true;
  //   }
  // });

  let selectedIndex = -1;

  function updatePreviewSize() {
    if (previewFrame) {
      let displayWidth = settings.width;
      let displayHeight = settings.height;
      // Convert to MM for preview iframe style, as it might expect MM consistency from before
      if (settings.preferredUnit === 'in') {
        displayWidth = settings.width * INCHES_TO_MM;
        displayHeight = settings.height * INCHES_TO_MM;
      }
      // The previewFrame style itself should probably always be in mm for consistency of the visual preview box
      previewFrame.style.width = displayWidth + 'mm';
      previewFrame.style.height = displayHeight + 'mm';
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

    return window.dataset.flatMap(originalItem => {
      if (!originalItem || typeof originalItem.name !== 'string' || typeof originalItem.type !== 'string') {
        return []; // Skip invalid items
      }

      const nameMatches = !trimmedQuery || originalItem.name.toLowerCase().includes(trimmedQuery);
      if (!nameMatches && trimmedQuery) {
        return []; // Does not match search query
      }

      let itemExpansionName = originalItem.expansion && originalItem.expansion.trim() !== "" ? originalItem.expansion.trim() : CORE_GAME_EXPANSION_NAME;
      if (!isFilterActive('expansion', itemExpansionName)) {
        return []; // Filtered out by expansion
      }

      if (originalItem.type === 'Philosophy') {
        if (!isFilterActive('philosophy', originalItem.name.trim())) {
          return []; // Filtered out by philosophy
        }
      } else if (originalItem.type === 'Knowledge') {
        const linkedPhilosophy = originalItem.philosophyLinked ? originalItem.philosophyLinked.trim() : null;
        if (linkedPhilosophy && linkedPhilosophy !== "" && filterablePhilosophyNames.has(linkedPhilosophy)) {
          if (!isFilterActive('philosophy', linkedPhilosophy)) {
            return []; // Linked philosophy is filtered out
          }
        }
      }

      // If it's a weapon and passes all above filters, create two versions
      if (originalItem.type === 'Weapon') {
        const specialistVersion = {
          ...originalItem, // Spread original item properties
          name: `${originalItem.name} (Specialist)`,
          displayType: 'specialist',
          originalName: originalItem.name // Keep track of the original name for selection
        };
        const masteryVersion = {
          ...originalItem,
          name: `${originalItem.name} (Mastery)`,
          displayType: 'mastery',
          originalName: originalItem.name // Keep track of the original name for selection
        };
        return [specialistVersion, masteryVersion];
      }

      // For non-weapon items that pass filters
      return [originalItem];
    });
  }

  // Event listener for Help button
  if (helpBtn) {
    helpBtn.addEventListener('click', (event) => {
      event.preventDefault();
      openDialog(helpDialog); // Uses the generic openDialog function
    });
  }

  // Event listener for Survivor Sheet menu toggle
  if (survivorSheetBtn && survivorSheetMenu && survivorSheetSubMenu) {
    survivorSheetBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      survivorSheetMenu.classList.toggle('open');
      survivorSheetSubMenu.classList.toggle('open');
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

  function selectItem(itemFromSuggestion) { // Renamed item to itemFromSuggestion for clarity
      if (!previewFrame || !searchInput) { console.error("selectItem: previewFrame or searchInput missing."); return; }
      if (!itemFromSuggestion || typeof itemFromSuggestion.name === 'undefined') { console.error("selectItem: Invalid item.", itemFromSuggestion); return; }

      if (suggestionBox) { suggestionBox.style.display = 'none'; }
      searchInput.value = itemFromSuggestion.name; // Keep the suffixed name in the search bar

      let originalItemData = itemFromSuggestion;
      let weaponViewType = itemFromSuggestion.displayType; // Will be 'specialist' or 'mastery' for weapons

      // If it's a weapon variant from search, find the true original item from dataset
      // The itemFromSuggestion is a shallow copy with modified name and new displayType/originalName.
      // We need to send the *actual* full original item to the iframe.
      if (itemFromSuggestion.displayType && itemFromSuggestion.originalName && window.dataset) {
        const foundOriginal = window.dataset.find(i => i.name === itemFromSuggestion.originalName && i.type === 'Weapon');
        if (foundOriginal) {
            originalItemData = foundOriginal;
        } else {
            console.error(`Could not find original weapon data for: ${itemFromSuggestion.originalName}`);
            // Fallback to using itemFromSuggestion, though it might lack some original props if not spread fully
            originalItemData = { ...itemFromSuggestion };
            delete originalItemData.displayType; // Don't send this if we couldn't find original
            delete originalItemData.originalName;
            // We still have itemFromSuggestion.displayType for weaponViewType though
        }
      }


      let tenetKnowledgeItemData = null;
      // Use originalItemData for checks if it's a weapon variant, otherwise itemFromSuggestion
      const itemForLogic = (itemFromSuggestion.displayType && itemFromSuggestion.originalName) ? originalItemData : itemFromSuggestion;

      if (itemForLogic.type === 'Philosophy' && itemForLogic.tenetKnowledge && typeof window.dataset !== 'undefined') {
          const baseKnowledgeName = itemForLogic.tenetKnowledge; // Changed 'item' to 'itemForLogic'
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
      // const selectedWeaponView = document.querySelector('input[name="weaponView"]:checked')?.value || 'specialist'; // No longer needed

      // Prepare settings for iframe: always convert dimensions to MM
      let settingsForIframe = JSON.parse(JSON.stringify(settings));
      if (settings.preferredUnit === 'in') {
        settingsForIframe.width = parseFloat((settings.width * INCHES_TO_MM).toFixed(1));
        settingsForIframe.height = parseFloat((settings.height * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginTop = parseFloat((settings.marginTop * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginRight = parseFloat((settings.marginRight * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginBottom = parseFloat((settings.marginBottom * INCHES_TO_MM).toFixed(1));
        settingsForIframe.marginLeft = parseFloat((settings.marginLeft * INCHES_TO_MM).toFixed(1));
        settingsForIframe.preferredUnit = 'mm'; // Tell iframe the values are in mm
      }
      // Ensure unit field is named 'unit' if label_render.html expects that from old structure
      settingsForIframe.unit = 'mm';


      const dataForIframe = {
          item: JSON.parse(JSON.stringify(originalItemData)),
          settings: settingsForIframe, // Pass the mm-converted settings
          tenetKnowledgeItem: tenetKnowledgeItemData,
          weaponViewType: weaponViewType
      };

      const iframeSrc = 'label_render.html';
      const targetOrigin = window.location.origin === 'null' || window.location.protocol === 'file:' ? '*' : window.location.origin;

      const postDataToIframe = () => {
          if (previewFrame.contentWindow) {
              previewFrame.contentWindow.postMessage(dataForIframe, targetOrigin);
          } else { console.error(`KDMLabels.html: previewFrame.contentWindow not ready.`);}
      };

      // Force iframe reload for weapons to ensure view type change is picked up, or for Philosophy/Calibration
      if (itemForLogic.type === 'Weapon' || itemForLogic.type === 'Philosophy' || itemForLogic.type === 'Calibration' || previewFrame.getAttribute('src') !== iframeSrc) {
          previewFrame.setAttribute('src', iframeSrc);
          previewFrame.onload = () => {
              if (previewFrame.getAttribute('src') === iframeSrc && previewFrame.contentWindow) {
                   postDataToIframe();
              }
              previewFrame.onload = null; // Important to prevent multiple loads if user clicks fast
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

  // --- Content Filter Functions ---
  let saveFeedbackTimeout = null; // Timeout ID for filter save feedback

  function showFilterSaveFeedback() {
    if (filterSaveFeedback) {
      filterSaveFeedback.classList.remove('hidden');
      // Clear any existing timeout to reset the duration
      if (saveFeedbackTimeout) {
        clearTimeout(saveFeedbackTimeout);
      }
      saveFeedbackTimeout = setTimeout(() => {
        filterSaveFeedback.classList.add('hidden');
        saveFeedbackTimeout = null;
      }, 2000); // Show for 2 seconds
    }
  }

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
          showFilterSaveFeedback(); // Show feedback
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

  window.addEventListener('message', function(event) {
    // IMPORTANT: Check the origin of the message for security
    const targetOrigin = window.location.origin === 'null' || window.location.protocol === 'file:' ? '*' : window.location.origin;
    if (targetOrigin !== '*' && event.origin !== targetOrigin) {
        console.warn(`[script.js] Discarding message from unexpected origin: ${event.origin}`);
        return;
    }

    if (event.source === previewFrame.contentWindow && event.data.action === 'labelRendered') {
        if (settings.autoPrint) {
            printLabel();
        }
    }
  });

  // Function to open a dialog
  function openDialog(dialogElement) {
    if (dialogElement && dialogOverlay) {
      dialogElement.classList.remove('hidden');
      dialogOverlay.classList.remove('hidden');
      if (mainMenu && !mainMenu.classList.contains('hidden')) {
        mainMenu.classList.add('hidden'); // Close menu when dialog opens
      }
    }
  }

  // Function to close any active dialog
  function closeActiveDialog() {
    if (dialogOverlay) dialogOverlay.classList.add('hidden');
    if (labelSettingsDialog && !labelSettingsDialog.classList.contains('hidden')) {
      labelSettingsDialog.classList.add('hidden');
    }
    if (contentFiltersDialog && !contentFiltersDialog.classList.contains('hidden')) {
      contentFiltersDialog.classList.add('hidden');
    }
    // Add future dialogs here for closing, e.g., helpDialog
    const helpDialog = document.getElementById('helpDialog'); // Get it here as it might not exist when script first runs
    if (helpDialog && !helpDialog.classList.contains('hidden')) {
        helpDialog.classList.add('hidden');
    }
  }

  // Event listeners for opening dialogs
  if (openLabelSettingsBtn) {
    openLabelSettingsBtn.addEventListener('click', (event) => {
      event.preventDefault();
      openDialog(labelSettingsDialog);
    });
  }

  if (openContentFiltersBtn) {
    openContentFiltersBtn.addEventListener('click', (event) => {
      event.preventDefault();
      openDialog(contentFiltersDialog);
    });
  }

  // Event listeners for closing dialogs
  if (dialogOverlay) {
    dialogOverlay.addEventListener('click', closeActiveDialog);
  }

  closeDialogBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // const dialogId = btn.getAttribute('data-dialog-id');
        // const dialogToClose = document.getElementById(dialogId);
        // if (dialogToClose) {
        //   dialogToClose.classList.add('hidden');
        // }
        // if (dialogOverlay) {
        //   dialogOverlay.classList.add('hidden');
        // }
        closeActiveDialog(); // Simplified to close any active dialog
    });
  });

  // Weapon View Radio Button Listener // Removed
  // weaponViewRadios.forEach(radio => {
  //   radio.addEventListener('change', function() {
  //     preferredWeaponView = this.value;
  //     localStorage.setItem('preferredWeaponView', preferredWeaponView);
  //     // If an item is currently selected in the search input, re-render its preview
  //     if (searchInput && searchInput.value && window.dataset) {
  //       const currentItem = window.dataset.find(i => i.name === searchInput.value);
  //       if (currentItem) {
  //         selectItem(currentItem); // This will now use the new preferredWeaponView
  //       }
  //     }
  //   });
  // });

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

  if (exportJpgBtn) {
    exportJpgBtn.addEventListener('click', exportLabelAsJpg);
  }

  function exportLabelAsJpg() {
    if (!previewFrame || !previewFrame.contentWindow) {
      console.error("[EXPORT] Aborting: previewFrame or contentWindow missing.");
      alert("Please select a label to export first.");
      return;
    }

    const iframeDoc = previewFrame.contentWindow.document;
    const labelContentWrapper = iframeDoc.getElementById('label-content-wrapper');

    if (!labelContentWrapper) {
        console.error("[EXPORT] Aborting: #label-content-wrapper not found in iframe.");
        alert("Could not find the label content to export.");
        return;
    }

    html2canvas(labelContentWrapper, {
      scale: 3, // Higher scale for better quality
      useCORS: true, // If you have external images/fonts
      backgroundColor: '#ffffff' // Set a background color, as transparent areas will be black in JPG
    }).then(canvas => {
      const jpgUrl = canvas.toDataURL('image/jpeg', 0.9); // 0.9 is quality

      const link = document.createElement('a');
      link.href = jpgUrl;
      const selectedItemName = searchInput.value || 'label';
      const safeFilename = selectedItemName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      link.download = `${safeFilename}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }).catch(err => {
        console.error("[EXPORT] html2canvas error:", err);
        alert("An error occurred while exporting the label.");
    });
  }

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
        // Values in input fields are already in settings.preferredUnit due to handleUnitChange
        // Update the global settings object directly from input fields
        settings.width = parseFloat(widthInput.value);
        settings.height = parseFloat(heightInput.value);
        settings.marginTop = parseFloat(marginTopInput.value);
        settings.marginRight = parseFloat(marginRightInput.value);
        settings.marginBottom = parseFloat(marginBottomInput.value);
        settings.marginLeft = parseFloat(marginLeftInput.value);
        if (autoPrintCheckbox) settings.autoPrint = autoPrintCheckbox.checked;
        // settings.preferredUnit is already up-to-date via handleUnitChange

        localStorage.setItem('labelSettings', JSON.stringify(settings));
        updatePreviewSize(); // This will now use settings.preferredUnit correctly

        // Provide some visual feedback for saving (optional, can be enhanced later)
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Saved!';
        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 1500);

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

  if (printCalibrationLabelBtn) {
      printCalibrationLabelBtn.addEventListener('click', function() {
          const calibrationItem = { name: "--- PRINT CALIBRATION LABEL ---", type: "Calibration" };
          // Select the item first to load it into the preview
          selectItem(calibrationItem);

          // Call printLabel. It might need a slight delay for the iframe to fully load,
          // especially if selectItem forces a reload of the iframe.
          // The selectItem function already handles onload for iframe reloads.
          // If the iframe source is not changed by selectItem, contentWindow should be available.

          // A short timeout can help ensure the iframe content is ready for print,
          // though ideally, selectItem would return a promise or have a callback.
          // For now, let's try a small delay.
          setTimeout(() => {
            printLabel();
          }, 250); // 250ms delay, adjust if needed
      });
  }

  if (resetKnowledgeBtn) {
    resetKnowledgeBtn.addEventListener('click', () => {
      const confirmation = confirm("Are you sure you want to reset all saved knowledge levels? This action cannot be undone.");
      if (confirmation) {
        let itemsRemoved = 0;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith('lastPrinted_')) {
            localStorage.removeItem(key);
            itemsRemoved++;
            // Since removeItem can affect the key index, it's safer to re-iterate or go backwards
            i--;
          }
        }
        alert(`${itemsRemoved} knowledge level entries have been reset.`);
        // Optionally, re-render suggestions if the current view might be affected
        if (searchInput) {
            const currentQuery = searchInput.value;
            renderSuggestions(search(currentQuery));
        }
      }
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

  // Event listener for Patch Notes button
  if (patchNotesBtn) {
    patchNotesBtn.addEventListener('click', (event) => {
      event.preventDefault();
      openDialog(patchNotesDialog);
    });
  }

  // Show help modal on first visit
  const visitedFlag = 'kdmLabelPrinter_hasVisited';
  if (!localStorage.getItem(visitedFlag)) {
    if (helpDialog && typeof openDialog === 'function') { // Ensure elements and function are available
        openDialog(helpDialog);
        localStorage.setItem(visitedFlag, 'true');
    }
  }

  // Show patch notes on first visit after an update
  const currentVersion = '1.1.0';
  const lastVersionSeen = localStorage.getItem('kdmLabelPrinter_lastVersion');
  if (lastVersionSeen !== currentVersion) {
    if (patchNotesDialog && typeof openDialog === 'function') {
      openDialog(patchNotesDialog);
      localStorage.setItem('kdmLabelPrinter_lastVersion', currentVersion);
    }
  }
});