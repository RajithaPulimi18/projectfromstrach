import {type Page ,type Locator , expect } from '@playwright/test';
import config from '../config.json' with { type : 'json' };

export class WebCommons {

    page : Page ;

    constructor(page: Page) {
        this.page = page;
    }

    // Common method to launch the application and verify the title of the application 
    async launchApplication(){
        await this.page.goto(config.AE.url);
        await expect(this.page).toHaveTitle(config.AE.title);
    }
    // Common method to generate a web element from the locator 
    async element(locatorText : string) : Promise<Locator> {
        return this.page.locator(locatorText);
    }

    async isElementDisplayed(locator:string) :Promise<boolean>{
        const element =await this.element(locator);
        return await element.isVisible()
    }
    async click(locator:string):Promise<void>{
        const element = await this.element(locator);
        await element.click();

    }
    async isElementDisabled(locator:string):Promise<boolean>{
        const element = await this.element(locator)
        return await element.isDisabled();
    }

    
}