from playwright.sync_api import sync_playwright, Page, expect, TimeoutError
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Get the absolute path to the index.html file
    file_path = os.path.abspath('index.html')
    page.goto(f'file://{file_path}')
    page.wait_for_load_state('domcontentloaded')

    # Handle the initial help dialog which can obstruct other elements
    print("Checking for help dialog...")
    help_dialog = page.locator('#helpDialog')
    try:
        # Wait for the dialog to potentially appear (up to 5s)
        help_dialog.wait_for(state='visible', timeout=5000)
        print("Help dialog found. Closing it.")
        help_dialog.get_by_role('button', name='X').click()
        expect(help_dialog).not_to_be_visible()
        print("Help dialog closed.")
    except TimeoutError:
        print("Help dialog did not appear, which is fine. Proceeding.")

    # --- Define locators for reusable elements ---
    menu_button = page.get_by_role('button', name='☰')
    main_menu = page.locator('#mainMenu')

    # --- Verify Severe Injuries modal ---
    print("Verifying Severe Injuries modal...")
    menu_button.click()
    expect(main_menu).to_be_visible()
    page.get_by_role('link', name='Severe Injuries').click()
    severe_injuries_dialog = page.locator('#severeInjuriesDialog')
    expect(severe_injuries_dialog).to_be_visible()
    expect(severe_injuries_dialog.locator('#brain p')).to_have_count(13)
    page.screenshot(path='jules-scratch/verification/severe_injuries.png')
    severe_injuries_dialog.get_by_role('button', name='X').click()
    expect(severe_injuries_dialog).not_to_be_visible()
    print("Severe Injuries modal verified.")

    # --- Verify Survivor Sheet menu ---
    print("Verifying Survivor Sheet menu...")
    menu_button.click()
    expect(main_menu).to_be_visible()
    page.get_by_role('link', name='Survivor Sheets').click()
    submenu = page.locator('#survivorSheetSubMenu')
    expect(submenu).to_be_visible()
    page.screenshot(path='jules-scratch/verification/survivor_sheet_menu.png')
    page.locator('#appHeader').click()
    expect(main_menu).not_to_be_visible()
    print("Survivor Sheet menu verified.")

    # --- Verify Patch Notes ---
    print("Verifying Patch Notes...")
    menu_button.click()
    expect(main_menu).to_be_visible()
    page.get_by_role('link', name='Patch Notes').click()
    patch_notes_dialog = page.locator('#patchNotesDialog')
    expect(patch_notes_dialog).to_be_visible()
    expect(patch_notes_dialog.get_by_text("Version 1.2.0 (Current)")).to_be_visible()
    page.screenshot(path='jules-scratch/verification/patch_notes.png')
    print("Patch Notes verified.")

    browser.close()
    print("Verification script finished successfully.")

with sync_playwright() as playwright:
    run(playwright)
