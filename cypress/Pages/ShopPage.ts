class ShopPage {

    // getters

    get productListElement() {
        return cy.get('.products.content-wrap li');
    }

    get addToCartButton() {
        return cy.get('.add_to_cart_button');
    }

    get productCategoryCheckbox() {
        return cy.get('.wpfLiLabel');
    }




    // methods

    visit() {
        return cy.visit('/shop');
    }

    selectProduct(index: number) {
        this.productListElement.eq(index).click()
    }

    addToCart(index: number) {
        this.addToCartButton.eq(index).click()
        cy.intercept('POST', '/?wc-ajax=add_to_cart').as('addToCartRequest')
        cy.wait('@addToCartRequest').its('response.statusCode').should('eq', 200)
    }

    selectCategory(categoryName: string) {
        this.productCategoryCheckbox.contains(categoryName).click()
    }

}

export default ShopPage;