
import { Login } from './pages/login'

const loginPage = new Login()


it('POM Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    loginPage.username('Admin')
    loginPage.password('admin123')
    loginPage.clicklogin()
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6')
        .should('contain', 'Personal Details')
})
