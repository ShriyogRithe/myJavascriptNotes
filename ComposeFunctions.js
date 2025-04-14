// Example compose function
const compose = (...fns) => (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);

const add2 = (n) => n + 2;
const times2 = (n) => n * 2;
const times2add2 = compose(add2, times2);
const add6 = compose(add2, add2, add2);

console.log(times2add2(2));  // 6
console.log(times2add2(2));  // 6 (Corrected the typo)
console.log(add6(2));        // 8
