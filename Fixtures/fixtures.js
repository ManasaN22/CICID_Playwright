import {test as base} from "@playwright/test"
import { LoginPage1 } from "../Pages/Loginpage";

export const test=base.extend({
 
  lpvar: async ({page},use) => 
   {
    
    console.log("insdie fixture");
    const objlogin= new LoginPage1(page)
    await use(objlogin)
   },

   regivar: async ({page},use) => 
   {
    
    console.log("insdie fixture");
    const objreg= new LoginPage1(page)
    let emailused= `manasa${Date.now()}@email.com`
    await use(objreg)
   }



})








































































































