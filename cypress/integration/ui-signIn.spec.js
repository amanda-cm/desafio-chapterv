/// <reference types="cypress" />

import login from '../support/pages/login'

describe('Sign In', () => {
    it('Quando eu iserir os dados corretamente, então o login deve ser efetuado', () => {

        cy.intercept({

            method: 'POST',
            path: '/api/users/login'

        },{

            statusCode: 200,
            fixture: 'login-sucesso'

        }).as('loginUser')

        cy.visit('login')
        login.inputCredentials()
        login.clickButton()

        cy.url().should('contain', '#/')
    });

    it('Quando eu inserir a senha incorreta, então deve retornar erro 403' , () => {

        cy.intercept({

            method: 'POST',
            path: '/api/users/login'

        },{

            statusCode: 403,
            fixture: 'senha-incorreta'

        }).as('loginUser')

        cy.visit('login')
        login.inputCredentials()
        login.clickButton()

        cy.contains('email or password is invalid').should('be.visible')
    });

    it('Quando eu deixar o campo de e-mail em branco, então deve retornar o erro 422', () => {

        cy.intercept({

            method: 'POST',
            path: '/api/users/login'

        },{

            statusCode: 422,
            fixture: 'email-em-branco'

        }).as('loginUser')

        cy.visit('login')
        login.inputCredentials()
        login.clickButton()
        
        cy.contains("email can't be blank").should('be.visible')
    });

    it('Quando eu deixar o campo senha em branco, então deve retornar um erro 422', () => {

        cy.intercept({

            method: 'POST',
            path: '/api/users/login'

        },{

            statusCode: 422,
            fixture: 'senha-em-branco'

        }).as('loginUser')

        cy.visit('login')
        login.inputCredentials()
        login.clickButton()

        cy.contains("password can't be blank").should('be.visible')
    });
});