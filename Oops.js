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

class RoyalEnfield {
  constructor(id, bikeName) {
    this.id = id;
    this.bikeName = bikeName;
  }

  bikeReady() {
    return `${this.bikeName} (ID: ${this.id}) is ready to go!`;
  }
}

class Classic350 extends RoyalEnfield {
  constructor(id, bikeName, cc) {
    super(id, bikeName);
    this.cc = cc;
  }

  bikeReady() {
    console.log(super.bikeReady());

    console.log(this);
    return `${this.bikeName} (ID: ${this.id}, ${this.cc}cc) is ready to cruise!`;
  }
}

class ContinentalGT extends RoyalEnfield {
  constructor(id, bikeName, cc) {
    super(id, bikeName);
    this.cc = cc;
  }

  bikeReady() {
    console.log(super.bikeReady());
    console.log(this);
    return `${this.bikeName} (ID: ${this.id}, ${this.cc}cc) is ready to race!`;
  }
}

const bike1 = new Classic350(102, "Classic 350", 350);
const bike2 = new ContinentalGT(103, "Continental GT 650", 650);

console.log("-----Classic 350----");
console.log(bike1.bikeReady());
console.log("-----Continental GT----");
console.log(bike2.bikeReady());
