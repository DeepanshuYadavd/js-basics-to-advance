// console.log("start");

// setTimeout(() => {
//   console.log("running");
// }, 3000);

// console.log("end");

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
