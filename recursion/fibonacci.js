function fibs(fn) {
  const arr = [0, 1];
  if (fn <= 0) return 'Please enter a number';
  if (fn === 1) return [0];
  if (fn === 2) return [0, 1];
  for (let i = 0; i < fn - 2; i++)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
}

console.log(fibs(-2));

function fibsRec(fn, array = [0, 1]) {
  if (fn <= 0) return 'Please enter a positive integer.';
  else if (fn === 1) return [0];
  else if (array.length >= fn) return array;
  return fibsRec(fn, [...array, array.at(-1) + array.at(-2)]);
}

console.log(fibsRec(-2)); // Please enter a positive integer.
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
