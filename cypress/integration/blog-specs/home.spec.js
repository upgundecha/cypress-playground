describe('Heading text', () => {
    it('contains the correct title', ()=> {
        cy.visit('https://unmesh.me/');
        cy.get('h1.site-title a')
            .invoke('text')
            .should('equal', 'TestO\'Matic');
    })
})