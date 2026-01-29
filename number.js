// let a = 10;
// let b = -10;
// let c = 15.243346;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(a);

// console.log(a / 0);
// console.log(-a / 0);
// console.log("10" * 5);
// console.log(typeof NaN);

// console.log("5" - 5);

//  constructor:
// console.log(Number("56a"));
// console.log(Number.isNaN(10));
// console.log(Number.isInteger(10));

// console.log(0.1 + 0.2 === 0.3);
// const a = 0.1 + 0.2;
// console.log(a.toFixed(1) == 0.3);
// console.log(typeof a.toFixed(1));

// epsilon:
// console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);
// const a = 0.1 + 0.2;

// console.log(Number.EPSILON);
// console.log(Math.abs(a - 0.3));

//  methods :
// console.log(Number.isFinite("10"));
// console.log(Number.isFinite(Number("10")));
// console.log(Number.isFinite(Infinity));
// console.log(isFinite("10"));

// console.log(Number.parseInt("dfghj10dfj57hj"));

// console.log(Object.getOwnPropertyNames(Number.prototype));
// Number.prototype.deepanshu_ka_even_checker = (num) => {
//   return num % 2 === 0;
// };

// const num = 5;
// console.log(num.deepanshu_ka_even_checker(num));
// console.log(Object.getOwnPropertyNames(Number.prototype));

Number.prototype.isEven = function () {
  return this % 2 === 0;
};
const d = 67;
console.log(d.isEven());
