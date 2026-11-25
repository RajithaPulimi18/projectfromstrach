import { When, Then } from '@cucumber/cucumber';
import { loginPage,cookiesPage, signinPage } from '../../hooks.ts';

// Step 1: Click on signup button
When('user clicks on the signup button', async () => {
    await signinPage.verifySignInPageIsDisplayed();
});

// Step 2: Validate the verification
Then('validate the verification', async () => {
   await signinPage.clickOnSignUpButton();
});

// Step 3: Enter username and password
Then('enter the username {string} and password {string}', async (username, password) => {
    
});

// Step 4: Fill all mandatory fields
Then('fill all the mandatory fields', async () => {
   
});