const select = require('./selectors').SELECTORS

class SignUp {

    inputSignUp () {
        cy.get(select.username).type('Amora')
        cy.get(select.email).type('amora@teste.com')
        cy.get(select.password).type('qwert')
    }

    submitSignUp () {
        cy.get(select.button).click()
    }

    assert () {
        cy.contains('email has already been taken')
        cy.contains(' username has already been taken ')
    }
}
export default new SignUp ()