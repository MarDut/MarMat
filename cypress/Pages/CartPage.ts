class CartPage {

  // getters

  get deleteProductButton() {
    return cy.get('.cart_item .product-remove');
  }

  get increaseProductAmountButton() {
    return cy.get('.cart_item input[value="+"]');
  }

  get decreaseProductAmountButton() {
    return cy.get('.cart_item input[value="-"]');
  }

  get updateCartButton() {
    return cy.get('[name="update_cart"]');
  }

  get discountCodeInput() {
    return cy.get('input[name="coupon_code"]');
  }

  get useDiscountCodeButton() {
    return cy.get('button[name="apply_coupon"]');
  }

  get checkoutButton() {
    return cy.get('.checkout-button.button');
  }

  get emptyCartContainer() {
    return cy.get('.cart-empty');
  }

  get productItem() {
    return cy.get('.cart_item');
  }


  // methods

  verifyIsAt(){
    cy.url().should('eq', Cypress.config().baseUrl + '/cart/');
  }

  increaseAmount(productIndex: number) {
    this.increaseProductAmountButton.eq(productIndex).click();
    this.updateCart();
  }

  decreaseAmount(productIndex: number) {
    this.decreaseProductAmountButton.eq(productIndex).click();
    this.updateCart();
  }

  deleteProduct(index: number) {
    this.deleteProductButton.eq(index).click()
  }

  updateCart() {
    this.updateCartButton.click();
  }

  useDiscountCode(discountCode: string) {
    this.discountCodeInput.type(discountCode);
    this.useDiscountCodeButton.click();
  }

  calculateSentCost() { }

  goToCheckout() {
    this.checkoutButton.click();
  }

  isCartEmpty(){
    this.emptyCartContainer.should('contain.text', 'Twój koszyk aktualnie jest pusty');
  }

  compareProcuctAmountToValue(value: number){
    cy.get('.quantity input[inputmode="numeric"]').should('have.value', value);
  }
}

export default CartPage;