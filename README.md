# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default.

## Exercise 02
Complete the necessary Node code to make `pluck(value)` method work asynchronously, pluck will return a new array after removing the value.  
```javascript
// your Node code here...
console.log('start');
[1,2,3,4,5,6,7,8].pluck(3);
[1,2,3,4,5,6,7,8].pluck(6);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
// [1,2,3,4,5,7,8]
```
**Practice:** Try to solve the exercise in many ways, especially using the `Promise` object.
