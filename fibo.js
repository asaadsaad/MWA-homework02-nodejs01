console.log("start");
factorial(33).then(console.log);
console.log("end");
function factorial(fact) {
  return new Promise((resolve, reject) => {
    var start = 1;
    while (fact > 1) {
      start *= fact;
      fact = fact - 1;
    }
    resolve(start);
  });
}
