describe('Search ', () => {
    it('return searched item', ()=> {
        cy.visit('https://unmesh.me/');
        cy.get('input.search-field').type('jagacy{enter}');
    })
})