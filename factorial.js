const factorial= (num)=> {
    // If the number is less than 0, reject it.
    if (num < 0)
          return -1;

    // If the number is 0, its factorial is 1.
    else if (num == 0)
        return 1;

    // Otherwise, call the recursive procedure again
      else {
          return (num * factorial(num - 1));
      }
    }

const factorialAsync = (num) => {
  return new Promise((resolve, reject) => {
    resolve(factorial(num));
  });
};
// your Node code here...
console.log("start");
factorialAsync(38990).then(console.log);
console.log("end");

// Test your code in Node.JS CLI, Output:
// start
// end
// 6


//When calculating factorial for large number , there is an error "Maximum call stack size exceeded".

