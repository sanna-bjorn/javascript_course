class Gameboard {
  constructor(size) {
    this.board = [];
    this.missedShots = [];
    this.size = size;
  }
  placeShip(x, y, ship) {
    if (this.board[x] === undefined) {
      this.board[x] = [];
    }
    this.board[x][y] = ship;
  }
  receiveAttack(x, y) {
    if (this.board[x] != undefined && this.board[x][y] != undefined) {
      const ship = this.board[x][y];
      ship.hit();
    } else {
      this.missedShots.push([x, y]);
    }
  }
  isAllSunk() {
    for (let x = 0; x < this.size; x++) {
      if (this.board[x] === undefined) {
        continue;
      }
      for (let y = 0; y < this.size; y++) {
        if (this.board[x][y] === undefined) {
          continue;
        }
        if (!this.board[x][y].isSunk()) {
          return false;
        }
      }
    }

    return true;
  }
  getSize() {
    return this.size;
  }
}

export default Gameboard;
