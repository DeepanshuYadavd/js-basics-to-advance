//  falsy :
// false, 0 , -0, "", null , undefined, NaN

// truthy
// true , 1, -1, " ", "0", "false", [], {}, function(){}

// if (" ") {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }
// if ("") {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// if ([]) {
//   console.log("truthy");
// } else {
//   console.log("falsy");
// }

// console.log([] == false);

let age = 17;
if (age >= 18) {
  console.log("proceed");
} else {
  console.log("chota bacha");
}

let day = 89;
switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("ye konsa day hai ");
}

//  ternary oparator :

const isadult = 17;

isadult >= 18 ? console.log("yes") : console.log("Nyana");
