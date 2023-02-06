const calculator = require('../calculator');

describe('calculator', () => {
  test(' add numbers', () => {
    expect(calculator(1, '+', 1)).toBe(2);
  });

  test(' subtract numbers', () => {
    expect(calculator(1, '-', 1)).toBe(0);
  });

  test(' multiply numbers', () => {
    expect(calculator(1, 'x', 1)).toBe(1);
  });

  test(' divide numbers', () => {
    expect(calculator(1, '/', 1)).toBe(1);
  });
});
