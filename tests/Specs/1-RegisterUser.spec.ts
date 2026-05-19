import { test, expect } from '@playwright/test'
import { POManager } from '../Pages/poManager';

//** Variables */
let poManager: POManager;

//** Hooks */
test.beforeAll("Before all Tests", async () => {
    console.log("This action before all tests");
})

test.beforeEach("Before each test", async({page}, testInfo) =>{
    poManager = new POManager(page);
    await poManager.getHomepage().open();
    console.log(`Test starts for: ${testInfo.title}`);
})

test('Register new user', async ({page}) =>{
    await poManager.getHomepage().verifyHomePageTitle();
    await poManager.getHomepage().navigateToSignupLogin();


    await poManager.getSignupPage().verifySignupPageIsVisible();
    await poManager.getSignupPage().signup();


    await poManager.getAccountDetailsPage().verifyAccountInfoPageIsVisible();

    await poManager.getAccountDetailsPage().fillAccountDetails("123456", "1", "1", "2001");

    await poManager.getAccountDetailsPage().fillAddressDetails("Rewan", "Khaled", "123address", 1, "state", "city", "zip", "01022222");

    await poManager.getAccountDetailsPage().clickCreateAccount();
    await poManager.getAccountDetailsPage().verifyAccountCreated();
})