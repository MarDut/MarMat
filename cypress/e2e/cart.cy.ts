/// <reference types="Cypress" />

import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';
import ShopPage from '../Pages/ShopPage';

//test data
import {
  MenuOptions
} from '../fixtures/test-data';

describe('Cart', () => {

const shopPage = new ShopPage();
const homePage = new HomePage();
const cartPage = new CartPage();


  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it('empty cart', () => {
    homePage.selectFromMenu(MenuOptions.Cart)
    expect(cartPage.verifyIsAt());
    expect(cartPage.isCartEmpty());
  })

  it("increase and decrease product amount", () => {
    homePage.visit();
    homePage.selectFromMenu(MenuOptions.Shop);
    shopPage.addToCart(0);
    homePage.selectFromMenu(MenuOptions.Cart);
    expect(cartPage.verifyIsAt());
    expect(cartPage.compareProcuctAmountToValue(1));
    cartPage.increaseAmount(0);
    expect(cartPage.compareProcuctAmountToValue(2));
    cartPage.decreaseAmount(0);
    expect(cartPage.compareProcuctAmountToValue(1));
  })

  it("decrease product amount to 0", () => {
    homePage.visit();
    homePage.selectFromMenu(MenuOptions.Shop);
    shopPage.addToCart(0);
    homePage.selectFromMenu(MenuOptions.Cart);
    expect(cartPage.verifyIsAt());
    expect(cartPage.compareProcuctAmountToValue(1));
    cartPage.decreaseAmount(0);
    expect(cartPage.isCartEmpty());
  })

  it("delete last product", () => {
    homePage.visit();
    homePage.selectFromMenu(MenuOptions.Shop);
    shopPage.addToCart(0);
    homePage.selectFromMenu(MenuOptions.Cart);
    expect(cartPage.verifyIsAt());
    cartPage.deleteProduct(0);
    expect(cartPage.isCartEmpty());
  })
})


