// const getUserData = new Promise((resolve, reject) => {
//   console.log("start promise");

//   setTimeout(() => {
//     const serverUp = true;
//     if (serverUp) {
//       resolve("got the data");
//     } else {
//       reject("server is not responding");
//     }
//   }, 3000);
// });
// console.log(getUserData);
// //  traditional:
// getUserData
//   .then((res) => console.log(res, "then"))
//   .catch((err) => console.log(err, "catch"));

// const getuser = async () => {
//   try {
//     const result = await getUserData;
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getuser();

// async function getCars() {
//   try {
//     const res = await fetch("https://myfakeapi.com/api/cars/");
//     const data = await res.json();
//     console.log(data, "test");
//   } catch (e) {
//     console.log(e.message);
//   }
// }
// getCars();



