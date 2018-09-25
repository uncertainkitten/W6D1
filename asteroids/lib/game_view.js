let Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  that = this;
  setInterval(function() {
    that.game.draw(that.ctx);
    that.game.moveObjects();
  }, 20);
};

module.exports = GameView;
