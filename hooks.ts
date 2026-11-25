import { type Browser, type BrowserContext, type Page, chromium } from '@playwright/test';
import { LoginPageSteps,} from './page-objects/page-steps/login-page-step.ts';
import { cookiesPageSteps,} from './page-objects/page-steps/cookiePage.ts';

import { BeforeAll, Before, After, AfterAll, setDefaultTimeout } from '@cucumber/cucumber';
import { start } from 'node:repl';
import { SignInPageSteps } from './page-objects/page-steps/sigin-page-steps.ts';
import { AESigninPage } from './page-objects/automationexercise-page-steps.ts';


//Declare global variables to store browser, browser context, and page details. 
let browser: Browser;
let context: BrowserContext;
export let page: Page;
export let loginPage: LoginPageSteps;
export let cookiesPage:cookiesPageSteps;
export let signinPage:SignInPageSteps;
export let Aesigninpage:AESigninPage;

setDefaultTimeout(90*1000); //90000 milliseconds /90 sec

//Method to launch browser once before executing all scenarios. 
BeforeAll(async () => {
    browser = await chromium.launch({ 
        headless: false,
        args: ['--start-maximized']

    });
})

//Method to create a browser context page and also initialize page objects before each and every scenario 
Before(async () => {
    context = await browser.newContext({
        viewport: null
    });

    page = await context.newPage();
    visualViewport:null
    loginPage = new LoginPageSteps(page);
    cookiesPage=new cookiesPageSteps(page);
    signinPage = new SignInPageSteps(page);
    Aesigninpage=new AESigninPage(page);
})
After(async () => {
    await context.close();
});
// Close the browser engine after all scenarios are completed. 
AfterAll(async () => {
    await browser.close();
})