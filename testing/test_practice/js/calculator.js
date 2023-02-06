function calculator(input1, operation, input2) {
  if (operation === '+') {
    let add = input1 + input2;
    return add;
  }
  if (operation === '-') {
    let subtract = input1 - input2;
    return subtract;
  }
  if (operation === 'x') {
    let multiply = input1 * input2;
    return multiply;
  }
  if (operation === '/') {
    let divide = input1 / input2;
    return divide;
  }

  return;
}

module.exports = calculator;
