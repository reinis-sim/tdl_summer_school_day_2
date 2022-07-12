  // import page objects

import selectablePage from "../../pageObjects/selectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    beforeEach(() => {
      selectablePage.visit();
    });

    it("SelectablePage scenario 1", () => {
      selectablePage.firstOption.click();
      selectablePage.firstOption.should("have.class", "active");
      selectablePage.secondOption.click();
      selectablePage.secondOption.should("have.class", "active");
    });
    // Create SelectablePage page object
    // Create scenario 1:
    // Click on "Cras justo odio"
    // Validate that class contains active
    // Click on "Dapibus ac facilisis in"
    // Validate that chosen buttons contains class active

    it("SelectablePage scenario 2", () => {
      selectablePage.gridBtn.should("be.visible").click();
      selectablePage.gridFour.should("be.visible").click();
      selectablePage.gridEight.should("be.visible").click();
      selectablePage.gridSix.should("be.visible").click();
      selectablePage.gridTwo.should("be.visible").click();
      selectablePage.gridFour.should("have.class", "active");
      selectablePage.gridEight.should("have.class", "active");
      selectablePage.gridSix.should("have.class", "active");
      selectablePage.gridTwo.should("have.class", "active");
    });

    // Create scenario 2:
    // Click on grid
    // Click on numbers 4, 8, 6, 2
    // Validate that chosen buttons contains class active
  });
});
