/// <reference types="Cypress" />

import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import HomePage from '../Pages/HomePage';
import ShopPage from '../Pages/ShopPage';
import ConfirmationPage from '../Pages/ConfirmationPage';

//test data
import {
  MenuOptions, 
  TestData
} from '../fixtures/test-data';
import LoginPage from '../Pages/LoginPage';


describe('Place order flows', () => {
  const shopPage = new ShopPage();
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const confirmationPage = new ConfirmationPage();
  const loginPage = new LoginPage();

  it('non logged user', () => {
    homePage.visit();
    homePage.selectFromMenu(MenuOptions.Shop);
    shopPage.addToCart(0);
    homePage.selectFromMenu(MenuOptions.Cart);
    cartPage.goToCheckout();
    checkoutPage.fillTheForm(TestData.Customers.Customer1);
    checkoutPage.placeOrder();
    expect(confirmationPage.verifyIsAt());
  })

  it('logged user', () => {
    homePage.visit()
    homePage.selectFromMenu(MenuOptions.MyAccount)
    loginPage.login('mr.dutkiewicz@gmail.com', 'vCZzF2{y~zn14J');
    homePage.selectFromMenu(MenuOptions.Shop);
    shopPage.addToCart(0);
    homePage.selectFromMenu(MenuOptions.Cart);
    cartPage.goToCheckout();
    checkoutPage.acceptTerms();
    checkoutPage.placeOrder();
    expect(confirmationPage.verifyIsAt());
  })

})