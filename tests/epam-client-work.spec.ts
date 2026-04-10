import { test, expect } from '@playwright/test';

test('EPAM: Services -> Explore Our Client Work -> Client Work heading is visible', async ({ page }) => {
  await page.goto('https://www.epam.com/', { waitUntil: 'domcontentloaded' });

  // Open Services in the header
  const services = page
    .getByRole('link', { name: /^Services$/ })
    .or(page.getByRole('button', { name: /^Services$/ }));
  await services.click();

  // Navigate to Client Work
  await page.getByRole('link', { name: /Explore Our Client Work/i }).click();

  // Verify Client Work is visible
  await expect(page.getByRole('heading', { name: /^Client Work$/i })).toBeVisible();
});
