// your Node code here...
function factorial(n) {
  return new Promise(async (resolve, reject) => {
    resolve(n === 1 ? 1 : n * (await factorial(n - 1)));
  });
}
function factorialAsync(n) {}

console.log("start");
factorial(38).then(console.log);
console.log("end");

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
