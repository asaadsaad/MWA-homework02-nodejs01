# MWA Homework 02 - NodeJS 01
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

## Exercise 02
Complete the necessary Node code to make `process(array)` function work asynchronously, the function returns:
* Sub-array of all the positive numbers, if the sum of the positive numbers was bigger than the sum of negative numbers
* Sub-array of all the negative numbers, if the sum of the negative numbers was bigger than the sum of the positive numbers

```javascript
// your Node code here...
console.log('start');
process([4, -6, -3, 7]).then(console.log); 
process([-7, 3, -2, 4]).then(console.log);
console.log('end');

// Test your code in Node.JS CLI, Output:
// start
// end
// returns [4,7] because (4 + 7) > 0 -(-6 + -3)
// returns [-7, -2] because 0 -(-7 + -2) > (3 + 4) 
```
**Practice:** Try to solve the exercise in many ways.
