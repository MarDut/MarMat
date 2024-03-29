/// <reference types="Cypress" />

import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import MyAccount from '../Pages/MyAccountPage';


//test data
import {
  MenuOptions, TestData
} from '../fixtures/test-data';

describe('Login', () => {

const homePage = new HomePage();
const loginPage = new LoginPage();
const myAccount = new MyAccount();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it('loging error', () => {
    homePage.selectFromMenu(MenuOptions.MyAccount)
    loginPage.login(TestData.Users.notExisting);
    expect(loginPage.checkIfErrorisVisible());
  })

  it('log in and logout', () => {
    homePage.selectFromMenu(MenuOptions.MyAccount)
    loginPage.login(TestData.Users.mrdut);
    expect(myAccount.verifyIsAt());
    myAccount.logout();
  })

  
})


