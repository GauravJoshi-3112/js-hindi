"use strict"; // Treat all JS Codes as Newer Version
// alert("Hello !"); // Node JS Engine is unable to run alert 
// As alert is a window API provided by Browser Engine

// We should always use Space / New Line as Code Delimeter
console.log(10); console.log(25);

let name = "Gaurav"; // String
let age = 22; // Number ranges to (2^53)
let id = 123456789012345678901234567890n;// BigInt
// BigInt can represent integers larger than Number.MAX_SAFE_INTEGER (2^53-1)
let isAdmin = false; // Boolean
// null (Data Type and Standalone Value)
// In JavaScript, null is a primitive value that represents the intentional absence of any object value. It's often used to explicitly indicate that a variable is empty or has no value.

console.log(typeof null);
console.log(typeof age);
console.log(typeof name);
console.log(typeof undefined);

// symbol (uniqueness)
// object