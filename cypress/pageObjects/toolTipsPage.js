import BasePage from "./basePage";

class toolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get toolTipButton() {
    return cy.get('#toolTipButton');
  }
  static get textField() {
    return cy.get('#texFieldToolTopContainer');
  }
  static get toolTipWord() {
    return cy.get('[href="javascript:void(0)"]').contains("Contrary");
  }
  static get toolTipNumbers() {
    return cy.get('[href="javascript:void(0)"]').contains("1.10.32");
  }
  static get popupButton() {
    return cy.get('#buttonToolTip');
  }
  static get popupTextField() {
    return cy.get('#textFieldToolTip');
  }
  static get popupWord() {
    return cy.get('#sectionToolTip');
  }
  static get popupNumbers() {
    return cy.get('#contraryTexToolTip');
  }
  
  

  


}

export default toolTipsPage;
