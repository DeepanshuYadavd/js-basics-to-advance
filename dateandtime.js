const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

let monthname = date.toLocaleString("en-IN", {
  month: "long",
});

console.log(monthname);
