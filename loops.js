//  for loop:

const arr = ["a", "b", "c", "d", "e"];
//  increment case:
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i);
// }
//  decrement case:
// for (let j = arr.length - 1; j >= 0; j--) {
//   console.log(arr[j], j);
// }

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
