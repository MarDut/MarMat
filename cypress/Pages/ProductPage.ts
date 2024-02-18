class ProductPage {

  // getters

  get productListElement() {
      return cy.get('.products.content-wrap li');
  }

  get addToCartButton() {
      return cy.get('.add_to_cart_button');
  }

  get reviewsTab() {
      return cy.get('.reviews_tab');
  }

  get mustLoginElement() {
      return cy.get('.must-log-in')
  }
  
    get submitReviewButton() {
      return cy.get('#submit')
  }

  get ratingStars() {
      return cy.get('.stars > span > a')
  }

  get commentInputField() {
      return cy.get('#comment')
  }

  get lastAddedcomment(){
    return cy.get('.description').eq(-1)
  }

  get lastAddedRating(){
    return cy.get('strong.rating').eq(-1)
  }

  get mustLogInMessage(){
    return cy.get('.must-log-in')
  }

  // methods

  verifyIsAt() {
   return cy.url().should('include', '/produkt/');
  }

  visit() {
    return cy.visit('/produkt/phone-case-stve');
  }

  increaseAmount() { }

  decreaseAmonut() { }

  addToCart() { }

  goToReviewsTab(){
    this.reviewsTab.click()
  }

  rateAndComment(rating: number, comment: string){
    this.ratingStars.eq(rating-1).click()
    this.commentInputField.type(comment)
    this.submitReviewButton.click()
  }

  verifyLastAddedOpinion(rating: number, comment: string){
    this.lastAddedRating.invoke('text').then(parseInt).should('be.equal', rating)
    this.lastAddedcomment.invoke('text').invoke('trim').should('be.equal', comment)
  }

  userCannotRateAndComment(){
    this.mustLogInMessage.should('be.visible')
    this.commentInputField.should('not.exist')
    this.submitReviewButton.should('not.exist')
  }
}

export default ProductPage;