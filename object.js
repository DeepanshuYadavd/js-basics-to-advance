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
// const obj = {
//   user: "deepanshu",
// };
//  when key is static
// obj.age = 50;
// //  when key is dynamic
// const key = "email";
// obj[key] = "deep@gmail.com";
// console.log(obj);

//  update :
// obj.age = 30;
// if ("age" in obj) {
//   obj.age = 90;
// }
// console.log(obj);

// delete:
// delete obj.age;
// console.log(obj);

//  freeze
// Object.freeze(obj);
// obj.age = 100;
// obj.city = "yeah";
// delete obj.age;
// console.log(obj);

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
// console.log(Object.keys(obj).includes("age"));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//  destructuring:
// const user = {
//   name: "deep",
//   age: 22,
//   city: "mohali",
// };
// console.log(user);

// const { name, age } = user;

// console.log(name, age);

//  rename while destructuring:
// const { name: username, age: umer } = user;
// console.log(username);

//  nested object destructuring:
// const user = {
//   name: "deep",
//   address: {
//     city: "mohali",
//     pin: 160017,
//   },
// };
// const { name, address } = user;
// console.log(name);
// const { city, pin } = address;
// console.log(city);
// console.log(pin);

// const major = {
//   name: "abcd",
//   greet: () => {
//     console.log("greet");
//   },
// };

// major.greet();

// const obj = {
//   a: 10,
//   b: {
//     a: 20,
//   },
// };
// const x = obj.b;
// x.a = 30;
// console.log(obj.b.a);

// const obj = {
//   a: 1,
// };

// Object.seal(obj);

// obj.a = 10;
// delete obj.a;
// console.log(obj);

// const obj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
// };

// Object.freeze(obj);

// obj.b.c = 10;
// console.log(obj.b.c);

//  functions inside objects called methods:
const obj = {
  name: "deep",
  regular() {
    console.log("this is regular function");
  },
  anonymous: function () {
    console.log("this is anonymous");
  },
  arrowfn: () => {
    console.log("this is arrow function");
  },
};
obj.regular();
obj.anonymous();
obj.arrowfn();

const test = () => {
  console.log("this is test");
};

const testObj = {
  test: test,
};

test(); //function
testObj.test(); // methods
