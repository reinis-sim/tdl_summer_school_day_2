import BasePage from "./basePage";

class progressBarPage extends BasePage {
  static get url() {
    return "/progress-bar";
  }

  static get startStopBtn() {
    return cy.get('#startStopButton');
  }
  static get progressBar() {
    return cy.get('[role="progressbar"]');
  }

  


}

export default progressBarPage;