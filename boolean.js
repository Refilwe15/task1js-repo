let num1 = 5;
let num2 = 10;

let isGreater = num1 > num2;
let isLessOrEqual = num1 <= num2;
let isEqual = num1 === num2;
let isNotEqual = num1 !== num2;

console.log("Is num1 greater than num2:", isGreater);
console.log("Is num1 less than or equal to num2:", isLessOrEqual);
console.log("Is num1 equal to num2:", isEqual);
console.log("Is num1 not equal to num2:", isNotEqual);

let x = 8;
let y = 12;

console.log("Is x greater than y:", x > y);
console.log("Is x less than or equal to y:", x <= y);
console.log("Is x equal to y:", x === y);
console.log("Is x not equal to y:", x !== y);

let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

let p = 10;

p += 5;
console.log("After += 5, p =", p);

p -= 3;
console.log("After -= 3, p =", p);

p *= 2;
console.log("After *= 2, p =", p);

p /= 4;
console.log("After /= 4, p =", p);

p %= 3;
console.log("After %= 3, p =", p);
