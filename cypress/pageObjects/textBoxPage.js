import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get username() {
    return cy.get("#userName");
  }
  static get email() {
    return cy.get("#userEmail");
  }
  static get currentAddress() {
    return cy.get("#currentAddress");
  }
  static get permanentAddress() {
    return cy.get("#permanentAddress");
  }
  static get submitButton() {
    return cy.get("#submit");
  }

  static get usernameResult() {
    return cy.get("#name.mb-1");
  }
  static get emailResult() {
    return cy.get("#email.mb-1");
  }
  static get currentAddressResult() {
    return cy.get("#currentAddress.mb-1");
  }
  static get permanentAddressResult() {
    return cy.get("#permanentAddress.mb-1");
  }
}

export default TextBoxPage;
