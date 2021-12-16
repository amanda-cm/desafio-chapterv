const el = require('./elements').ELEMENTS
class Login {

    inputCredentials() {
        cy.get(el.email).type('amora@teste.com')
        cy.get(el.password).type('qwert')
    }

    clickButton () {
        cy.get(el.button).click()
    }

    inputSignUp () {
        cy.get(el.username).type('Amora')
        cy.get(el.email).type('amora@teste.com')
        cy.get(el.password).type('qwert')
    }
}

export default new Login()