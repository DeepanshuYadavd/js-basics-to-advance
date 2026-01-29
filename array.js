// const arr = ["1", 2, null, undefined, { name: "deepanshu" }, ["a"]];

// console.log(arr);

//  second way to create array:
//  in constructor, if we pass single parameter that is number then it defines the length of an empty array
// const b = new Array(4, 5);
// console.log(b);

//  third way to create array:
// const c = Array.of(1);
// console.log(c);

//  methods:
// 1. push and pop (both work at end of an array)

// const cart = ["shirts", "watches"];
// console.log(cart);
// const l = cart.push("shoes");
// console.log(cart);
// console.log(l);
// const removed = cart.pop();
// console.log(cart);
// console.log(removed);

//  2. shift and unshift (at the begining operation of an array

// const cars = ["hummer", "porche", "g wagon"];
// const removed2 = cars.shift();
// console.log(cars);
// console.log(removed2);

// const l2 = cars.unshift("hummer");
// console.log(l2);
// console.log(cars);

//  slice :
// const arr = ["a", "b", "c", "d", "e"];
// const sliced = arr.slice(2);
// console.log(sliced);
// console.log(arr);

// sliced.unshift("z");
// console.log(sliced);
// console.log(arr);

// const arr = [{ name1: "deepanshu" }, { name2: "Sagar" }, { name2: "Sagar2" }];
// const sliced = arr.slice(1);
// console.log(sliced);
// console.log(arr);
// sliced.unshift({ name: "chusham" });

// console.log(sliced);
// console.log(arr);

// array from :
// let str = "Deepanshu";
// let arr1 = Array.from(str);
// console.log(arr1);

// splice :
// remove
const cars = ["hummer", "porche", "g wagon", "bentley"];

// let removed = cars.splice(2, 0);
// console.log(removed);
// console.log(cars);

//  add:
// let removed = cars.splice(1, 0, "endavour", "bmw");
// console.log(removed);
// console.log(cars);

//  replace :
// let removed = cars.splice(1, 2, "endavour", "bmw");
// console.log(removed);
// console.log(cars);

//  que:
const arr = [1, 2, 3, 4, 5, 6];

// result : [1, "two", "three", 4,5, "six"]
//  using : push, pop, splice
