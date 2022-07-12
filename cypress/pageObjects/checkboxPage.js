import BasePage from "./basePage";

class checkboxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get homeExpand() {
    return cy.get('[d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"]');
  }

}

export default checkboxPage;
