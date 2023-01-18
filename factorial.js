// your Node code here...
function factorial(n) {
  return new Promise((resolve, reject) => {
    resolve(n === 1 ? 1 : n * factorial(n - 1));
  }).then(res => res.json());
  //   if (n === 1) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);
}

console.log("start");
factorial(3).then(console.log);
console.log("end");

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
