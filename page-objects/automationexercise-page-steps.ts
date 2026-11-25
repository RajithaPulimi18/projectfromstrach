import {type Page ,type Locator , expect } from '@playwright/test';
import  { WebCommons } from "../commons/ui.ts";
import { link } from "node:fs";



export class AESigninPage{
  page:Page
  web:WebCommons
  constructor(page:Page){
     this.page = page;
    this.web = new WebCommons(page);
  }

   async launchTheAEApplication(){
    await this.web.launchApplication();
   }
   async homepage(){
    await this.page.getByRole('link',{name:' Signup / Login'}).isVisible();
   }
   async clickOnSignupButton(){
    await this.page.getByRole('link',{name:' Signup / Login'}).click();
    await expect(this.page).toHaveTitle("New User Signup!");

   }
}