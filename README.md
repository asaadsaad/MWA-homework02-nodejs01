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
## Written Exercises
1. setImmediate will execute before any timers and has different location in queues. setTimeout uses the Timer Queues so priority will be given to setImmediate
2. setImmediate adds callback fns to the event queue that are executed during the check phase, whereas process.nextTick executes callback fns immediately after the current phase
3. 
#### Core Modules
- assert:	provides a set of assertion functions useful for testing
- buffer:	provides the ability to handle buffers containing binary data
- child_process:	provides the ability to spawn child processes
- console:	provides a simple debugging console
- cluster:	allows to split a Node.js process into multiple workers to take advantage of multi-core systems
- crypto:	provides cryptographic functionality
- dgram:	provides an implementation of UDP Datagram sockets
- dns:	provides name resolution and DNS lookups
- events:	provides an API for managing events
- fs:	provides an API for interacting with the file system
- http:	provides an HTTP client/server implementation
- http2:	provides an HTTP/2 client/server implementation
- https:	provides an HTTPS client/server implementation

#### Node Global Objects
- setInterval
- __dirname
- __filename
- atob(data)
- BroadcastChannel
- btoa(data)
- clearImmediate(immediateObject)
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)
- Class: CompressionStream
- console
- Class: CountQueuingStrategy
- Crypto
- crypto
- CryptoKey

  
## Exercise 2
```
const factorial = async function (n) {
  if (n === 0) {
    return 1;
  }
  return n * (await factorial(n - 1));
};
console.log('start');
factorial(3).then(console.log); 
console.log('end');

//Output
start
end
6  
```

#### Observation
There isn't much change observed when using small numbers. As the number size increases there is spike in CPU and RAM usage. At some point it causes a stack error.

