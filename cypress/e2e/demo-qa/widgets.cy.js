import toolTipsPage from "../../pageObjects/toolTipsPage";
import progressBarPage from "../../pageObjects/progressBarPage";

  context("Widgets", () => { 
    context("ToolTips", () => {
      beforeEach(() => {
        toolTipsPage.visit();
      });
  
      it.only("Tooltip scenario 1", () => {
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

      context("Progress Bar", () => {
        beforeEach(() => {
          progressBarPage.visit();
        });

        it("Progress bar scenario 1", () => {


// - click start
// - stop at 25% - validate that the bar value is 25%
// - click start
// - stop at 75% - validate that the bar value is 75%
// - click start
// - stop at 99% - validate that the bar value is 99%
        });

    });
    });
  });
  