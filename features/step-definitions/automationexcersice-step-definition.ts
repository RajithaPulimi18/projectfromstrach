
import { Given,Then,When } from "@cucumber/cucumber";
import { page } from "../../hooks.ts";
import { Aesigninpage } from '../../hooks.ts';

Given('Launch the application', async function () {
  // Write code here that turns the phrase above into concrete actions
    await Aesigninpage.launchTheAEApplication();
});

Then('home page should be displayed',async function () {
  // Write code here that turns the phrase above into concrete actions
  await Aesigninpage.homepage();
  console.log("visible");
});

When('User clicks on signup button',async function () {
  // Write code here that turns the phrase above into concrete actions
  await Aesigninpage.clickOnSignupButton();
});

When('enter the username and email', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('user should fill all the details', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});