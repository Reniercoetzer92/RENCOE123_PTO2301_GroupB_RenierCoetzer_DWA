const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const errorMessageBlank =
  "Division not performed. Both values are required in inputs. Try again."; // add Error message, when both inputs are blank.
const errorMessageInvalidNumber =
  "Division not performed. Invalid number provided. Try again."; //add Error message, when divider is incorrect.
const errorMessageCrash =
  "Something critical went wrong. Please reload the page."; //add Error message, when both inputs have wrong characters.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    // add if/else statement for the error message if both isz, or the results.
    result.innerText = errorMessageBlank;
  } else {
    if (divider >= 0) {
      //add if/else Statement in if/else statement for error message invalid number.
      result.innerText = Math.floor(dividend / divider);
    } else {
      if (isNaN(dividend) || isNaN(divider)) {
        // add if/else Statement in for error message Crash.
        document.body.innerHTML = errorMessageCrash;
      } else {
        result.innerText = errorMessageInvalidNumber;
      }
    }
  }
});
