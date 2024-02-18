/// <reference types="Cypress" />

import SearchPage from '../Pages/SearchPage';
import HomePage from '../Pages/HomePage';

//test data
import {
  ProductItems
} from '../fixtures/test-data';

describe('Search', () => {

const homePage = new HomePage();
const searchPage = new SearchPage();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it("Search an item", () => {
    homePage.search(ProductItems.Mug)
    searchPage.verifyIsAt(ProductItems.Mug);
  })

})


