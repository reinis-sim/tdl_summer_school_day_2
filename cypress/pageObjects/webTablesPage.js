import BasePage from "./basePage";

class webTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecord() {
    return cy.get('#addNewRecordButton');
  }


}

export default webTablesPage;
