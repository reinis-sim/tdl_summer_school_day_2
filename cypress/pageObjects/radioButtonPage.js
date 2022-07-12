import BasePage from "./basePage";

class radioButtonPage extends BasePage {
  static get url() {
    return "/radio-button";
  }

  static get yesButton() {
    return cy.get('[for="yesRadio"]');
  }
  static get selectedResult() {
    return cy.get('.text-success');
  }
  static get impressiveButton() {
    return cy.get('[for="impressiveRadio"]');
  }
  static get noButton() {
    return cy.get('[for="noRadio"]');
  }

}

export default radioButtonPage;
