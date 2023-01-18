# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

Answer


1. -	The reason we want to use setImmediate() over setTimeout() is setImmediate() will always be executed before any timers if scheduled within an I/O cycle, independently of how many timers are present. it is placed in the check queue doesn't use queue of functions 

2. - SetImmediate adds callbacks to the event queue that are executed during the check phase, whereas process.nextTick executes callbacks immediately after the current phase.

3. -	Core modules are assert, http, url, util, path, crypto, dgram, dns, events and fs
-	Node global object are __dirname, __filename, console, process, buffer, setImmediate, setInterval, setTimeout, clearImmediate, clearInterval, clearTimeout(timeoutObject)


## Exercise 02
Write a function in Node `factorial(n)` to find asynchronously the factorial of a number. Write your observation (CPU, RAM.. etc) on what happens in `Node Process` when we calculate the factorial of a large number.  
* factorial(3) is 3 * factorial(2)
* factorial(2) is 2 * factorial(1)
* factorial(1) is 1 * factorial(0)
* factorial(0) is 1

```javascript
// your Node code here...
console.log('start');
async function factorial(n) {
    let factorial=1
    for (let i = n; i > 1; i--) {
          factorial *= i;}
    return factorial
}
factorial(3).then(console.log); 
console.log('end');


// Test your code in Node.JS CLI, Output:
// start
// end
// 6
```
  
