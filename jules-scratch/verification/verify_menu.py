
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("file:///app/index.html")
    page.click("#menuBtn")
    page.wait_for_timeout(500) # Wait for 500ms for the menu to open
    page.click("#survivorSheetBtn")
    page.wait_for_timeout(500) # Wait for 500ms for the submenu to open
    page.screenshot(path="jules-scratch/verification/menu.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
