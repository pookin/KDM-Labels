import asyncio
from playwright.async_api import async_playwright, expect

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("file:///app/index.html")

        # The help dialog might pop up on first load. Close it if it appears.
        help_dialog_close_button = page.locator("#helpDialog .dialog-close-btn")
        if await help_dialog_close_button.is_visible():
            await help_dialog_close_button.click()

        await page.get_by_placeholder("Type item name...").fill("Axe")

        # Click the suggestion for "Axe (Specialist)"
        suggestion_locator = page.locator('.suggestion:has-text("Axe (Specialist)")')
        await expect(suggestion_locator).to_be_visible()
        await suggestion_locator.click()

        # Check the content inside the iframe
        preview_frame = page.frame_locator("#preview")
        card_title_locator = preview_frame.locator("h2.card-title")
        await expect(card_title_locator).to_have_text("Axe")
        await expect(card_title_locator).to_be_visible()

        await page.screenshot(path="jules-scratch/verification/verification.png")
        await browser.close()

asyncio.run(main())
