describe('Login tests', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Checks element visibility', () => {
        cy.get('[data-test=username]')
            .should('have.attr', 'placeholder', 'Username')
            .should('be.visible');

        cy.get('[data-test=password]')
            .should('have.attr', 'placeholder', 'Password')
            .should('be.visible');
        
        cy.get('input[data-test=login-button]')
            .should('have.attr', 'value', 'Login')
            .should('be.visible');
    })

    it('User logs in successfully', () => {
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('input[data-test=login-button]').click();

        cy.url().should('contain', 'inventory.html');
        cy.get('#inventory_container').should('be.visible');     
    })

    it('Validates wrong username or password', () => {
        cy.get('[data-test=username]').type('incorrect_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('input[data-test=login-button]').click();

        cy.get('[data-test=error]').should('contain', 'Username and password do not match any user');
    })


})