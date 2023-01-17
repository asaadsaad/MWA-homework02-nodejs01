// using async await
// async function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return  n * await factorial(n - 1);
// }

// using Promise
function factorial(n) {
    return new Promise((resolve, reject)=> {
        if (n === 0 || n === 1) resolve(1);
        else {
            factorial(n-1).then((result) => {
                resolve(n * result);
            });
        }
    })
  }


console.log("start");
factorial(3).then(console.log);
console.log("end");

//With large value error "Maximum call stack size exceeded" is shown in the console