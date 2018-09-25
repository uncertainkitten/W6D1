// ,
// "webpack": "webpack",
// "webpack-dev": "webpack --mode=development",
// "watch": "watch --mode=development"

console.log("Webpack is working :O!!!1111");

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

window.MovingObject = MovingObject;
// window.Asteroid = Asteroid;

const mo = new MovingObject(
  { pos: [80, 80], vel: [10, 10], radius: 20, color: "#00FF00" }
);
const aster = new Asteroid( {pos: [30, 30]});
const game = new Game();
const gameView = new GameView();

console.log(aster);
console.log(mo);
console.log(game);
console.log(gameView);

// document.addEventListener("DOMContentLoaded", function(){
gameView.start();

// });
// game.moveObjects();
//
// aster.move();
// mo.move();
