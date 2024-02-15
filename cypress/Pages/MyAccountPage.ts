class MyAccount {
  
  get navigationMenu() {
    return cy.get('.account-navigation-wrap li');
  }

  // methods

  verifyIsAt(){
    cy.url().should('eq', Cypress.config().baseUrl + '/my-account/');
  }

  goToAdressDetails() {
    this.navigationMenu.contains('Adresy').click();
  }

  goToOrderDetails() {
    this.navigationMenu.contains('Zamówienia').click();
  }

  goToAccountDetails() {
    this.navigationMenu.contains('Szczegóły konta').click();
  }

  logout() {
   this.navigationMenu.contains('Log out').click();
  }
}

export default MyAccount;