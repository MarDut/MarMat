class HomePage {

  visit() {
    return cy.visit('/');
  }

  selectFromMenu(menu){
    cy.get('#primary-menu > li > a').contains(menu).click()
  }

  search(searchText){
    cy.get('.search-toggle-open').click()
    cy.get('input[class="search-field"]').type(searchText + '{enter}')
  }

  viewAllProducts(){

  }

  selectProduct(index){
    cy.get('.products.content-wrap li').eq(index).click()
  }

  addToCart(index){
    cy.get('.add_to_cart_button').eq(index).click()
  }
}

export default HomePage;
