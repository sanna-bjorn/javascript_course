class Player {
  constructor() {
    this.shots = [];
  }

  attack(gameboard) {
    let x;
    let y;

    const boardSize = gameboard.getSize();

    while (true) {
      x = this.getRandomInt(boardSize);
      y = this.getRandomInt(boardSize);

      if (this.isValidMove(x, y)) {
        break;
      }
    }

    gameboard.receiveAttack(x, y);
    this.shots.push([x, y]);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  isValidMove(x, y) {
    for (let i = 0; i < this.shots.length; i++) {
      if (this.shots[i][0] == x && this.shots[i][1] == y) {
        return false;
      }
    }
    return true;
  }
}
