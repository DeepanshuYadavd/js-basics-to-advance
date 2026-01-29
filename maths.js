// console.log(typeof Math);

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.round(4.9));
// console.log(Math.floor(4.8));
// console.log(Math.ceil(4.01));
// console.log(Math.trunc(-124.566));
// console.log(Math.trunc(1322.3546));
// console.log(Math.abs(-10));
// console.log(Math.pow(4, 3));
// console.log(Math.sqrt(16));
// console.log(Math.min(-5, 2, 35, 6));
// console.log(Math.max(234, 345, 2354));

// console.log(Math.sign(-4567));
// console.log(Math.sign(0));
// console.log(Math.sign(783256));

// console.log(Math.random());
Number.prototype.isBetween = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomNumber = (0).isBetween(20, 30);
console.log(randomNumber);
//  precendence:
// ()
//  **
//  * / %
//  +,-




