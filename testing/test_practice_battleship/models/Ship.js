class Ship {
  constructor(length) {
    this.length = length;
    let hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
