const el = require('./elements').ELEMENTS
class Login {

    inputEmail () {
        cy.get(el.email).type('jubileu@mail.com')
    }

    inputPassword () {
        cy.get(el.password).type('tyuiop')
    }

    clickButton () {
        cy.get(el.button).click()
    }
}

export default new Login()