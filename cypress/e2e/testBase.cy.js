import HomePage from '../Pages/HomePage';

context('Login page', () => {

const homePage = new HomePage();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

   it('Selects Cart from the menu', () => {
      homePage.selectFromMenu('Cart')
      cy.url().should('eq', Cypress.config().baseUrl + '/cart/')
   })

   it("Selects the 1st product from the list", () => {
    homePage.selectProduct(0)
    cy.url().should('include', '/produkt/')
    
 })

   it("Adds the 1st product from the list to the cart", () => {
    homePage.addToCart(0)
  
 })

   it("Tests the searching tool", () => {
    homePage.search('mug')
    cy.url().should('eq', Cypress.config().baseUrl + '/?s=mug')
  
 })









})
