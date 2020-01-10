describe('Navigation ', () => {
    
    it('contains the About link', ()=> {
        cy.visit('https://unmesh.me/');

        cy.get('a')
            .contains('About')
            .click();
        
            cy.title()
            .should('equal', 'About – TestO\'Matic')
    })

    it('contains the Resources', ()=> {
        cy.visit('https://unmesh.me/');

        cy.get('a')
            .contains('Resources')
            .click();
        
            cy.title()
            .should('equal', 'Resources – TestO\'Matic')
    })

    it('contains the QTP Cookbook', ()=> {
        cy.visit('https://unmesh.me/');

        cy.get('a')
            .contains('QTP Cookbook')
            .click();
        
            cy.title()
            .should('equal', 'QTP Cookbook – TestO\'Matic')
    })

})