function sum1() {
  let args = Array.from(arguments);
  return args.reduce((acc, e) => acc + e );
}

function sum2(...args) {
  return args.reduce((acc, e) => acc + e );
}

/*
Function.prototype.myBind = function() {
  let ctx = Array.from(arguments)[0];
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    let callArgs = Array.from(arguments);
    let args = bindArgs.concat(callArgs);
    return that.apply(ctx, args);
  };
};
*/

Function.prototype.myBind = function(ctx, ...bindArgs) {
  let that = this;
  return function(...callArgs) {
    let args = bindArgs.concat(callArgs);
    return that.apply(ctx, args);
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce( (acc, e) => acc + e );
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}


const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  let _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


const sum5 = sum2.curry(4);
console.log(sum5(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  let _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};


const sum20 = sum2.curry(4);
console.log(sum20(5)(30)(20)(1)); // => 56
