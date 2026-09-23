export class BasePgae1
{
    constructor(page)
    {
        this.page=page;
    }
    async click(selector)
    {
        console.log("calling click in basepage");
        
        await selector.click()
    }
    async type(selector , text)
    {
        await selector.fill(text)
    }
    async selectdrop(selector,text)
    {
        await selector.selectOption({ label: text });
    }

}