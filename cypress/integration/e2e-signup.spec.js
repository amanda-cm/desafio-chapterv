/// <reference types="cypress" />

import signUp from '../support/pages/signUp'

describe('New user', () => {

    beforeEach('Visitar a página', () => {
        cy.visit('register')
    });
    it('Quando eu informar os dados corretamente, então o cadastro deve ser criado', () => {
        signUp.inputSignUp()
        signUp.submitSignUp()
        cy.url().should('contain', '#/')
    });

    it('Quando eu não informar os dados duplicados, então deve retornar uma mensagem de erro', () => {
        signUp.inputSignUp()
        signUp.submitSignUp()
        signUp.assert()
    });

    it('Quando eu não informar os dados e clicar em Sign Up, então deve retornar uma mensagem de erro', () => {
        signUp.submitSignUp()
        cy.contains("email can't be blank")
    });
});