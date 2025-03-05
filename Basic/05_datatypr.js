// //Data types of javascript summary

// // "use strict"; // treat all JS code as newer version

// // // alert( 3 + 3) // we are using nodejs, not browser

// // console.log(3 
// //     +
// //      3) // code readability should be high

// // console.log("Hitesh")


// // let name = "hitesh"
// // let age = 18
// // let isLoggedIn = false
// // let state;

// // number => 2 to power 53
// // bigint
// // string => ""
// // boolean => true/false
// // null => standalone value
// // undefined => 
// // symbol => unique


// // object

// // console.log(typeof undefined); // undefined
// // console.log(typeof null); // object

// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// // const score = 100
// // const scoreValue = 100.3

// // const isLoggedIn = false
// // const outsideTemp = null
// // let userEmail;

// //  const id = Symbol('123')
// // const anotherId = Symbol('123')

// // console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// // const heros = ["shaktiman", "naagraj", "doga"];
// // let myObj = {
// //     name: "hitesh",
// //     age: 22,
// // }

// // const myFunction = function(){
// //     console.log("Hello world");
// // }
// // console.log( typeof myFunction);

// // console.log(typeof anotherId);

// // https://262.ecma-international.org/5.1/#sec-11.4.3

// // console.log(typeof "Hello");   // "string"
// // console.log(typeof 42);        // "number"
// // console.log(typeof 9007199254740991n); // "bigint"
// // console.log(typeof true);      // "boolean"
// // console.log(typeof undefined); // "undefined"
// // console.log(typeof null);      // "object" (⚠️ JavaScript ka bug)
// // console.log(typeof Symbol("id")); // "symbol"

// console.log(typeof {name: "Ali", age: 25}); // "object"
// console.log(typeof ["apple", "banana"]);    // "object"
// console.log(typeof function() {});          // "function"
// console.log(typeof console.log); // "function" (⚠️ JavaScript ka bug)


// Important Notes 
// Primitive values directly store hote hain, jabke Non-Primitive reference store karte hain.
// typeof null === "object" JavaScript ka ek purana bug hai, magar ab tak fix nahi kiya gaya.
// typeof function() {} "function" return karta hai, lekin internally ye bhi ek object hai.
// typeof NaN === "number" hota hai, kyunki NaN (Not-a-Number) bhi number type ka part hai.