import BasePage from "./basePage";

class selectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get firstOption() {
    return cy.get('.list-group-item.mt-2').contains("Cras justo odio");
  }
  static get secondOption() {
    return cy.get('.list-group-item.mt-2').contains("Dapibus ac facilisis in");
  }
  static get gridBtn() {
    return cy.get('#demo-tab-grid');
  }
  static get gridTwo() {
    return cy.get('.list-group-item').contains("Two");
  }
  static get gridFour() {
    return cy.get('.list-group-item').contains("Four");
  }
  static get gridSix() {
    return cy.get('.list-group-item').contains("Six");
  }
  static get gridEight() {
    return cy.get('.list-group-item').contains("Eight");
  }
  


}

export default selectablePage;
