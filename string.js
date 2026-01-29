// const str = "Deepanshu";
// console.log(`hello ${str}`);
// console.log("hello", str);
// console.log(typeof str);

const str = "Deepanshu";
console.log(str[0]);
console.log(str.charAt(8));
console.log(str.charCodeAt(0)); // utf-8

//  extracting :
console.log(str.slice(-5, -2));

console.log(str.substring(8, 4));

console.log(str.substring(-2, 4));

//  searching:
// const a = "Attack on titan";

// console.log(a.includes("attack"));

// const mail = "example@gmail.com";

// const isValid = mail.includes("@");

// if (isValid) {
//   console.log("valid");
// } else {
//   console.log("invalid");
// }

//  index of :
// const a = "Attack on titan";
// console.log(a.indexOf("j"));
// console.log(a.lastIndexOf("a"));

// replace :
// console.log(a.replace("o", "f"));

//  split :
// const a = "Attack,on,titan";

// console.log(a.split(",").reverse().join("-"));

// console.log(String.prototype);
// console.log(Object.getOwnPropertyNames(String.prototype));

String.prototype.Deepanshu_Ka_reverse_method = function () {
  return this.split("").reverse().join("");
};
const name = "deepanshu";
console.log(name.Deepanshu_Ka_reverse_method());
console.log(Object.getOwnPropertyNames(String.prototype));
