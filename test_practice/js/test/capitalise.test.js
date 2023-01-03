const capitalize = require('../capitalise');

describe('capitalize', () => {
  test(' return first letter of string capitalized', () => {
    expect(capitalize('aa')).toBe('Aa');
  });
  test(' return first letter of string capitalized', () => {
    expect(capitalize('the boy')).toBe('The boy');
  });
});
