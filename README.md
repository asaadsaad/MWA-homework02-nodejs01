# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
- we can use setImmediate if we want an asynchronous code to be executed as soon as possible in the next node event loop iteration and setImmediate can not be blocked by other code executing in the node event loop unlike setTimeout. SetTimeout will make an asynchronous code executed after some specfide delay. If we want an asynchronous code to be excuted as soon as possible its preferable to use setImmediate. 

2. Explain the difference between `process.nextTick` and `setImmediate`?
 - Both process.nextTick and setImmediate are used to schedule a task to be executed later in time. But, they work a slightly different way, if we use process.nextTick to schdule a task the task will be executed as soon as possible even before all the I/O events are processed thus the task will have the highest prority. If we use setImmediate to schedule a task it will be executed as soon as possible but after all the I/O events are finished processing. Therfore, if we want a task to be run before all the I/O operations are processed we can use process.nextTick

3. Name 10 core modules that Node provides by default, and 10 of the Global objects?
- Core modules that Node provides by default:

    http - for creating HTTP servers and clients
    https - for creating HTTPS servers and clients
    fs - for interacting with the file system
    path - for working with file and directory paths
    os - for interacting with the operating system
    crypto - for cryptographic functionality
    util - for utility functions
    events - for event-based programming
    stream - for working with streams of data
    zlib - for compressing and decompressing data

- Global objects:

    process - provides information about the current process
    console - provides a way to output information to the console
    Buffer - for working with binary data
    setImmediate - for scheduling a function to be executed on the next iteration of the event loop
    setTimeout - for scheduling a function to be executed after a specified delay
    clearTimeout - for canceling a scheduled timeout
    setInterval - for scheduling a function to be executed repeatedly with a specified delay
    clearInterval - for canceling a scheduled interval
    require - for loading modules
    module - for representing the current module

## Exercise 02
Write a function in Node `factorial(n)` to find asynchronously the factorial of a number. Write your observation (CPU, RAM.. etc) on what happens in `Node Process` when we calculate the factorial of a large number.  
* factorial(3) is 3 * factorial(2)
* factorial(2) is 2 * factorial(1)
* factorial(1) is 1 * factorial(0)
* factorial(0) is 1

```javascript
// your Node code here...
async function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  return result;
}
console.log("start");
factorial(3).then(console.log);
console.log("end");

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
```
  
