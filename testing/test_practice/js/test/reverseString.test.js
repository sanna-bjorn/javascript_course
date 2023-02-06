const reverseString = require('../reverse');

describe('reverseString', () => {
  test('reverse strings', () => {
    expect(reverseString('Aa')).toBe('aA');
  });
  test('reverse string', () => {
    expect(reverseString('the boy')).toBe('yob eht');
  });
});
