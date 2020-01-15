describe('Search ', () => {
    it('return searched item', ()=> {
        cy.visit('https://unmesh.me/');
        cy.get('input.search-field').should('have.attr','placeholder', 'Search …')
        cy.get('input.search-field').type('faker{enter}');
        cy.get('article header h1')
            .invoke('text')
            .should('contain', 'Generating Test Data with Faker');
    })
})