import {expect} from "@playwright/test"
import { test } from "../Fixtures/fixtures.js";
import data from "../testdata/users.json"


test("new reg", async({lpvar,page,regivar})=>
{
    await page.goto("/login")
    await lpvar.newusermethod()
    const email = `${data.emailid}${Date.now()}@email.com`;

    await regivar.registration(data.username,email,data.psw,data.Intrest,data.Gender,data.State,data.HOBBIES)

    console.log(`test data used is ${email}`);

 await expect(page).toHaveURL("/login/")

    console.log(await page.url())
})

test("gITHUB ACTIONS", async({lpvar,page,regivar})=>
{
    await page.goto("/login")
    await lpvar.newusermethod()
    
})

test("changes from github central repo", async({lpvar,page,regivar})=>
{
    await page.goto("/login")
    await lpvar.newusermethod()
    
})
