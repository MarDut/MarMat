/// <reference types="Cypress" />

import ShopPage from '../Pages/ShopPage';

//test data
import {
  ProductItems, orderBy
} from '../fixtures/test-data';

describe('Shop', () => {

const shopPage = new ShopPage();

  beforeEach('Navigates to main page', () => {
    shopPage.visit();
  })

  it('product categories filter is functional', () => {
    shopPage.selectCategory(ProductItems.Mug);
    expect(shopPage.verifyAllProductsCategory(ProductItems.Mug))
    shopPage.selectCategory(ProductItems.TShirt);
    expect(shopPage.verifyAllProductsCategory(ProductItems.TShirt))
  })

  it('price filter is functional', () => {
    shopPage.setPriceRangeFilter(10, 40);
    expect(shopPage.verifyAllProductsPricesWithinRange(10, 40))
  })

  it('Product sorting is functional', () => {
    shopPage.orderBy(orderBy.Price)
    expect(shopPage.verifyProductsAreSortedAscByPrice())         
  })
})