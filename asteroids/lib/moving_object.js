function MovingObject (hash) {
  this.pos = hash.pos;
  this.vel = hash.vel;
  this.radius = hash.radius;
  this.color = hash.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = `${this.color}`;
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
};



module.exports = MovingObject;
