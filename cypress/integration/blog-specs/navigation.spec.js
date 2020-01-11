describe('Navigation ', () => {

    beforeEach(()=>{
        cy.visit("https://unmesh.me/");
    });
    
    it('contains the About link', ()=> {

        cy.get('a')
            .contains('About')
            .click();
        
            cy.title()
            .should('equal', 'About – TestO\'Matic')
    });

    it('contains the Resources', ()=> {

        cy.get('a')
            .contains('Resources')
            .click();
        
            cy.title()
            .should('equal', 'Resources – TestO\'Matic')
    });

    it('contains the QTP Cookbook', ()=> {

        cy.get('a')
            .contains('QTP Cookbook')
            .click();
        
            cy.title()
            .should('equal', 'QTP Cookbook – TestO\'Matic')
    });

});