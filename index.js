function factorial(n) {
  return new Promise((resolve, reject) => {
    var val = 1;
    while (n > 1) {
      val *= n;
      n = n - 1;
    }
    resolve(val);
  });
}

console.log("start");
factorial(6).then(console.log);
console.log("end");

// async function factorial2(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   }
//   return n * (await factorial2(n - 1));
// }

// console.log("start");
// factorial2(6).then(console.log);
// console.log("end");

// Observations:
// When we calculate factorial for large number then in that case the memory is consumed a lot .
// Along with this the result obtained will be a very large number which cannot be hold by any data type so its result will be infinity.
// For eg : factorial(200) results to Infinity
// Also `Maximum call stack size exceeded` was seen when the number is very large
