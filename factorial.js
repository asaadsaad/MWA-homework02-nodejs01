
async function factorial(x) {
    if (x === 0 || x === 1) return 1;
    return x * await factorial(x-1);
}
console.log("start");
factorial(999).then(console.log);
console.log("end");
