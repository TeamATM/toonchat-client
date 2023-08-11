import { test, expect } from '@playwright/test';

test('페이지 타이틀 확인', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/ToonChat/);
});

test('로그인 페이지 클릭', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Log in' }).click();

  await expect(page).toHaveTitle(/ToonChat/);
  await expect(page).toHaveTitle(/Log in/);
  await expect(page).toHaveURL(/.*login/);
});

test('영준과 대화하기 클릭', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: '영준이와 대화하기' }).click();

  await expect(page).toHaveTitle(/ToonChat/);
  await expect(page).toHaveTitle(/대화 with/);
  await expect(page).toHaveURL(/.*chats\/\d+/);
});
