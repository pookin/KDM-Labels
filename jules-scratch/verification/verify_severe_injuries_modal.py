
from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # Go to the page once to trigger the "first visit" logic and set the
    # 'visited' flag in local storage.
    page.goto("file:///app/index.html")

    # Reload the page. On this second load, the help dialog should not appear.
    page.reload()

    # Add a small wait to ensure the page is fully settled after the reload.
    page.wait_for_timeout(500)

    # Now, proceed with opening the menu and the severe injuries dialog.
    page.locator("#menuBtn").click()
    main_menu = page.locator("#mainMenu")
    expect(main_menu).to_be_visible()

    page.locator("#severeInjuriesBtn").click()
    dialog = page.locator("#severeInjuriesDialog")
    expect(dialog).to_be_visible()

    page.screenshot(path="jules-scratch/verification/severe-injuries-modal.png")
    browser.close()
