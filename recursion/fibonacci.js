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
