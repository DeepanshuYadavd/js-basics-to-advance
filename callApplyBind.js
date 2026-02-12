//  call() : lets you control what "this" will be inside a function.

// function greet() {
//   console.log(this);
// }
// const person1 = {
//   name: "deepanshu1",
// };
// const person2 = {
//   name: "deepanshu2",
// };
// greet.call(person1);
// greet.call(person2);

// const user = {
//   name: "deepanshu",
//   anonymousfn: function () {
//     console.log("Anonymous: ", this.name);
//     const arrowfn = () => {
//       console.log("Arrow: ", this.name);
//     };
//     arrowfn();
//   },
// };
// const anotherUser = {
//   name: "sagar",
// };
// user.anonymousfn();
// user.anonymousfn.call(anotherUser);

// apply:

//  bind:
// function greet(age, city) {
//   console.log(this.name, age, city);
// }

// const user = {
//   name: "deepanshu",
// };
// const result = greet.bind(user, 22, "mohali");
// result();

// rest and spread operator

// const array = [1, 2, [3, 4]];
// let arrayCopy = [...array];
// console.log(arrayCopy, "test1");
// console.log(array, "test2");
// arrayCopy.push(5);
// arrayCopy[2][0] = 33;
// console.log(arrayCopy, "test3");
// console.log(array, "test4");

// let arr1 = [1, 2, [5, 6]];
// let arrcopy = structuredClone(arr1);
// arrcopy[2][0] = 55;
// console.log("original", arr1);
// console.log("copy", arrcopy);

//  rest operator
// function test(...numbers) {
//   console.log(numbers);
// }

// test(1, 2, 3, 4, 5);

function sum(first, second, ...numbers) {
  console.log(first);
  console.log(second);
  console.log(numbers);
  return numbers.reduce((acc, cur) => acc + cur);
}

console.log(sum(1, 2, 3, 4, 5, 6));
