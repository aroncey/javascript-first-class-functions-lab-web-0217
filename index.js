
function countdown(callback) {
  setTimeout(function ()  { callback() }, 2000);
}

// function countdown(countdown) {
//   return window.setTimeout(countdown, 2000);
//
// }

function createMultiplier(multiplyValue) {
  return function multiply(num) {
    return num * multiplyValue;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function createMultiplierBonus() {

}

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);


//  --- SOLUTION ----
// function countdown(callback) {
//   setTimeout(function () {
//     callback();
//   }, 2000);
// }
//
// function createMultiplier(multiplyValue) {
//   return function (value) {
//     return multiplyValue * value;
//   };
// }
//
// function multiplier(a, b) {
//   return a * b;
// }
//
// var doubler = createMultiplier(2);
// var tripler = createMultiplier(3);
// var doublerWithBind = multiplier.bind(null, 2);
// var triplerWithBind = multiplier.bind(null, 3);
