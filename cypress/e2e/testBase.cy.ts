/// <reference types="Cypress" />

import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import HomePage from '../Pages/HomePage';
import ShopPage from '../Pages/ShopPage';
import ProductPage from '../Pages/ProductPage';
import ConfirmationPage from '../Pages/ConfirmationPage';
import SearchPage from '../Pages/SearchPage';

//test data
import {
  MenuOptions, 
  SearchingItems,
  TestData
} from '../fixtures/test-data';



context('Home page', () => {

const homePage = new HomePage();
const productPage = new ProductPage();
const searchPage = new SearchPage();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it('Selects Cart from the menu', () => {
    homePage.selectFromMenu(MenuOptions.Cart)
    homePage.verifyIsAt();
  })

  it("Selects the 1st product from the list and opens it's page", () => {
    homePage.selectProduct(0);
    productPage.verifyIsAt();
  })

  it("Adds the 1st product from the list to the cart", () => {
    homePage.addToCart(0);
  })

  it("Tests the searching tool", () => {
    homePage.search(SearchingItems.Mug)
    searchPage.verifyIsAt(SearchingItems.Mug);
  })

})

context('Shop page', () => {

  const shopPage = new ShopPage();
  const productPage = new ProductPage();

  beforeEach('Navigates to shop', () => {
    shopPage.visit();
  })

  it("Selects the 1st product from the list and opens it's page", () => {
    shopPage.selectProduct(0)
    productPage.verifyIsAt();
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
  const confirmationPage = new ConfirmationPage();

  it('Places an order in an e2e process', () => {
    homePage.visit()
    homePage.selectFromMenu(MenuOptions.Shop)
    shopPage.addToCart(0)
    homePage.selectFromMenu(MenuOptions.Cart)
    cartPage.goToCheckout();
    checkoutPage.fillTheForm(TestData.Customers.Customer1);
    checkoutPage.placeOrder();
    confirmationPage.verifyIsAt()
  })

})