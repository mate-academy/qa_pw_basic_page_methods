import { test, expect } from '@playwright/test';

test('Sign IN link test', async ({ page }) => {
  await page.goto('https://conduit.mate.academy');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.waitForURL('https://conduit.mate.academy/user/login');
 });

 test('Sign UP link test', async ({ page }) => {
  // Add your code below this line:


  
 });
 
 