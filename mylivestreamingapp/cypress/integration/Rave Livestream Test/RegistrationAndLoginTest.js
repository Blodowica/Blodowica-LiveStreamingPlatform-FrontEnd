/// <reference types="cypress" />

describe('Login Rave listereaming test', () => {




    it('login in user succesfully', () => {

        cy.visit('/')

        cy.get('input[name=emailInput]').type("bob@test.com")

        // {enter} causes the form to submit
        cy.get('input[name=passwordInput]').type(`${"Pa$$w0rd"}{enter}`)

        cy.get('.btn[name=loginButton]').click();

        // we should be redirected to /dashboard
        cy.url().should('include', '/user-profile')

        cy.url().should(() => {
            expect(localStorage.getItem('jwt')).length.above(0)
        })
    })

    it('do not login in user with wrong email', () => {

        cy.visit('/')

        cy.get('input[name=emailInput]').type("Carlos@test.com")

        // {enter} causes the form to submit
        cy.get('input[name=passwordInput]').type(`${"Pa$$w0rd"}{enter}`)

        cy.get('.btn[name=loginButton]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Wrong Email or Password`)
        })

        // we should be redirected to /dashboard
        cy.url().should('include', '/')



        cy.url().should(() => {
            expect(localStorage.getItem('jwt')).equal(null)
        })



    })

    it('do not login in user with wrong credentials', () => {

        cy.visit('/')

        cy.get('input[name=emailInput]').type("bob@test.com")

        // {enter} causes the form to submit
        cy.get('input[name=passwordInput]').type(`${"Pa$$w0rd45"}{enter}`)

        cy.get('.btn[name=loginButton]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Wrong Email or Password`)
        })

        // we should be redirected to /dashboard
        cy.url().should('include', '/')



        cy.url().should(() => {
            expect(localStorage.getItem('jwt')).equal(null)
        })



    })
    it('do not login in user with empty input', () => {

        cy.visit('/')

        cy.get('.btn[name=loginButton]').click();

        // we should be redirected to /dashboard
        cy.url().should('include', '/')

        cy.url().should(() => {
            expect(localStorage.getItem('jwt')).equal(null)
        })

    })

})





describe('Register Rave listereaming test', () => {

    it('register in user succesfully', () => {

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        cy.visit('/')

        cy.get('.btn[name=changeFormButton]').click()

        var username = makeid(5);
        var email = `${username}@test.com`
        console.log(username);

        cy.get('input[name=firstNameInput]').type("coolName")
        cy.get('input[name=lastNameInput]').type("coolLname")
        cy.get('input[name=userNameInput]').type(username)
        cy.get('input[name=emailInput]').type(email)
        cy.get('input[name=passwordInput]').type("opensaysme")
        cy.get('input[name=repeatPasswordInput]').type("opensaysme")




        cy.get('.btn[name=registerButton]').click();


        cy.url().should('include', '/user-profile')

        cy.url().should(() => {
            expect(localStorage.getItem('jwt')).length.above(0)
        })


    })

})
