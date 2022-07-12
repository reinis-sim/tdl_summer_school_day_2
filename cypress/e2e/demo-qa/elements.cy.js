import checkboxPage from "../../pageObjects/checkboxPage";
import radioButtonPage from "../../pageObjects/radioButtonPage";
import TextBoxPage from "../../pageObjects/textBoxPage";
import webTablesPage from "../../pageObjects/webTablesPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });


    it("Filling in Text Boxes", () => {
      TextBoxPage.username.should("be.visible").type("Jim Jones");
      TextBoxPage.email.should("be.visible").type("Jim@gmail.com");
      TextBoxPage.currentAddress.should("be.visible").type("Pils iela");  
      TextBoxPage.permanentAddress.should("be.visible").type("New York");
      TextBoxPage.submitButton.click();
      TextBoxPage.usernameResult.should("contain.text", "Jim Jones")
      TextBoxPage.emailResult.should("contain.text", "Jim@gmail.com")
      TextBoxPage.currentAddressResult.should("contain.text", "Pils iela")
      TextBoxPage.permanentAddressResult.should("contain.text", "New York")
      // Create texbox scenario
      // fill in textboxes with necessary information
      // validate the paragraphs
      // add the necessary steps
    });
  });

  context("Check box scenarios", () => {
    beforeEach(() => {
      checkboxPage.visit();
    });

    it("Checkbox scenario 1", () => {
      checkboxPage.plusButton.click();
      checkboxPage.notes.click();
      checkboxPage.react.click();
      checkboxPage.angular.click();
      checkboxPage.general.click();
      checkboxPage.excel.click();
      checkboxPage.checkboxResult.should("contain.text", "notes");
      checkboxPage.checkboxResult.should("contain.text", "react");
      checkboxPage.checkboxResult.should("contain.text", "angular");
      checkboxPage.checkboxResult.should("contain.text", "general");
      checkboxPage.checkboxResult.should("contain.text", "excelFile");
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes
    });

    it("Checkbox scenario 2", () => {
      checkboxPage.plusButton.click();
      checkboxPage.office.click();
      checkboxPage.checkboxResult.should("contain.text", "general");
      checkboxPage.checkboxResult.should("contain.text", "private");
      checkboxPage.checkboxResult.should("contain.text", "classified");
      checkboxPage.checkboxResult.should("contain.text", "public");

    // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes
    });


  });

  context("Radio button scenarios", () => {
    beforeEach(() => {
      radioButtonPage.visit();
    });


    it("Radio button scenario 1", () => {
      radioButtonPage.yesButton.click();
      radioButtonPage.selectedResult.should("have.text","Yes");
      radioButtonPage.impressiveButton.click();
      radioButtonPage.selectedResult.should("have.text","Impressive");
      radioButtonPage.noButton.should("be.visible").should("have.class", "disabled");
 
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled

    });

  });

  context("Web tables scenarios", () => {
    beforeEach(() => {
      webTablesPage.visit();
    });


    it("Web table scenario 1", () => {
      webTablesPage.addRecord.click();
      webTablesPage.firstName.should("be.visible").type("Jim");
      webTablesPage.lastName.should("be.visible").type("Bob");
      webTablesPage.userEmail.should("be.visible").type("JimBob@mail.com");
      webTablesPage.age.should("be.visible").type("25");
      webTablesPage.salary.should("be.visible").type("2500");
      webTablesPage.department.should("be.visible").type("The best");
      webTablesPage.submitBtn.should("be.visible").click();
      webTablesPage.searchField.should("be.visible").type("Jim");
      webTablesPage.bigTable.should("be.visible").should("contain.text", "Jim");

    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible
    });

    it("Web table scenario 2", () => {
      webTablesPage.deleteFirst.should("be.visible").click();
      webTablesPage.deleteSecond.should("be.visible").click();
      webTablesPage.deleteThird.should("be.visible").click();
      webTablesPage.noData.should("be.visible").should("have.text", "No rows found");
    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found

    });

  });

  context("Buttons scenarios", () => {

    it("Buttons clicking scenario", () => {


    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
