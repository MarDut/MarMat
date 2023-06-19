class CheckoutPage {

    // getters

    get nameInput() {
        return cy.get('#billing_first_name');
    }

    get lastNameInput() {
        return cy.get('#billing_last_name');
    }

    get companyInput() {
        return cy.get('#billing_company');
    }

    get companyInput() {
        return cy.get('#billing_company');
    }

    get countryDropdown() {
        return cy.get('#customer_details #billing_country');
    }

    get address1Input() {
        return cy.get('#customer_details #billing_address_1');
    }

    get address2Input() {
        return cy.get('#customer_details #billing_address_2');
    }

    get postCodeInput() {
        return cy.get('#customer_details #billing_postcode');
    }

    get cityInput() {
        return cy.get('#customer_details #billing_city');
    }

    get phoneInput() {
        return cy.get('#billing_phone');
    }

    get emailInput() {
        return cy.get('#billing_email');
    }

    get createAccountCheckbox() {
        return cy.get('#createaccount');
    }

    get shipToDifferentAddressCheckbox() {
        return cy.get('#ship-to-different-address-checkbox');
    }

    get shipToDifferentAddressContainer() {
        return cy.get('.shipping_address');
    }

    get shippingNameInput() {
        return cy.get('#shipping_last_name');
    }

    get shippingLastnameInput() {
        return cy.get('#shipping_last_name');
    }

    get shippingCompanyInput() {
        return cy.get('#shipping_company');
    }

    get shippingCountryDropdown() {
        return cy.get('#shipping_country');
    }

    get shippingAddress1Input() {
        return cy.get('.shipping_address #shipping_address_1');
    }

    get shippingAddress2Input() {
        return cy.get('.shipping_address #shipping_address_2');
    }

    get shippingPostcodeInput() {
        return cy.get('.shipping_address #shipping_postcode');
    }

    get shippingCity() {
        return cy.get('.shipping_address #shipping_city');
    }

    get otherCommentsInput() {
        return cy.get('#order_comments');
    }

    get shippingMethodRadio() {
        return cy.get('#shipping_method li input')
    }

    get termsCheckbox() {
        return cy.get('#terms');
    }

    get placeOrderButton() {
        return cy.get('#place_order');
    }



    // methods

    fillName(string) {
        this.nameInput.type(string);
    }

    fillLastName(string) {
        this.lastNameInput.type(string);
    }

    fillCompany(string) {
        this.companyInput.type(string);
    }

    selectCountry(string) {
        this.countryDropdown.select(string);
    }

    fillAddress1(string) {
        this.address1Input.type(string);
    }

    fillAddress2(string) {
        this.address2Input.type(string);
    }

    fillPostcode(string) {
        this.postCodeInput.type(string);
    }

    fillCity(string) {
        this.cityInput.type(string);
    }

    fillPhone(string) {
        this.phoneInput.type(string);
    }

    fillEmail(string) {
        this.emailInput.type(string);
    }

    createAccount() {
        this.createAccountCheckbox.check();
    }

    sendToDifferentAddress() {
        this.shipToDifferentAddressCheckbox.check();
        this.shipToDifferentAddressContainer.should('be.visible')
    }

    // shipping fields

    fillShippingName(string) {
        this.shippingNameInput.type(string);
    }

    fillShippingLastName(string) {
        this.shippingLastnameInput.type(string);
    }

    fillShippingCompany(string) {
        this.shippingCompanyInput.type(string);
    }

    selectShippingCountry(string) {
        this.shippingCountryDropdown.select(string);
    }

    fillShippingAddress1(string) {
        this.shippingAddress1Input.type(string);
    }

    fillShippingAddress2(string) {
        this.shippingAddress2Input.type(string);
    }

    fillShippingPostcode(string) {
        this.shippingPostcodeInput.type(string);
    }

    fillShippingCity(string) {
        this.shippingCity.type(string);
    }

    selectShippingMethod(index) {
        this.shippingMethodRadio.eq(index).check();
    }

    acceptTerms() {
        this.termsCheckbox.check();
    }

    placeOrder() {
        this.placeOrderButton.click();
    }

    goToConfirmation() {
        acceptTerms();
        placeOrder();
    }

    //  selectPaymentOption() {}

    //  useDiscountCode() { }

      fillTheForm() { //Potem się zrobi randomowe, do ustalenia czy sami wrzucimy dane do losowania czy może jakaś biblioteka
        this.fillName('Jan')
        this.fillLastName('Nowak')
        this.fillAddress1('Kwiatowa 10')
        this.fillPostcode('05-800')
        this.fillCity('Warszawa')
        this.fillPhone('123123123')
        this.fillEmail('123@123.pl')
        this.acceptTerms()

      }

}

export default CheckoutPage;