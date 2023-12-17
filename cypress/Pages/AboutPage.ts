class AboutPage {
 
  visit() {
    cy.visit('/about/');
  }

  verifyIsAt(){
    return cy.url().should('include', '/about/');
  }

}

export default AboutPage;