// console.log("My age is ", age)
// var age=20;
// console.log("My age is ",age);
//This behavior is due to JavaScript's hoisting mechanism.

console.log("My age is ", age); // ReferenceError
let age = 20;
console.log("My age is ", age);
//ReferenceError: Cannot access 'age' before initialization
