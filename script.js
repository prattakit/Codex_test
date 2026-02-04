const display = document.querySelector("#display");
const keys = document.querySelector(".calculator__keys");

const state = {
  current: "0",
  previous: null,
  operator: null,
  awaitingNext: false,
};

const updateDisplay = () => {
  display.value = state.current;
};

const inputNumber = (number) => {
  if (state.awaitingNext) {
    state.current = number;
    state.awaitingNext = false;
  } else {
    state.current = state.current === "0" ? number : state.current + number;
  }
};

const inputDecimal = () => {
  if (state.awaitingNext) {
    state.current = "0.";
    state.awaitingNext = false;
    return;
  }

  if (!state.current.includes(".")) {
    state.current += ".";
  }
};

const clearAll = () => {
  state.current = "0";
  state.previous = null;
  state.operator = null;
  state.awaitingNext = false;
};

const toggleSign = () => {
  if (state.current === "0") {
    return;
  }

  state.current = state.current.startsWith("-")
    ? state.current.slice(1)
    : `-${state.current}`;
};

const inputPercent = () => {
  const value = parseFloat(state.current);
  if (Number.isNaN(value)) {
    return;
  }

  state.current = String(value / 100);
};

const calculate = (first, operator, second) => {
  const firstValue = parseFloat(first);
  const secondValue = parseFloat(second);

  if (Number.isNaN(firstValue) || Number.isNaN(secondValue)) {
    return second;
  }

  switch (operator) {
    case "+":
      return String(firstValue + secondValue);
    case "-":
      return String(firstValue - secondValue);
    case "*":
      return String(firstValue * secondValue);
    case "/":
      return secondValue === 0 ? "0" : String(firstValue / secondValue);
    default:
      return second;
  }
};

const handleOperator = (nextOperator) => {
  const { previous, operator, current } = state;

  if (operator && state.awaitingNext) {
    state.operator = nextOperator;
    return;
  }

  if (previous === null) {
    state.previous = current;
  } else if (operator) {
    const result = calculate(previous, operator, current);
    state.current = result;
    state.previous = result;
  }

  state.operator = nextOperator;
  state.awaitingNext = true;
};

const handleCalculate = () => {
  if (!state.operator || state.awaitingNext) {
    return;
  }

  const result = calculate(state.previous, state.operator, state.current);
  state.current = result;
  state.previous = null;
  state.operator = null;
  state.awaitingNext = true;
};

keys.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const { number, operator, action } = target.dataset;

  if (number !== undefined) {
    inputNumber(number);
    updateDisplay();
    return;
  }

  if (operator) {
    handleOperator(operator);
    updateDisplay();
    return;
  }

  if (!action) {
    return;
  }

  switch (action) {
    case "decimal":
      inputDecimal();
      break;
    case "clear":
      clearAll();
      break;
    case "sign":
      toggleSign();
      break;
    case "percent":
      inputPercent();
      break;
    case "calculate":
      handleCalculate();
      break;
    default:
      break;
  }

  updateDisplay();
});

document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (/^[0-9]$/.test(key)) {
    inputNumber(key);
    updateDisplay();
    return;
  }

  if (key === ".") {
    inputDecimal();
    updateDisplay();
    return;
  }

  if (["+", "-", "*", "/"].includes(key)) {
    handleOperator(key);
    updateDisplay();
    return;
  }

  if (key === "Enter" || key === "=") {
    handleCalculate();
    updateDisplay();
    return;
  }

  if (key === "Escape") {
    clearAll();
    updateDisplay();
  }
});

updateDisplay();