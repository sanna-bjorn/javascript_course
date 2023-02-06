const analyzeArray = require('../analyzeArray');

test('Analyse array test 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyse array test 2', () => {
  expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});

test('Analyse array test 3', () => {
  expect(analyzeArray([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});

test('Analyse array test 4', () => {
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});
