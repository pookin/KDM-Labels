
from playwright.sync_api import sync_playwright, expect
import traceback

def run_verification(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Listen for console messages and print them
    page.on("console", lambda msg: print(f"Browser Console: {msg.text}"))

    try:
        page.goto("file:///app/index.html")

        # Handle potential help dialog
        help_dialog = page.locator("#helpDialog")
        try:
            if help_dialog.is_visible(timeout=2000):
                print("Closing help dialog...")
                help_dialog.locator(".dialog-close-btn").click()
                expect(help_dialog).to_be_hidden()
        except Exception:
            print("Help dialog did not appear on initial load.")

        # 1. Verify search functionality for 'Axe'
        print("Verifying search for 'Axe'...")
        search_box = page.locator("#search")
        search_box.fill("Axe")

        # Use a more robust locator
        axe_suggestion = page.locator('div.suggestion:has-text("Axe (Specialist) (Weapon)")')
        expect(axe_suggestion).to_be_visible()
        print("Search for 'Axe' successful.")
        page.screenshot(path="jules-scratch/verification/01_search_verification.png")
        search_box.clear()

        # 2. Verify knowledge level tracking for 'Ambitionism'
        print("Verifying knowledge level tracking for 'Ambitionism'...")
        search_box.fill("Ambitionism")
        ambitionism_suggestion = page.locator('div.suggestion:has-text("Ambitionism (Philosophy)")')
        expect(ambitionism_suggestion).to_be_visible()
        ambitionism_suggestion.click()

        page.wait_for_selector("#preview[src='label_render.html']")
        preview_frame = page.frame_locator("#preview")

        first_milestone = preview_frame.locator(".milestone-box").first
        expect(first_milestone).to_be_visible()
        first_milestone.click()

        expect(first_milestone.locator("span.checkmark")).to_have_text("✓")
        print("Knowledge level set successfully.")
        page.screenshot(path="jules-scratch/verification/02_knowledge_level_set.png")

        # 3. Reload and verify persistence
        print("Reloading page to verify persistence...")
        page.reload()
        page.wait_for_load_state("domcontentloaded")

        try:
            if help_dialog.is_visible(timeout=2000):
                print("Closing help dialog on reload...")
                help_dialog.locator(".dialog-close-btn").click()
                expect(help_dialog).to_be_hidden()
        except Exception:
            print("Help dialog did not appear on reload.")

        search_box.fill("Ambitionism")
        ambitionism_suggestion_reloaded = page.locator('div.suggestion:has-text("Ambitionism (Philosophy)")')
        expect(ambitionism_suggestion_reloaded).to_be_visible()
        ambitionism_suggestion_reloaded.click()

        page.wait_for_selector("#preview[src='label_render.html']")
        preview_frame_reloaded = page.frame_locator("#preview")

        reloaded_first_milestone = preview_frame_reloaded.locator(".milestone-box").first
        expect(reloaded_first_milestone).to_be_visible()
        expect(reloaded_first_milestone.locator("span.checkmark")).to_have_text("✓")
        print("Knowledge level persistence verified.")

        page.screenshot(path="jules-scratch/verification/03_knowledge_level_persistence.png")
        print("Verification successful!")

    except Exception as e:
        print("An error occurred during verification.")
        print(traceback.format_exc())
        page_content = page.content()
        print("\n--- Page HTML at time of error ---")
        print(page_content)
        print("--- End Page HTML ---")
        page.screenshot(path="jules-scratch/verification/error_screenshot.png")
        raise e  # Re-raise the exception to fail the step

    finally:
        browser.close()

with sync_playwright() as playwright:
    run_verification(playwright)
