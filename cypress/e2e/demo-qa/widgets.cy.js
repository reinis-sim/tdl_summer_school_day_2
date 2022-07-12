import toolTipsPage from "../../pageObjects/toolTipsPage";
import progressBarPage from "../../pageObjects/progressBarPage";

  context("Widgets", () => { 
    context("ToolTips", () => {
      beforeEach(() => {
        toolTipsPage.visit();
      });
  
      it("Tooltip scenario 1", () => {
        toolTipsPage.toolTipButton.trigger('mouseover');
        toolTipsPage.textField.trigger('mouseover');
        toolTipsPage.toolTipWord.trigger('mouseover');
        toolTipsPage.toolTipNumbers.trigger('mouseover');
        toolTipsPage.popupButton.should('be.visible');
        toolTipsPage.popupTextField.should('be.visible');
        toolTipsPage.popupWord.should('be.visible');
        toolTipsPage.popupNumbers.should('be.visible');
//toolTipsPage.textField.should("contain.text", "textFieldToolTip");        
// - Hover over the - "hover me button", "field", "Contrary", "1.10.32"
// - Validate text in the tooltip/pop-up
      });
    });
      context("Progress Bar", () => {
        beforeEach(() => {
          progressBarPage.visit();
        });

        it.only("Progress bar scenario 1", () => {
            progressBarPage.startStopBtn.should("be.visible").click();
            progressBarPage.progressBar.should("contain.text", "25%");
            progressBarPage.startStopBtn.should("be.visible").click();
            progressBarPage.startStopBtn.should("be.visible").click();
            progressBarPage.progressBar.should("contain.text", "75%");
            progressBarPage.startStopBtn.should("be.visible").click();
            progressBarPage.startStopBtn.should("be.visible").click();
            progressBarPage.progressBar.should("contain.text", "99%");
            progressBarPage.startStopBtn.should("be.visible").click();

// - click start
// - stop at 25% - validate that the bar value is 25%
// - click start
// - stop at 75% - validate that the bar value is 75%
// - click start
// - stop at 99% - validate that the bar value is 99%
        });

    });
    
  });
  