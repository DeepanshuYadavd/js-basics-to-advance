// const user1 = {
//   name: "deep",
//   age: 22,
//   login() {
//     console.log("user1 logged in");
//   },
// };

// const user2 = {
//   name: "deep2",
//   age: 23,
//   login() {
//     console.log("user2 logged in");
//   },
// };

// function user(name, age) {
//   ((this.name = name), (this.age = age));
//   //   this.login = function () {
//   //     console.log(`${this.name} logged in`);
//   //   };
// }
// user.prototype.login = function () {
//   console.log(`${this.name} logged in`);
// };
// const u1 = new user("deep1", 22);
// const u2 = new user("deep2", 23);
// u1.login();
// u2.login();
// console.log(u1.login === u2.login);

//  que practise:
// function user(name) {
//   this.name = name;
// }
// const ul = user("deep");
// console.log(ul);
// console.log(name);

function person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
  return {
    name: "Harman",
  };
}
const p1 = new person("deep", 24);
console.log(p1);
