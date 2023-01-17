# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

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
  
# Answers
## 1. Why do we want sometimes to use `setImmediate` instead of using `setTimeout`

`setImmediate` sets functions to be async immediately by adding them to the check queue. Functions run immediately after the current poll phase has completed.

`setTimeout` schedules functions to run after a certain time(in ms) has elapsed.

We want to use `setImmediate` instead of `setTimeout` because it executes before any timers if scheduled within an I/O cycle.

## 2. Difference between `process.nextTick` and `setImmediate`

`process.nextTick` is not part of the event loop, it sends functions in `nextTickQueue`. `nextTickQueue` is processed after the current operation has finished executing regardless of the current phase i.e before the event loop continues whereas `setImmediate` allows functions to run immediately after the current poll phase has completed entirely.

## 3. 10 core modules that Node provides by default, and 10 of the Global objects.

### 10 core modules

1. http: creates an HTTP server in node.js.
2. fs: used to handle file system.
3. path: has methods that deal with file paths.
4. process: provides information and control about the current node.js process.
5. os: provides information about the operating system.
6. url: utilities for URL resolution and parsing.
7. crypto: supports cryptography for encryption and decryption.
8. zlib: used to compress and decompress data.
9. events: for handling events.
10. tls: used to implement TLS and SSL protocols.

### 10 Global objects

1. __filename: represents the filename, the absolute path of the current code file.
2. __dirname: represents the name of the directory that the currently executing script resides in.
3. setTimeout(fx, ms): global function used to run callback fx after at least ms milliseconds.
4. clearTimeout(t): clears timer that was previously created with setTimeout().
5. setInterval(fx, ms): used to run callback fx every ms milliseconds.
6. console: prints information to standard output or standard error output.
7. process: an instance of EventEmitter used to get information on the current process.
8. Class Buffer: The Buffer class is an inbuilt globally accessible class which means it can be used without importing any module. It is used to deal with binary data as a sequence of bytes.
9. global: It is a global namespace. Defining a variable within a global namespace makes it globally accessible.
10. TextDecoder: an implementation of the WHATWG Encoding Standard TextDecoder API.

## Exercise 2

```javascript
function multiply(a, b) {
    return Promise.resolve(a * b);
}

const factorial = (n) => {
    if (n < 2) return Promise.resolve(1);
    return factorial(n - 1)
    .then(n1 => multiply(n1, n));
}
console.log('start');
factorial(3).then(console.log); 
console.log('end');
```
* When you calculate a factorial of a large number you get __Maximum call stack size exceeded__ runtime error message.