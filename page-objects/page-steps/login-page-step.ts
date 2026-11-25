import {type Page } from '@playwright/test';
import loginPage from '../../page-objects/page-elements/login-page-elements.json'  with {type: 'json'};
import { WebCommons } from '../../commons/ui.ts';

export class LoginPageSteps {
    page: Page;
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to launch the application
    async launchApplication(){
        await this.web.launchApplication();
    }

    async verifyLoginPageIsDisplayed(){
        await this.web.isElementDisplayed(loginPage.loginPageTitle);
    }
    
}