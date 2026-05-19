import { type Page } from "@playwright/test";
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { AccountDetailsPage } from "./AccountDetailsPage";

export class POManager {
    private readonly page: Page;
    private readonly homePage: HomePage;
    private readonly signupPage: SignupPage;
    private readonly accountDetailsPage: AccountDetailsPage;

    constructor(page: Page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.signupPage = new SignupPage(page);
        this.accountDetailsPage = new AccountDetailsPage(page);
    }

    getHomepage(){
        return this.homePage;
    }
    getSignupPage(){
        return this.signupPage;
    }
    getAccountDetailsPage(){
        return this.accountDetailsPage;
    }

}