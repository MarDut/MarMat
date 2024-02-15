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

  login(username: string, password: string) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  checkIfErrorisVisible(){
    this.errorMessage.should('be.visible');
  }
}

export default LoginPage;