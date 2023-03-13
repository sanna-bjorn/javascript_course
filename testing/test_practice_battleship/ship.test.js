const ship = require('../Ship');

//Fix these
describe('hit_increase', () => {
  test('ship hit number to increase by 1 when hit is run', () => {
    expect(ship(hit())).toBe(numHit);
  });
  test(' return first letter of string capitalized', () => {
    expect(capitalize('the boy')).toBe('The boy');
  });
});
