# MWA Homework 02 - NodeJS 01
## Written Exercises
### 1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
In some cases, we may want to use setImmediate instead of setTimeout because it allows us to schedule a task to run as soon as possible, rather than waiting for a certain amount of time to pass.

For example, if we have a high-priority task that needs to run as soon as possible, we may want to use setImmediate instead of setTimeout.

### 2. Explain the difference between `process.nextTick` and `setImmediate`?

| Feature | `process.nextTick` | `setImmediate` |
|---------|--------------------|----------------|
| Queue | NextTick Queue | Event Queue (check) | 
| Execution order | Runs before any other I/O events or timers | Runs after I/O events' callbacks |
| Use case | Very specific cases where a task needs to run before any other scheduled tasks | Normal cases where a task needs to run as soon as possible after the current call stack is empty |
| Availability | Node.js only | Node.js and Web Browsers |

### 3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

    Core modules that Node.js provides by default:
    http: Provides functionality for creating HTTP servers and clients.
    fs: Provides an API for interacting with the file system.
    path: Provides utilities for working with file and directory paths.
    os: Provides information about the operating system.
    url: Provides utilities for parsing and manipulating URLs.
    util: Provides utility functions for a variety of tasks.
    stream: Provides a base API for implementing streaming data in Node.js.
    crypto: Provides cryptographic functionality.
    zlib: Provides functionality for compressing and decompressing data.
    events: Provides an event emitter class for implementing event-driven systems.
 
    Global objects that Node.js provides by default:
    console: Provides a simple debugging console that is similar to the one provided in web browsers.
    Buffer: Provides a way to work with binary data.
    setTimeout: Schedules a function to be called after a specified delay.
    setInterval: Schedules a function to be called repeatedly with a fixed time delay.
    setImmediate: Schedules a function to be called after the current call stack is empty.
    clearTimeout: Cancels a previously scheduled timeout.
    clearInterval: Cancels a previously scheduled interval.
    global: The global object.
    process: Provides information about the current process and allows you to control it.
    module: Provides information about the current module and allows you to control it.


## Exercise 02
Write a function in Node `factorial(n)` to find asynchronously the factorial of a number. Write your observation (CPU, RAM.. etc) on what happens in `Node Process` when we calculate the factorial of a large number.  
* factorial(3) is 3 * factorial(2)
* factorial(2) is 2 * factorial(1)
* factorial(1) is 1 * factorial(0)
* factorial(0) is 1

```javascript
function factorial(n) {
  return new Promise((resolve, reject) => {
    if (n === 0) {
      resolve(1);
    } else {
      factorial(n - 1).then(result => resolve(result * n));
    }
  });
}

console.log('start');
factorial(3).then(console.log); 
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// 6
```
The above approach is not optimal for performance, especially for large numbers and it will consume a significant amount of CPU and RAM resources
  
