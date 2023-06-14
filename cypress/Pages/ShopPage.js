class ShopPage {

// getters

    get productListElement() {
        return cy.get('.products.content-wrap li');
    }

    get addToCartButton () {
        return cy.get('.add_to_cart_button');
    }


// methods

    visit() {
        return cy.visit('/shop');
    }

    selectProduct(index) {
        this.productListElement.eq(index).click()
    }
    
    addToCart(index) {
        this.addToCartButton.eq(index).click()
    }
  
}

export default ShopPage;