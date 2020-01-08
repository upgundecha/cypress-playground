describe('Navigation ', () => {
    it('contains the About link', ()=> {
        cy.visit('https://unmesh.me/');

        cy.get('a')
            .contains('About')
            .click();
        
            cy.title()
            .should('equal', 'About – TestO\'Matic')
    })
})