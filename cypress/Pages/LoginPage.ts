import {
  UserData,
  TestData 
} from '../fixtures/test-data';

class LoginPage {
  
  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('.login button[type="submit"]');
  }

  get errorMessage() {
    return cy.get('.woocommerce-error');
  }

  login(user: UserData) {
    this.usernameInput.type(user.Login);
    this.passwordInput.type(user.Password);
    this.loginButton.click();
  }

  checkIfErrorisVisible(){
    this.errorMessage.should('be.visible');
  }
}

export default LoginPage;