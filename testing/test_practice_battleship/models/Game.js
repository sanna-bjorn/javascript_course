import Gameboard from './Gameboard.js';
import Player from './Player.js';
import Ship from './Ship.js';

class Game {
  constructor() {
    this.board = new Gameboard(10);
    this.board.placeShip(1, 3, new Ship(1));

    this.players = [];
    this.players.push(new Player());
    this.players.push(new Player());
  }

  play() {
    while (true) {
      for (var i = 0; i < this.players.length; i++) {
        const player = this.players[i];
        player.attack(this.board);
        if (this.board.isAllSunk()) {
          console.log(`Player ${i} won`);
          return;
        }
      }
    }
  }
}

export default Game;
