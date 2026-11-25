import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, expect, type Browser, type Page } from '@playwright/test';
import { page } from '../../hooks.ts';
import { loginPage,cookiesPage } from '../../hooks.ts';
//Given Launch the Creatio CRM application
Given('Launch the Creatio CRM application', async () => {
    await loginPage.launchApplication(); 
})

//Then Cookies page should be displayed
Then('Cookies page should be displayed', async()=>{
     await cookiesPage.verifyCookiesPopUpIsDisplayed();
})


//When User clicks on "allow all" button
When('User clicks on {string} button', async (buttonName : string)=>{
     await cookiesPage.clickOnAllowAllButton(buttonName);
})

//Then cookies popup should be closed
Then('cookies popup should be closed', async ()=>{
     await cookiesPage.verifyCookiesPopupIsDisappeared();
})



Then('Login page should be displayed', async ()=>{
     await loginPage.verifyLoginPageIsDisplayed();
})
