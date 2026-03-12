import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  emailInput = this.page.getByRole('textbox', { name: 'Email' }).or(this.page.locator('#email'));
  passwordInput = this.page.getByRole('textbox', { name: 'Password' }).or(this.page.locator('#password'));
  loginButton = this.page.getByRole('button', { name: /sign in|log in/i });

  async goto(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {

    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }

async verifyLoginSuccess() {

  await expect(
    this.page.getByRole('link', { name: /dashboard/i })
  ).toBeVisible({ timeout: 15000 });

}

async verifyLoginError() {

    await this.page.getByText(/invalid|incorrect|error/i).first().waitFor({
    state: 'visible'
  });

}

}