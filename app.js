
function multiply(a, b) {
    return Promise.resolve(a * b);
}

const factorial = (n) => {
    if (n < 2) return Promise.resolve(1);
    return factorial(n - 1)
    .then(n1 => multiply(n1, n));
}
console.log('start');
factorial(99000).then(console.log); 
console.log('end');

//Maximum call stack size exceeded