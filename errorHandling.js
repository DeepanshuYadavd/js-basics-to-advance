// const n = 10;
// console.log(n.toUpperCase());

// try {
//   const n = 10;
//   console.log(n.toUpperCase());
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("always run");
// }

function checkage(age) {
  if (age < 18) {
    throw new Error("underage");
  }
  return "allowed";
}

try {
  console.log(checkage(19));
} catch (error) {
  console.log(error.message, "test");
}



