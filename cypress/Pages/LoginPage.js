class LoginPage {
  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('button[type="submit"]');
  }

  login(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }
}



export default new LoginPage();