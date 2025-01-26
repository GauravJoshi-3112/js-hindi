let score = 33;
console.log(typeof score);

let scoreString  = "33";
console.log(typeof scoreString);

let scoreInNumber = Number(scoreString);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

scoreString = "33.45abc";
scoreInNumber = Number(scoreString);
console.log(typeof scoreInNumber);
console.log(scoreInNumber);

// "33" -> 33
// "33abc" -> NaN (Not a Number)
// true -> 1; false -> 0
// "" -> false, NaN -> false
// "abc" -> true, null -> false, undefined -> false

/****** Operations ******/
console.log("****** Operations ******");

let value = -3;
let negValue = -value;
console.log(value);
console.log(negValue);

let str1 = "hello";
let str2 = " gaurav";
let str3 = str1 + str2;
console.log(str3);
console.log(str1 + 1);

console.log(true + 1);

let num1, num2, num3;
num1 = num2 = num3 = 4;
console.table([num1, num2, num3]);