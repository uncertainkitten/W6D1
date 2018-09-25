let Game = require('./game.js');

function GameView() {
  this.game = new Game();
}

GameView.prototype.canvas = function() {
  that = this;
  document.addEventListener("DOMContentLoaded", function() {
    const canv = document.getElementById("game-canvas");
    that.ctx = canv.getContext("2d");
  });
};

GameView.prototype.start = function() {
  that = this;
  setInterval(function() {
    that.game.draw(that.ctx);
    that.game.moveObjects();
  }, 20);
};

module.exports = GameView;
