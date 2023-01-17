# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
If function needs to be executed right after the some function then we use setImmediate instead of setTimeout since setTimeout schedule the function to run after some specific time on the other hand, setImmediate will schedule the function to run at the event loop after all I/O event's callback completes.
 

2. Explain the difference between `process.nextTick` and `setImmediate`?
setImmediate is the part of event loop whereas process.nextTick is not part of event loop.
Callback function added by process.nextTick has high priority and runs before any callback schedule by setImmediate in the event loop. after all I/o events callbacks.


3. Name 10 core modules that Node provides by default, and 10 of the Global objects?
10 core modules that Node provides: assert, buffer, events, fs, https, path, querystring, stream, url, v8
10 of the Global objects: console, process, __filename , setTimeout(cb, ms), clearTimeout(t), setInterval(cb, ms), setImmediate(), queueMicrotask(), require, exports, module

## Exercise 02
Write a function in Node `factorial(n)` to find asynchronously the factorial of a number. Write your observation (CPU, RAM.. etc) on what happens in `Node Process` when we calculate the factorial of a large number.  
* factorial(3) is 3 * factorial(2)
* factorial(2) is 2 * factorial(1)
* factorial(1) is 1 * factorial(0)
* factorial(0) is 1

```javascript
// your Node code here...
console.log('start');
factorial(3).then(console.log); 
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
```
  // Answer in exercise2.js file
