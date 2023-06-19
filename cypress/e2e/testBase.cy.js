import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import HomePage from '../Pages/HomePage';
import ShopPage from '../Pages/ShopPage';

context('Home page', () => {

const homePage = new HomePage();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it('Selects Cart from the menu', () => {
      homePage.selectFromMenu('Cart')
      cy.url().should('eq', Cypress.config().baseUrl + '/cart/')
  })

  it("Selects the 1st product from the list and opens it's page", () => {
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

context('Shop page', () => {

  const shopPage = new ShopPage();

  beforeEach('Navigates to shop', () => {
    shopPage.visit();
  })

  it("Selects the 1st product from the list and opens it's page", () => {
    shopPage.selectProduct(0)
    cy.url().should('include', '/produkt/')
  })

  it("Adds the 1st product from the list to the cart", () => {
    shopPage.addToCart(0)
  })

})

context('Single session happy path e2e tests', () => {

  const shopPage = new ShopPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  it('Places an order in an e2e process', () => {
    homePage.visit()
    homePage.selectFromMenu('Shop')
    shopPage.addToCart(0)
    homePage.selectFromMenu('Cart')
    cartPage.goToCheckout()
    checkoutPage.fillTheForm()
    checkoutPage.placeOrder()
    cy.url().should('contain', '/order-received/')

  })

})