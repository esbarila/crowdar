describe('Shopping Cart tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('input[data-test=login-button]').click();
        cy.url().should('contain', 'inventory');
        cy.get('#inventory_container').should('be.visible');
    })

    it('Adds item to cart successfully', () => {
        cy.get('[data-test*="backpack"]').click();
        cy.get('[data-test*="backpack"]').should('have.text', 'Remove');
        cy.get('button[data-test*="bike-light"]').click();
        cy.get('button[data-test*="bike-light"]').should('have.text', 'Remove');        
        cy.get('.shopping_cart_badge').should('contain', '2');

        cy.get('.shopping_cart_link').click();
        cy.url().should('contain', 'cart');
        cy.get('.cart_list')
            .should('contain', 'Sauce Labs Bike Light')
            .should('contain', 'Sauce Labs Backpack');
        cy.get('button[data-test=remove-sauce-labs-bike-light]').should('be.visible');
        cy.get('button[data-test=remove-sauce-labs-backpack]').should('be.visible');
    })

    it('Validate items removed from cart', () => {
        cy.get('[data-test*="backpack"]').click();
        cy.contains('Remove').click();
        cy.get('.shopping_cart_badge').should('not.exist');

        cy.get('button[data-test*="bike-light"]').click();
        cy.get('.shopping_cart_link').click();
        cy.contains('Remove').click();
        cy.get('.shopping_cart_badge').should('not.exist');
        cy.get('[data-test=continue-shopping]').click();
        cy.get('[data-test=remove-sauce-labs-bike-light]').should('not.exist');
    })

    it('Empty checkout. This test SHOULD FAIL', () => {
        cy.get('[data-test*="backpack"]').click();
        cy.get('.shopping_cart_link').click();
        cy.contains('Remove').click();
        cy.get('[data-test=checkout]').should('be.disabled');
    })


})