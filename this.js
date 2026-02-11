//  this refer to an object
//  node run snipet : global object, {}
//  browser : window
//  if "this" is define inside a function then call site with decide where we have to refer

// for normal function and anonymous function's this can be define as call site.
//  arrow function's this can be define as parent scope

// const arr=[]
// const objj1={}

// const obj = {
//   name: "deep",
//   regular() {
//     console.log(this);
//   },
//   anonymous: function () {
//     console.log(this);
//   },
//   arrowfn: () => {
//     console.log(this);
//   },
// };
// obj.regular();
// obj.anonymous();
// obj.arrowfn();

// function test() {
//   console.log(this);
// }

// test();

// const test = () => {
//   console.log(this);
// };

// test();

// const playing = {
//   name: "deep",
//   greet: function () {
//     const football = () => {
//       console.log(this.name);
//     };
//     football();
//   },
// };

// playing.greet();

//  call()

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

const user = {
  name: "deepanshu",
  anonymousfn: function () {
    console.log("Anonymous: ", this.name);
    const arrowfn = () => {
      console.log("Arrow: ", this.name);
    };
    arrowfn();
  },
};
const anotherUser = {
  name: "sagar",
};
user.anonymousfn();
user.anonymousfn.call(anotherUser);
