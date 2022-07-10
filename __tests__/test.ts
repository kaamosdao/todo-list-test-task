import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4242/');
});

test('page elements', async ({ page }) => {
  await expect(page).toHaveTitle('TODO APP');
  await expect(page.locator('.page-header__link')).toHaveText('TODO APP');
  expect(await page.$('text=There is nothing yet...')).not.toBeNull();
  expect(await page.$('text=Today\'s todos:')).not.toBeNull();
  await expect(page.locator('input[type="text"]')).toHaveId('task');
});

test.describe('handle todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.fill('input[type="text"]', 'buy beer');
    await page.click('button[type="submit"]');
    await page.fill('input[type="text"]', 'feed cat');
    await page.click('button[type="submit"]');
    await page.fill('input[type="text"]', 'drink beer');
    await page.click('button[type="submit"]');

    await page.check('#todo1');
    await page.check('#todo2');
  });

  test('add correct task', async ({ page }) => {
    expect(await page.$('text=buy beer')).not.toBeNull();
    expect(await page.$('text=feed cat')).not.toBeNull();
    expect(await page.$('text=drink beer')).not.toBeNull();
  });

  test('add incorrect task', async ({ page }) => {
    await page.fill('input[type="text"]', '');
    await page.click('button[type="submit"]');
    expect(await page.$('text=Should not be empty')).not.toBeNull();

    await page.fill('input[type="text"]', '1234567890123456789012345678901');
    await page.click('button[type="submit"]');
    expect(await page.$('text=Should not exceed 30 symbols')).not.toBeNull();
  });

  test('check task', async ({ page }) => {
    expect(await page.isChecked('#todo1')).toBeTruthy();
    expect(await page.isChecked('#todo2')).toBeTruthy();
    expect(await page.isChecked('#todo3')).toBeFalsy();
  });

  test('filter task', async ({ page }) => {
    await page.check('#radioCompleted');
    expect(await page.isChecked('#radioCompleted')).toBeTruthy();
    expect(await page.$('text=buy beer')).not.toBeNull();
    expect(await page.$('text=feed cat')).not.toBeNull();
    expect(await page.$('text=drink beer')).toBeNull();

    await page.check('#radioUnfinished');
    expect(await page.isChecked('#radioUnfinished')).toBeTruthy();
    expect(await page.$('text=buy beer')).toBeNull();
    expect(await page.$('text=feed cat')).toBeNull();
    expect(await page.$('text=drink beer')).not.toBeNull();

    await page.check('#radioAll');
    expect(await page.isChecked('#radioAll')).toBeTruthy();
    expect(await page.$('text=buy beer')).not.toBeNull();
    expect(await page.$('text=feed cat')).not.toBeNull();
    expect(await page.$('text=drink beer')).not.toBeNull();
  });

  test('count task', async ({ page }) => {
    expect(await page.$('text=Completed: 2')).not.toBeNull();
    expect(await page.$('text=Unfinished: 1')).not.toBeNull();

    await page.uncheck('#todo1');
    await page.uncheck('#todo2');
    expect(await page.$('text=Completed: 0')).not.toBeNull();
    expect(await page.$('text=Unfinished: 3')).not.toBeNull();
  });
});
