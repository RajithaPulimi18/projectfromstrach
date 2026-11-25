import {type Page } from '@playwright/test';
import signPage from '../../page-objects/page-elements/signin-page-elements.json'  with {type: 'json'};
import { WebCommons } from '../../commons/ui.ts';
import { signinPage } from '../../hooks.ts';

export class SignInPageSteps {
    page: Page;
    web: WebCommons

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }
    async verifySignInPageIsDisplayed(){
        await this.page.getByText('SIGN UP', { exact: true }).isVisible();
        console.log('Sign In page is displayed');
    }

    async clickOnSignUpButton(){
        await this.page.click(signPage.signInButtonIcon);
        await this.page.getByRole('checkbox').click();
        await this.page.getByLabel("Business email").isVisible();
    }
}