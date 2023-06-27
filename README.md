# MWA Homework 02
## Written Exercises
1. Explain why do we want sometimes to use `setImmediate` instead of using `setTimeout`? 
2. Explain the difference between `process.nextTick` and `setImmediate`?
3. Name 10 core modules that Node provides by default, and 10 of the Global objects?

## Exercise 02
Given the node application code within the `exercise02` folder, install all the dependencies with `npm i` command, and run the application with `npm run start` command.
  
Note how the `get_data()` method within the `data.ts` file returns the following response body:

```typescript
interface Todo { "userId": number, "id": number, "title": string, "completed": boolean }

const response_body = [
  { "userId": 1, "id": 1, "title": "delectus", "completed": false },
  { "userId": 1, "id": 2, "title": "quis officia", "completed": false },
  { "userId": 2, "id": 3, "title": "suscipit incidunt", "completed": false }
  // ...
]
```
Complete the code in `format.ts` and convert the response **asynchronously** into an object grouping the Todo items by `userId`, as follows:
```typescript
const desired_response = {
    1 : [
      { "id": 1, "title": "delectus", "completed": false}, 
      { "id": 2, "title": "quis officia", "completed": false}
    ],
    2 : [
      { "id": 3, "title": "suscipit incidunt", "completed": false }
    ]
  // ...
}
```
The conversion allows for improving the time complexity of finding all Todo items for a specific user from O(n) to O(1). 
  
Create a new markdown file `solution02.md` and explain in detail the performance implications of your solution on the node process.
  
