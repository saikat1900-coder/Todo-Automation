import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').fill('saikat');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('shasmal');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('dumisko');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('game changer');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'dumisko' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'shasmal' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('game changer')).toBeVisible();
  await expect(page.getByText('saikat')).toBeVisible();
  await expect(page.getByRole('link', { name: 'All' })).toBeVisible();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});