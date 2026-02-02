//  for loop:

// const arr = ["a", "b", "c", "d", "e"];
//  increment case:
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i);
// }
//  decrement case:
// for (let j = arr.length - 1; j >= 0; j--) {
//   console.log(arr[j], j);
// }

//  skip
// for (i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// for (i = 1; i <= 20; i++) {
//   if (i === 16) break;
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

//  while loop
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let pin = 1234;
// let enteredPin = 2345;
// while (pin !== enteredPin) {
//   console.log("re Entered Pin");
//   break;
// }

//  do while :
// let x = 10;
// do {
//   console.log(x, "run");
//   x--;
// } while (x > 5);

//  for of :
// const arr = ["a", "b", "c", "d", "e"];
// for (let alpha of arr) {
//   console.log(alpha);
// }

//  sort
// const arr = [3, 5, 20, 21, 10];
// console.log(arr.sort());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));
// console.log(arr.reverse());
// console.log(arr);

// const arr2 = [11, 2, 3, 4, 5];
// Array.prototype.customSum = function (callback) {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += callback(this[i], i, this);
//   }
//   return sum;
// };
// const total = arr2.customSum((value) => value);
// console.log(total);

// const arr = [12, 13, 14, 6, 8];

// Array.prototype.sum = function () {
//   let sum = 0;
//   for (let v of this) {
//     sum += v;
//   }
//   return sum;
// };
// console.log(arr.sum());

//  for each loop:
// let arr = ["a", "b", "c"];

// const test = arr.forEach((item, index, whole_array) => {
//   console.log(item, index, whole_array);
//   return;
// });

// console.log(test);

// const arr = [1, 2, 3, 4, 5, 6];

// const test = arr.forEach((item) => {
//   console.log(item * 2);
//   return item * 2;
// });

// console.log(test);

// const result = arr.map((item) => {
//   return item * 2;
// });

// console.log(result);

// let prices = [100, 200, 300];
// //  return new array with 18 % gst
// const gstPrice = prices.map((price) => price + price * 0.18);
// console.log(gstPrice);

//  filter :
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = arr.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(even);
// const values = [0, "false", "", false, true, 1, "hello"];
// const result = values.filter((item) => Boolean(item));
// console.log(result);

//  reduce:
// const arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, item) => {
//   return (acc += item);
// }, 10);

// console.log(sum);

const arr = [1, 22, 3, 4, 5, 6];
const result = arr.find((item) => {
  return item % 2 === 0;
});

console.log(result);
