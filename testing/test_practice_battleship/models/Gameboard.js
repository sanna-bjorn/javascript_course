class Gameboard {
  constructor(size) {
    this.board = [];
    this.missedShots = [];
    this.size = size;
  }
  placeShip(x, y, ship) {
    this.board[x][y] = ship;
  }
  receiveAttack(x, y) {
    if (this.board[x][y] != undefined) {
      ship = this.board[x][y];
      ship.hit();
    } else {
      this.missedShots.push([x, y]);
    }
  }
  isAllSunk() {
    this.board.forEach((ships, x) => {
      ships.forEach((ship, y) => {
        if (!ship.isSunk()) {
          return false;
        }
      });
    });
    return true;
  }
  getSize() {
    return this.size;
  }
}

// 2 loops through all the ships to check if they are sunk or not. If you find a ship that is not sunk, stop the loop and return
