import { expect, type Locator, type Page } from "@playwright/test";

export class SignupPage{
    //*********locators ************/
    readonly page: Page;
    readonly newUser_heading: Locator;
    readonly username_tb: Locator;
    readonly email_tb: Locator;
    readonly signup_btn: Locator;

    //*********Variables ***********/
    readonly url: string = 'https://automationexercise.com/';

    //*********Constructors ********/
    constructor(page: Page) {
        this.page = page;
        this.newUser_heading = page.getByRole('heading', { name: 'New User Signup!' });

        this.username_tb = page.locator('[name="name"]');
        this.email_tb = page.locator('[data-qa="signup-email"]');
        this.signup_btn = page.getByRole('button', {name: 'Signup'});
    }
    //*********Methods *************/
    //---------Actions -------------/
    async signup(){
        await this.username_tb.fill('Rewan');
        const dynamicEmail = `rewan_${Date.now()}@test.com`;
        await this.email_tb.fill(dynamicEmail);
        await this.signup_btn.click();
    }

    //---------Assertions ----------/
    async verifySignupPageIsVisible() {
        await expect(this.newUser_heading).toBeVisible();
    }

}