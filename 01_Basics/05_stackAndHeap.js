// Memory / Thread
// Java sciprt is a Single Threaded / Synchronous programming language.

// Stack And Heap Memory
// Stack Memory is Used for Primitive Type (Copy of variable is passed)
// Heap Memory is used fro Reference / Non Primitive Type (Reference of Variable is Passed)

let youtubeName = "Chai Aur Code" // Part of Stack
let anotherName = youtubeName;
anotherName = "New Name"
console.log(anotherName);
console.log(youtubeName); // Name is not changedd as only the copy of variable is passed to the anotherName


let userOne = {
    name:"user1",
    age:22,
    upi:"user@ybl"
}
let userTwo = userOne;
// userOne variable is declared in stack only but it's referenced to the Heap Object
// i.e Both userOne and userTwo are pointing to same memory address in heap 