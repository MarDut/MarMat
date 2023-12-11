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


  // methods

  increaseAmount(productIndex: number) {
    this.increaseProductAmountButton.eq(productIndex).click();
    //updateCart();
  }

  decreaseAmount(productIndex: number) {
    this.decreaseProductAmountButton.eq(productIndex).click();
    //updateCart();
  }

  deleteProduct(index: number) {
    this.deleteProductButton.eq(index).click();
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
}

export default CartPage;