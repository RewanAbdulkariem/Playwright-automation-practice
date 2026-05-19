import { test, expect } from '@playwright/test'
import { HomePage } from '../Pages/HomePage';
import { SignupPage } from '../Pages/SignupPage';
import { AccountDetailsPage } from '../Pages/AccountDetailsPage';

//** Variables */
let homePage: HomePage;
let signupPage: SignupPage;
let accountDetailsPage: AccountDetailsPage;

//** Hooks */
test.beforeAll("Before all Tests", async () => {
    console.log("This action before all tests");
})

test.beforeEach("Before each test", async({page}, testInfo) =>{
    homePage = new HomePage(page);
    await homePage.open();
    console.log(`Test starts for: ${testInfo.title}`);
})

test('Register new user', async ({page}) =>{
    await homePage.verifyHomePageTitle();
    await homePage.navigateToSignupLogin();

    signupPage = new SignupPage(page);

    await signupPage.verifySignupPageIsVisible();
    await signupPage.signup();

    accountDetailsPage = new AccountDetailsPage(page);

    await accountDetailsPage.verifyAccountInfoPageIsVisible();

    await accountDetailsPage.fillAccountDetails("123456", "1", "1", "2001");

    await accountDetailsPage.fillAddressDetails("Rewan", "Khaled", "123address", 1, "state", "city", "zip", "01022222");

    await accountDetailsPage.clickCreateAccount();
    await accountDetailsPage.verifyAccountCreated();
})