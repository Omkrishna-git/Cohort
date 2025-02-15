let display = document.getElementById('result');

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (display.value !== '' && !isNaN(display.value[display.value.length - 1])) {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}