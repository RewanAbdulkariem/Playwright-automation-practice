import { expect, type Locator, type Page } from "@playwright/test";

export class AccountDetailsPage {
    //*********locators ************/
    readonly page: Page;
    readonly accountInfo_heading: Locator;
    readonly password_tb: Locator;
    readonly days_select: Locator;
    readonly months_select: Locator;
    readonly years_select: Locator;
    readonly firstName_tb: Locator;
    readonly lastName_tb: Locator;
    readonly address_tb: Locator;
    readonly country_select: Locator;
    readonly state_tb: Locator;
    readonly city_tb: Locator;
    readonly zipcode_tb: Locator;
    readonly mobile_tb: Locator;
    readonly createAccount_btn: Locator;
    readonly accountCreated_heading: Locator;
    
    //*********Variables ***********/

    //*********Constructors ********/
    constructor(page: Page) {
        this.page = page;
        this.accountInfo_heading = page.locator('b:has-text("ENTER ACCOUNT INFORMATION")');
        this.password_tb = page.locator('#password');
        this.days_select = page.locator('select#days');
        this.months_select = page.locator('select#months');
        this.years_select = page.locator('select#years');
        this.firstName_tb = page.getByRole('textbox', { name: 'First name' });
        this.lastName_tb = page.getByLabel('Last name *');
        this.address_tb = page.locator('#address1');
        this.country_select = page.getByRole('combobox', { name: 'Country *' });
        this.state_tb = page.locator('input[name="state"]');
        this.city_tb = page.locator("//input[@id='city']");
        this.zipcode_tb = page.locator('#zipcode');
        this.mobile_tb = page.locator('#mobile_number');
        this.createAccount_btn = page.locator('button:has-text("Create Account")');
        this.accountCreated_heading = page.locator('b:has-text("ACCOUNT CREATED!")');
    }

    //*********Methods *************/
    //---------Actions -------------/
    async selectTitle(title: 'Mr.' | 'Mrs.') {
        await this.page.getByLabel(title).check();
    }

    async fillAccountDetails(password: string, day: string, month: string, year: string) {
        await this.password_tb.fill(password);
        await this.days_select.selectOption(day);
        await this.months_select.selectOption(month);
        await this.years_select.selectOption(year);
    }

    async fillAddressDetails(fName: string, lName: string, address: string, countryIndex: number, state: string, city: string, zip: string, mobile: string) {
        await this.firstName_tb.fill(fName);
        await this.lastName_tb.fill(lName);
        await this.address_tb.fill(address);
        await this.country_select.selectOption({ index: countryIndex });
        await this.state_tb.fill(state);
        await this.city_tb.fill(city);
        await this.zipcode_tb.fill(zip);
        await this.mobile_tb.fill(mobile);
    }

    async clickCreateAccount() {
        await this.createAccount_btn.click();
    }

    //---------Assertions ----------/
    async verifyAccountInfoPageIsVisible() {
        await expect(this.accountInfo_heading).toBeVisible();
    }

    async verifyAccountCreated() {
        await expect(this.accountCreated_heading).toBeVisible();
    }
}