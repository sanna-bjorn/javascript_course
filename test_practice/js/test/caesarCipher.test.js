const caesarCipher = require('../caesarCipher');

test('CAESAR CIPHER TEST 1', () => {
  expect(caesarCipher('greetings good sir!', 0)).toBe('greetings good sir!');
});

test('CAESAR CIPHER TEST 2', () => {
  expect(caesarCipher('what a wonderful day', 3)).toBe('zkdw d zrqghuixo gdb');
});

test('CAESAR CIPHER TEST 3', () => {
  expect(caesarCipher('i really need to sleep early tonight!', 6)).toBe(
    'o xkgrre tkkj zu yrkkv kgxre zutomnz!'
  );
});

test('CAESAR CIPHER TEST 4', () => {
  expect(caesarCipher('going to work', 11)).toBe('rztyr ez hzcv');
});
