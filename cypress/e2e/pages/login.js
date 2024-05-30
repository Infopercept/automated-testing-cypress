export class Login{
    
    username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    pword_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button = '.oxd-button'

    username(uname){
        cy.get(this.username_textbox)
        .type(uname)
    }
    password(pword){
        cy.get(this.pword_textbox)
        .type(pword)
    }
    clicklogin(){
        cy.get(this.login_button).click()
    }

}