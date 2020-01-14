describe('Search ', () => {
    it('return searched item', ()=> {
        cy.visit('https://unmesh.me/');
        cy.get('input.search-field').should('have.attr','placeholder', 'Search …')
        cy.get('input.search-field').type('jagacy{enter}');
        cy.get('article header h1 a')
            .invoke('text')
            .should('equal', 'Automated Acceptance testing for Mainframe with Cucumber and Jagacy');
    })
})