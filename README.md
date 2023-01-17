# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 

    - `setImmediate` is used to schedule a function to be executed after all currently pending I/O operations have completed, while `setTimeout` schedules a function to be executed after a certain amount of time has passed. In situations where we need to execute a function as soon as possible, and not be delayed, setImmediate is a better choice.

2. Explain the difference between `process.nextTick` and `setImmediate`?

    - `process.nextTick` puts a function call in the next tick queue which has the highest priority while `setImmediate` puts the function call in the event queue which has a priority lower than the next tick queue.

3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

    - **Core Modules**: fs, http, stream, util, child_process, url, path, events, querystring, crypto
    - **Global objects**: setTimeout, setInterval, process, Buffer, global, console, Promise, clearTimeout, clearInterval, module, require

## Exercise 02
Write a function in Node `factorial(n)` to find asynchronously the factorial of a number. Write your observation (CPU, RAM.. etc) on what happens in `Node Process` when we calculate the factorial of a large number.  
* factorial(3) is 3 * factorial(2)
* factorial(2) is 2 * factorial(1)
* factorial(1) is 1 * factorial(0)
* factorial(0) is 1

```javascript
// your Node code here...
async function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * await factorial(n-1);
}

console.log('start');
factorial(3).then(console.log); 
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
```
  
For large number inputs I saw this error - `Maximum call stack size exceeded`
