import BasePage from "./basePage";

class progressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get firstOption() {
    return cy.get('.list-group-item.mt-2').contains("Cras justo odio");
  }

  


}

export default progressBarPage;