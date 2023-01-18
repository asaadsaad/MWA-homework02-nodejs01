// your Node code here...

async function factorial(n) {
    total = 1;
    return new Promise((resolve,reject)=> {
        
        while(n > 1) {
            total *= n;
            n--;
        }

        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`script used ${used} MB.`);
        resolve(total);
    });
}

async function factorial2(n) {
    if(n ==1 || n == 0) {
        return n; 
    }

    return n * await factorial2(n-1);
}

console.log('start');
factorial2(9000000000).then(console.log); 
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 6

// For larger values of n, the result obtained was infinity. 
// For even greater number of n > 100000000, the maximum call stack size seems to have exceeded.