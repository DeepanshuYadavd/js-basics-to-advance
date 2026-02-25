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

// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
//   return {
//     name: "Harman",
//   };
// }
// const p1 = new person("deep", 24);
// console.log(p1);

//  classes:
// class student {
//   //   constructor(name, age) {
//   //     this.name = name;
//   //     this.age = age;
//   //   }
//   constructor() {}
//   internally() {
//     console.log(this);
//   }
// }
// const s1 = new student("deep", 22);
// console.log(typeof student);
// s1.internally();

//  inheritance:
// class user {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   login() {
//     console.log(`${this.name} logged in`);
//   }
// }
// class admin extends user {
//   constructor(name, email, role) {
//     super(name, email);
//     this.role = role;
//   }
//   test() {
//     console.log(this);
//   }
// }
// const admin1 = new admin("rest1", "rest@gmail.com", "admin");
// console.log(admin1);
// admin1.test();

// class employee {
//   constructor(name, salary) {
//     ((this.name = name), (this.salary = salary));
//   }
//   getDetails() {
//     return `${this.name} earns rs. ${this.salary}`;
//   }
// }

// class manager extends employee {
//   constructor(name, salary, teamsize) {
//     super(name, salary);
//     this.teamsize = teamsize;
//   }
//   getDetails() {
//     console.log(super.getDetails());
//     return `${this.name} earns rs. ${this.salary} and manage ${this.teamsize} man power`;
//   }
// }

// const e1 = new manager("test", "1", "10");
// console.log(e1);
// console.log(e1.getDetails());

// class RoyalEnfield {
//   constructor(id, bikeName) {
//     this.id = id;
//     this.bikeName = bikeName;
//   }

//   bikeReady() {
//     return `${this.bikeName} (ID: ${this.id}) is ready to go!`;
//   }
// }

// class Classic350 extends RoyalEnfield {
//   constructor(id, bikeName, cc) {
//     super(id, bikeName);
//     this.cc = cc;
//   }

//   bikeReady() {
//     console.log(super.bikeReady());

//     console.log(this);
//     return `${this.bikeName} (ID: ${this.id}, ${this.cc}cc) is ready to cruise!`;
//   }
// }

// class ContinentalGT extends RoyalEnfield {
//   constructor(id, bikeName, cc) {
//     super(id, bikeName);
//     this.cc = cc;
//   }

//   bikeReady() {
//     console.log(super.bikeReady());
//     console.log(this);
//     return `${this.bikeName} (ID: ${this.id}, ${this.cc}cc) is ready to race!`;
//   }
// }

// const bike1 = new Classic350(102, "Classic 350", 350);
// const bike2 = new ContinentalGT(103, "Continental GT 650", 650);

// console.log("-----Classic 350----");
// console.log(bike1.bikeReady());
// console.log("-----Continental GT----");
// console.log(bike2.bikeReady());

// multi level inheritance:
//  grandparent:
// class vehicle {
//   constructor(type) {
//     this.type = type;
//   }
//   start() {
//     console.log("vehicle started");
//   }
// }
// // parent:
// class RoyalEnfield extends vehicle {
//   constructor(type, brand) {
//     super(type);
//     this.brand = brand;
//   }
//   readyToGo() {
//     console.log("royal enfield is ready to go");
//   }
// }
// //  child:
// class meteor650 extends RoyalEnfield {
//   constructor(type, brand, cc) {
//     super(type, brand);
//     this.cc = cc;
//   }
//   readyToGo() {
//     super.readyToGo();
//     console.log("meteor is ready to go");
//   }
// }
// const meteor = new meteor650("bike", "RE", 650);
// meteor.start();
// meteor.readyToGo();

//  hierarchy inheri...
// class user {
//   constructor(name) {
//     this.name = name;
//   }
//   login() {
//     console.log(`${this.name} logged in`);
//   }
// }
// //  child 1
// class admin extends user {
//   deleteUser() {
//     console.log(`${this.name} deleted a user`);
//   }
// }
// //  child 2
// class customer extends user {
//   buyProduct() {
//     console.log(`${this.name} buy a product`);
//   }
// }
// const a = new admin("deep");
// const c = new customer("dhanjal");
// a.login();
// c.login();
// a.deleteUser();
// c.buyProduct();

//  mixin:
// class animal {
//   eat() {
//     console.log("eating");
//   }
// }
// //  mixin:
// const canrun = (base) =>
//   class extends base {
//     run() {
//       console.log("running");
//     }
//   };
// class dog extends canrun(animal) {}
// const d = new dog();
// d.eat();
// d.run();

//  problem : multiple inheritance (diamond problem)
// class person {
//   constructor(name) {
//     this.name = name;
//   }
//   breathe() {
//     console.log(`${this.name} is breathing`);
//   }
// }

// //  first mixin:
// const canrun = (base) =>
//   class extends base {
//     swim() {
//       console.log(`${this.name} is swimming of can run`);
//     }
//   };

//  second mixin:
// const canswim = (base) =>
//   class extends base {
//     swim() {
//       console.log(`${this.name} is swimming of can swim`);
//     }
//   };
// class athelete extends canrun(canswim(person)) {
//   train() {
//     console.log(`${this.name} is training`);
//   }
// }
// const a = new athelete("Deepanshu");
// a.train();
// a.swim();
// a.breathe();

//  polymorphism:

// class shape {
//   draw() {
//     console.log("drawing shape");
//   }
// }
// class circle extends shape {
//   draw() {
//     console.log("drawing circle");
//   }
// }
// class square extends shape {
//   draw() {
//     console.log("drawing square");
//   }
// }
// const shapes = [new circle(), new square()];
// shapes.forEach((obj) => {
//   obj.draw();
// });

//  encapsulation:
// class counter {
//   #count; //private
//   constructor(start = 1) {
//     this.#count = start;
//   }
//   increment() {
//     this.#count++;
//   }
//   getcount() {
//     console.log(this.#count, this);
//   }
//   obj() {
//     return this;
//   }
// }
// const c = new counter(7);
// c.increment();
// c.getcount();
// console.log(c.#count);

class bankAccount {
  #balance; //private
  constructor(accountholder, initialbalance) {
    this.accountholder = accountholder;
    this.#balance = initialbalance;
  }
  #isValidAmount(amount) {
    return amount > 0;
  }
  getbalance() {
    return this.#balance;
  }
  deposite(amount) {
    if (this.#isValidAmount(amount)) {
      this.#balance += amount;
      console.log("amount deposited");
    } else {
      console.log("invalid deposite");
    }
  }

  withdraw(amount) {
    if (this.#isValidAmount(amount) && amount <= this.#balance) {
      this.#balance -= amount;
      console.log("amount withdrawel");
    } else {
      console.log("insuficiant balance");
    }
  }
}

const p1 = new bankAccount("harman", 1000);
console.log(p1.getbalance());
p1.deposite(-1000);
console.log(p1.getbalance());
p1.withdraw(500);
console.log(p1.getbalance());
const p2 = new bankAccount("harshita", 10000);
console.log(p2.getbalance());
p2.withdraw();
console.log(p2.getbalance());
console.log(p1.getbalance());
