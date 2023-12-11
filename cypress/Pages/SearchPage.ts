class SearchPage {

    verifyIsAt(search: string){
        cy.url().should('eq', Cypress.config().baseUrl + `/?s=${search}`)
    }

}

export default SearchPage;
