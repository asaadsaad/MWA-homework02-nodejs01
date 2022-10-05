function factorial(n) {

    // if (n === 0 || n === 1) {
    //     return 1;
    // } else {
    //     return n * factorial(n - 1);
    // }

    return new Promise(async resolve => {
        if (n === 0 || n === 1) {
            resolve(1)
        } else {
            resolve(n * await factorial(n - 1))
        }
    })

}
console.log(`start`)
factorial(3).then(console.log)
console.log(`end`)
