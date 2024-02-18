/// <reference types="Cypress" />

import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';

//test data
import {
    MenuOptions, randomComment
  } from '../fixtures/test-data';

describe('Product', () => {

const loginPage = new LoginPage();
const productPage = new ProductPage();
const homePage = new HomePage();

  it('logged in user can rate and comment on products', () => {
    homePage.visit()
    homePage.selectFromMenu(MenuOptions.MyAccount)
    loginPage.login('matis619@o2.pl', 'rzekawisla2')
    productPage.visit()
    productPage.goToReviewsTab()
    productPage.rateAndComment(4, randomComment)
    productPage.verifyLastAddedOpinion(4, randomComment)
  })

  it('guest user cannot rate and comment on products', () => {
    productPage.visit()
    productPage.goToReviewsTab()
    expect(productPage.userCannotRateAndComment())
  })

})