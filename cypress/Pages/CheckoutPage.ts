import { Test } from 'mocha';
import {
    CustomerData,
    TestData 
  } from '../fixtures/test-data';

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

    fillName(name: string) {
        this.nameInput.type(name);
    }

    fillLastName(lastName: string) {
        this.lastNameInput.type(lastName);
    }

    fillCompany(company :string) {
        this.companyInput.type(company);
    }

    selectCountry(country: string) {
        this.countryDropdown.select(country);
    }

    fillAddress1(address1: string) {
        this.address1Input.type(address1);
    }

    fillAddress2(address2: string) {
        this.address2Input.type(address2);
    }

    fillPostcode(postCode: string) {
        this.postCodeInput.type(postCode);
    }

    fillCity(city: string) {
        this.cityInput.type(city);
    }

    fillPhone(phoneNumber: string) {
        this.phoneInput.type(phoneNumber);
    }

    fillEmail(email: string) {
        this.emailInput.type(email);
    }

    createAccount() {
        this.createAccountCheckbox.check();
    }

    sendToDifferentAddress() {
        this.shipToDifferentAddressCheckbox.check();
        this.shipToDifferentAddressContainer.should('be.visible')
    }

    // shipping fields

    fillShippingName(shippingName: string) {
        this.shippingNameInput.type(shippingName);
    }

    fillShippingLastName(shippingLastName: string) {
        this.shippingLastnameInput.type(shippingLastName);
    }

    fillShippingCompany(shippingCompany: string) {
        this.shippingCompanyInput.type(shippingCompany);
    }

    selectShippingCountry(shippingCountry: string) {
        this.shippingCountryDropdown.select(shippingCountry);
    }

    fillShippingAddress1(shippingAddress1: string) {
        this.shippingAddress1Input.type(shippingAddress1);
    }

    fillShippingAddress2(shippingAddress2: string) {
        this.shippingAddress2Input.type(shippingAddress2);
    }

    fillShippingPostcode(shippingPostCode: string) {
        this.shippingPostcodeInput.type(shippingPostCode);
    }

    fillShippingCity(shippingCity: string) {
        this.shippingCity.type(shippingCity);
    }

    selectShippingMethod(index: number) {
        this.shippingMethodRadio.eq(index).check();
    }

    acceptTerms() {
        this.termsCheckbox.check();
    }

    placeOrder() {
        this.placeOrderButton.click();
    }

    goToConfirmation() {
        this.acceptTerms();
        this.placeOrder();
    }

    //  selectPaymentOption() {}

    //  useDiscountCode() { }

      fillTheForm(customer: CustomerData) { //Potem się zrobi randomowe, do ustalenia czy sami wrzucimy dane do losowania czy może jakaś biblioteka
        this.fillName(customer.Name);
        this.fillLastName(customer.LastName);
        this.fillAddress1(customer.Address1);
        this.fillPostcode(customer.Postcode);
        this.fillCity(customer.City);
        this.fillPhone(customer.Phone);
        this.fillEmail(customer.Email);
        this.acceptTerms();

      }

}

export default CheckoutPage;