class HomePage {

// getters

  get productListElement() {
    return cy.get('.products.content-wrap li');
  }

  get searchBoxIcon() {
    return cy.get('.search-toggle-open');
  }

  get searchBoxInput() {
    return cy.get('input[class="search-field"]');
  }

  get menuListElement() {
     return cy.get('#primary-menu > li > a');
  }

  get addToCartButton () {
    return cy.get('.add_to_cart_button');
  }


// methods

  visit() {
    return cy.visit('/');
  }

  selectFromMenu(menu) {
    this.menuListElement.contains(menu).click()
  }

  search(searchText) {
    this.searchBoxIcon.click()
    this.searchBoxInput.type(searchText + '{enter}')
  }

  viewAllProducts() {}

  selectProduct(index) {
    this.productListElement.eq(index).click()
  }

  addToCart(index) {
    this.addToCartButton.eq(index).click()
  }
}

export default HomePage;
