function capitalize(string) {
  let s = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    s += string[i];
  }
  return s;
}

module.exports = capitalize;
