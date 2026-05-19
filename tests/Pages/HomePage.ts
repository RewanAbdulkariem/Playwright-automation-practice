// HomePage.ts
import { expect, type Page, type Locator } from "@playwright/test";

export class HomePage {
    //*********locators ************/
    readonly page: Page;
    readonly signupLogin_lnk: Locator;
    
    //*********Variables ***********/
    readonly url: string = 'https://automationexercise.com/';
    readonly expectedTitle: string = 'Automation Exercise';

    //*********Constructors ********/
    constructor(page: Page) {
        this.page = page;
        this.signupLogin_lnk = page.getByRole('link', { name: ' Signup / Login' });
    }

    //*********Methods *************/
    //---------Actions -------------/
    async open() {
        await this.page.goto(this.url);
    }

    async navigateToSignupLogin() {
        await this.signupLogin_lnk.click();
    }

    //---------Assertions ----------/
    async verifyHomePageTitle() {
        await expect(this.page).toHaveTitle(this.expectedTitle);
    }
}