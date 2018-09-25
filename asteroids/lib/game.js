const Asteroid = require('./asteroid.js');

function Game()  {
  this.DIM_X = 1000;
  this.DIM_Y = 600;
  this.NUM_ASTEROIDS = 10;
  this.addAsteroids();
}

Game.prototype.randomPosition = function() {
  const x_min = Math.ceil(0);
  const x_max = Math.floor(this.DIM_X);
  const x_pos = Math.floor(Math.random() * (x_max - x_min)) + x_min;
  const y_min = Math.ceil(0);
  const y_max = Math.floor(this.DIM_Y);
  const y_pos = Math.floor(Math.random() * (y_max - y_min)) + y_min;
  return [x_pos, y_pos];
};

Game.prototype.addAsteroids = function() {
  this.asteroids = [];
  for (let i = this.NUM_ASTEROIDS; i > 0; i--) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
  }
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((asteroid) => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach((asteroid) => {
    asteroid.move();
  });
};

module.exports = Game;
