import { type Page } from "playwright/test";
import { WebCommons } from "../../commons/ui.ts";
import cookiesElements from '../../page-objects/page-elements/cookies-page-elements.json'  with {type: 'json'};
import { error } from "node:console";

export class cookiesPageSteps{
  page:Page;
  web:WebCommons
    constructor(page:Page){
        this.page=page;
         this.web = new WebCommons(page);
    }
    async verifyCookiesPopUpIsDisplayed(){
        await this.web.isElementDisplayed(cookiesElements.cookiesDialogContainer);
        console.log("visible")
    }
    async clickOnAllowAllButton(buttonName:string){
        switch(buttonName.toLowerCase()){
            case 'allow all':
                await this.web.click(cookiesElements.allowAllButton);
                break;
            case "select all":
                await this.web.click(cookiesElements.allowSelection);
                break;
            case "deny":
                await this.web.click(cookiesElements.denyButton);
                break;
            default:
                throw new Error(`${buttonName} is not appearing in cookies page`);
                
        }
       
    }
     async verifyCookiesPopupIsDisappeared(){
            await this.web.isElementDisabled(cookiesElements.cookiesDialogContainer);
        }
}