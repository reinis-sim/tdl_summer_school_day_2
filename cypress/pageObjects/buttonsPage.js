import BasePage from "./basePage";

class buttonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get doubleClickBtn() {
    return cy.get('#doubleClickBtn');
  }
  static get rightClickBtn() {
    return cy.get('#rightClickBtn');
  }
  static get leftClick() {
    return cy.get('[class="btn btn-primary"]').contains(new RegExp(`^${"Click me"}$`, 'gi'));
  }
  static get doubleClickMessage() {
    return cy.get('#doubleClickMessage');
  }
  static get rightClickMessage() {
    return cy.get('#rightClickMessage');
  }
  static get dynamicClickMessage() {
    return cy.get('#dynamicClickMessage');
  }

  


}

export default buttonsPage;
