import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { resolveValue } from '../utils/envResolver';

let loginPage: LoginPage;

Given('I open the application', async function () {

  loginPage = new LoginPage(this.page);

  const url = process.env.BASE_URL!;
  await loginPage.goto(url);

});

When(
  'I login with username {string} and password {string}',
  async function (username: string, password: string) {

    const user = resolveValue(username);
    const pass = resolveValue(password);

    await loginPage.login(user, pass);

  }
);

Then('I should be logged in', async function () {

  await loginPage.verifyLoginSuccess();

});

Then('I should see a login error', async function () {

  await loginPage.verifyLoginError();

});