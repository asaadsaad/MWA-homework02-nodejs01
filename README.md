# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

## Exercise 02
Complete the necessary Node code to make `pluck(value)` method work asynchronously, pluck will return a new array after removing all occurences of the value.  
```javascript
// your Node code here...
console.log('start');
[1,2,3,4,5,6,7,8].pluck(3).then(console.log);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// [1,2,4,5,6,7,8]
```
**Practice:** Try to solve the exercise in many ways, especially using the `Promise` object.
