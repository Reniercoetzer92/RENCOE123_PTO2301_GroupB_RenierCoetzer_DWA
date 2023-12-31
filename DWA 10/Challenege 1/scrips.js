const MAX_NUMBER = 15;
const MIN_NUMBER = -15;
const STEP_AMOUNT = 1;

const elements = {
  number: document.querySelector('[data-key="number"]'),
  subtract: document.querySelector('[data-key="subtract"]'),
  add: document.querySelector('[data-key="add"]'),
  reset: document.querySelector('[data-key="reset"]'),
};

const updateColor = () => {
  const value = parseInt(elements.number.value);
  const singleStep = 250 / (MAX_NUMBER - MIN_NUMBER);

  const distMax = MAX_NUMBER - value;
  const distMin = value - MIN_NUMBER;

  const red = distMax * singleStep;
  const green = distMin * singleStep;

  elements.number.style.color = `rgb(${red}, ${green}, 250)`;
};

const subtractHandler = () => {
  const newValue = parseInt(elements.number.value) - STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.add.disabled) elements.add.disabled = false;

  if (newValue <= MIN_NUMBER) elements.subtract.disabled = true;

  updateColor();
};

const addHandler = () => {
  const newValue = parseInt(elements.number.value) + STEP_AMOUNT;
  elements.number.value = newValue;

  if (elements.subtract.disabled) elements.subtract.disabled = false;

  if (newValue >= MAX_NUMBER) elements.add.disabled = true;

  updateColor();
};

const resetHandler = () => {
  const numberElement = document.querySelector('[data-key="number"]');
  const confirmationMessageElement = document.getElementById(
    "confirmationMessage"
  );

  numberElement.value = "0";
  elements.subtract.disabled = false;
  elements.add.disabled = false;

  confirmationMessageElement.textContent = "Counter has been Reset!";

  updateColor();

  setTimeout(() => {
    confirmationMessageElement.textContent = "";
  }, 3000);
};

elements.subtract.addEventListener("click", subtractHandler);
elements.add.addEventListener("click", addHandler);
elements.reset.addEventListener("click", resetHandler);

updateColor();
