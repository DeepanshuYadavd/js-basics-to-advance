//  callbacks:
// function greet(name) {
//   console.log("hello", name);
//   return 1;
// }
// function printResult(callback) {
//   console.log(callback("Deepanshu"), "test");
// }
// printResult(greet);

//  parent function:(higher order function)
// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// // callback 1
// function add(x, y) {
//   return x + y;
// }
// // callback 2
// function mul(x, y) {
//   return x * y;
// }
// console.log(calculate(10, 67, add));

// function multiply(factor) {
//   return function (num) {
//     return num * factor;
//   };
// }
// const triple = multiply(5);
// const result = triple(6);
// console.log(result);
function outer() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  return increment;
}
const result = outer();
console.log(result());
