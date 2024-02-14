/// <reference types="Cypress" />

import SearchPage from '../Pages/SearchPage';
import HomePage from '../Pages/HomePage';

//test data
import {
  SearchingItems
} from '../fixtures/test-data';

describe('Search', () => {

const homePage = new HomePage();
const searchPage = new SearchPage();

  beforeEach('Navigates to main page', () => {
    homePage.visit();
  })

  it("Search an item", () => {
    homePage.search(SearchingItems.Mug)
    searchPage.verifyIsAt(SearchingItems.Mug);
  })

})


