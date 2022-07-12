import BasePage from "./basePage";

class checkboxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get plusButton() {
    return cy.get('[title="Expand all"]');
  }
  static get notes(){
    return cy.get('[for="tree-node-notes"]');
  }
  static get react(){
    return cy.get('[for="tree-node-react"]');
  }
  static get angular(){
    return cy.get('[for="tree-node-angular"]');
  }
  static get general(){
    return cy.get('[for="tree-node-general"]');
  }
  static get excel(){
    return cy.get('[for="tree-node-excelFile"]');
  }
  static get office(){
    return cy.get('[for="tree-node-office"]');
  }
  static get public(){
    return cy.get('[for="tree-node-public"]');
  }
  static get private(){
    return cy.get('[for="tree-node-private"]');
  }
  static get classified(){
    return cy.get('[for="tree-node-classified"]');
  }
  static get checkboxResult(){
    return cy.get('#result');
  }

  

}

export default checkboxPage;
