/// <reference types="cypress" />


describe('UserProfile Test', () => {

    it('Editing profile information', () => {
        cy.visit('/')


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('bob@test.com');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd');
        cy.get('.rounded').click();
        cy.get('.ml-3 > :nth-child(1)').click();
        cy.get('.col-md-8').click();
        cy.get(':nth-child(1) > input').clear();
        cy.get(':nth-child(1) > input').type('Bob17');
        cy.get(':nth-child(2) > input').clear();
        cy.get(':nth-child(2) > input').type('Bob');
        cy.get('.clearing').click();
        cy.get(':nth-child(3) > input').clear();
        cy.get(':nth-child(3) > input').type('The Farmer');
        cy.get('.form > .ui').click({ force: true });
        /* ==== End Cypress Studio ==== */
    })

    it('Editing profile information blank should not be updated', () => {
        cy.visit('/')


        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('bob@test.com');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd');
        cy.get('.rounded').click();
        cy.get('.ml-3 > :nth-child(1)').click();
        cy.get('.clearing').click();
        cy.get(':nth-child(1) > input').click();
        cy.get(':nth-child(1) > input').click();
        cy.get(':nth-child(1) > input').click();
        cy.get(':nth-child(2) > input').click();
        cy.get(':nth-child(2) > input').click();
        cy.get(':nth-child(3) > input').click();
        cy.get(':nth-child(3) > input').clear();
        cy.get('.form > :nth-child(4)').click();
        cy.get(':nth-child(4) > input').clear();
        cy.get('.clearing').click();
        cy.get('.clearing').click();
        /* ==== End Cypress Studio ==== */
    })

    it('Editing stream information succesfully', () => {
        cy.visit('/')

        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('bob@test.com');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd');
        cy.url().should('include', '/user-profile')
        cy.get('.rounded').click();
        cy.get('.ml-3 > :nth-child(2)').click();
        cy.get('input').clear();
        cy.get('input').type('Bob11\'s livestream 3');
        cy.get('textarea').click();
        cy.get('.form > .ui').click({ force: true });
        /* ==== End Cypress Studio ==== */
    })


    it('Editing stream information blank should not update', () => {
        cy.visit('/')


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .form-control').clear();
        cy.get(':nth-child(1) > .form-control').type('bob@test.com');
        cy.get(':nth-child(2) > .form-control').clear();
        cy.get(':nth-child(2) > .form-control').type('Pa$$w0rd');
        cy.get('.rounded').click();
        cy.url().should('include', '/user-profile')
        cy.get('.ml-3 > :nth-child(2)').click();
        cy.get('.row').click();
        cy.get('.row').click();
        cy.get('.clearing').click();
        cy.get('.clearing').click();
        /* ==== End Cypress Studio ==== */
    })

})