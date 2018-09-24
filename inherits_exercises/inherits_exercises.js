// Function.prototype.inherits = function(Parent) {
//   function Surrogate() {}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };


Function.prototype.inherits = function(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject () {
  this.x = 0;
  this.y = 0;
}

MovingObject.prototype.move = function(dx, dy) {
  this.x += dx;
  this.y += dy;
};

function Ship () {
  MovingObject.call(this);
}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

let movingObject = new MovingObject();
let ship = new Ship();

console.log(movingObject);
console.log(ship);
ship.move(42, 17);
console.log(ship);
