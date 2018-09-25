const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

function Asteroid(hash) {
  hash.color = "#cccccc";
  hash.radius = 25;
  hash.vel = Util.randomVec(10);
  MovingObject.call(this, hash);
}

Util.inherits(MovingObject, Asteroid);

module.exports = Asteroid;
