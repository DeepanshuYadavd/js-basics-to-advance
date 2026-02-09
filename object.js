// const obj = {
//   "first name": "deepanshu",
//   1: "one",
//   true: "turu",
// };

// //  access:
// // 1. dot operator
// // 2. bracket
// // console.log(obj["name"]);
// console.log(obj["first name"]);

//  add:
const obj = {
  user: "deepanshu",
};
//  when key is static
obj.age = 50;
//  when key is dynamic
const key = "email";
obj[key] = "deep@gmail.com";
console.log(obj);

//  update :
obj.age = 30;
if ("age" in obj) {
  obj.age = 90;
}
console.log(obj);

// delete:
// delete obj.age;
// console.log(obj);

//  freeze
Object.freeze(obj);
obj.age = 100;
obj.city = "yeah";
delete obj.age;
console.log(obj);

//  freeze (work shallow):
// const obj1 = {
//   user: {
//     name: "deep",
//     age: 7,
//   },
// };
// Object.freeze(obj1);
// obj1.user.name = "anshu";
// console.log(obj1);

//  methods:
console.log(Object.keys(obj).includes("age"));
console.log(Object.values(obj));
console.log(Object.entries(obj));
