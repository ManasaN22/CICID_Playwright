import { BasePgae1 } from "./BasePage";

export class LoginPage1 extends BasePgae1
{
    constructor(page)
    {
        super(page)
        this.page=page;
        this.newuser= page.getByRole('link', { name: 'New user? Signup' })
        this.name= page.locator("#name")
        this.email= page.getByPlaceholder('Email', { exact: true })
        this.password= page.getByPlaceholder('Password', { exact: true })
        this.interest_checkBox=  page.locator('label').filter({ hasText: 'JAVA' }).first()
        this.gender_radio= page.locator('#gender2')
        this.state= page.locator('#state')
        this.hobiies= page.locator('#hobbies')
        this.signupbutton= page.getByText('Sign up', { exact: true })
    }

    async newusermethod()
    {
        console.log("calling method inside loginpage1");
        
        await this.click(this.newuser)
    }

    async registration(username,email,psw,Intrest,Gender,State,HOBBIES)
    {
        await this.type(this.name,username)
        await this.type(this.email,email)
        await this.type(this.password,psw)
        await this.click(this.interest_checkBox,Intrest)
        await this.click(this.gender_radio,Gender)
        await this.selectdrop(this.state, State);
        await this.selectdrop(this.hobiies,HOBBIES)
        await this.click(this.signupbutton)
    }
}





