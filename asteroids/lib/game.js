const Asteroid = require('./asteroid.js');
const Util = require('./utils.js');

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
    if (asteroid.pos[0] > this.DIM_X) {
      asteroid.pos[0] = asteroid.pos[0] - this.DIM_X;
    } else if (asteroid.pos[0] < 0) {
      asteroid.pos[0] = asteroid.pos[0] + asteroid.radius;
      asteroid.vel[0] = -asteroid.vel[0];
    } if (asteroid.pos[1] > this.DIM_Y) {
      asteroid.pos[1] = asteroid.pos[1] - this.DIM_Y;
    } else if (asteroid.pos[1] < 0) {
      asteroid.pos[1] = asteroid.pos[1] + asteroid.radius;
      asteroid.vel[1] = -asteroid.vel[1];
    } else {
      asteroid.move();
    }
  });
};

module.exports = Game;
