exports.LoginPage=class LoginPage{
    constructor(page){
        this.page=page;
        this.userName = '//input[@id="user-name"]';
        this.password = '//input[@id="password"]';
        this.loginButton = '//input[@id="login-button"]';
      

    }
    

    async goto(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterCredentials(userName, password){
        await this.page.locator(this.userName).fill(userName);
        await this.page.locator(this.password).fill(password);
    }

    async clickOnLogin(){
        await this.page.locator(this.loginButton).click();
    }
}
