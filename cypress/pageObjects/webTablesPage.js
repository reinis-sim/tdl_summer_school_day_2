import BasePage from "./basePage";

class webTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecord() {
    return cy.get('#addNewRecordButton');
  }
  static get firstName() {
    return cy.get('#firstName');
  }
  static get lastName() {
    return cy.get('#lastName');
  }
  static get userEmail() {
    return cy.get('#userEmail');
  }
  static get age() {
    return cy.get('#age');
  }
  static get department() {
    return cy.get('#department');
  }
  static get salary() {
    return cy.get('#salary');
  }
  static get submitBtn() {
    return cy.get('#submit');
  }
  static get searchField() {
    return cy.get('#searchBox');
  }
  static get bigTable() {
    return cy.get('.rt-table');
  }
  static get deleteFirst() {
    return cy.get('#delete-record-1');
  }
  //TODO probably can be optimised
  static get deleteSecond() {
    return cy.get('#delete-record-2');
  }
  // static get deleteAll(){
  //   return cy.get('[title="Delete"]');
  // }

  static get deleteThird() {
    return cy.get('#delete-record-3');
  }
  static get noData(){
    return cy.get('[class="rt-noData"]');
  }


}

export default webTablesPage;
