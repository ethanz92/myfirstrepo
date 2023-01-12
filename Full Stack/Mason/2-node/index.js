// const moduleA = { export: {} };

// (function (module) {
// module pattern
// const message = 'secret message'; //private variable
let counter = 0;

function increment() {
  counter++;
}

function getCurrentCount() {
  return counter;
}

module.exports = {
  increment,
  getCurrentCount,
};

//can also export like this but not recommended:
// exports.increment = increment;
// exports.getCurrentCount = getCurrentCount;

// })(moduleA);
// // commonjs
// // IIFE
// // message;

// moduleA.export.increment();
// console.log(moduleA.export.getCurrentCount());
// moduleA.export.increment();
// console.log(moduleA.export.getCurrentCount());
// moduleA.export.increment();
// console.log(moduleA.export.getCurrentCount());
