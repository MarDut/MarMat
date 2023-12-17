class ProductPage {


  verifyIsAt() {
   return cy.url().should('include', '/produkt/');
  }

  visit() { }

  increaseAmount() { }

  decreaseAmonut() { }

  addToCart() { }
}

export default ProductPage;