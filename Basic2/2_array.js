// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// // marvel_heros.push(dc_heros)

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// // const allHeros = marvel_heros.concat(dc_heros)
// // console.log(allHeros);

// // concat() dono arrays ko merge karta hai aur naya array return karta hai.
// // Original arrays ko change nahi karta.

// const all_new_heros = [...marvel_heros, ...dc_heros]

// // Spread operator bhi arrays ko merge karta hai
// // Ye bhi naya array banata hai — same kaam as concat() lekin zyada flexible hota hai.

// // console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// // flat() nested arrays ko ek hi level pe le aata hai.
// // Infinity ka matlab hai jitni bhi levels ho — sab ko flatten karo.


// console.log(Array.isArray("Hitesh"))
// // Check karta hai ki input ek array hai ya nahi.
// // "Hitesh" is a string → returns false
// console.log(Array.from("Hitesh"))
// // Array.from() kisi bhi iterable (like string) ko array bana deta hai.
// // @ts-ignore
// console.log(Array.from({Name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
// // Array.of() values se naya array banata hai.



// // push()	Array ke andar item add karta hai (even array bhi as ek item add hota hai)
// // concat()	2 arrays ko merge karta hai (new array return karta hai)
// // [...]	Spread operator, arrays ko merge karta hai
// // flat(Infinity)	Nested arrays ko ek level pe laata hai
// // Array.isArray()	Check karta hai kya yeh array hai ya nahi
// // Array.from()	Iterable (like string) ko array mein convert karta hai
// // Array.of()	Given values se new array banata hai


const a = [1, 2]
const b = [3, 4]

// Step 1: `a` ke andar `b` ko `push()` karo aur `console.log` karo
// Step 2: `a.concat(b)` ka result nikal ke `console.log` karo

// a.push(b);
// console.log(a); //[ 1, 2, [ 3, 4 ] ]

// a.concat(b);
// console.log(a); // [ 1, 2, [ 3, 4 ] ]

const fruits = ["apple", "banana"]
const vegetables = ["carrot", "broccoli"]

// Dono arrays ko merge karo using `...` spread operator
// Output should be: ["apple", "banana", "carrot", "broccoli"]

// const all = [...fruits, ...vegetables];

// console.log(all);

// const items = [1, [2, 3], [4, [5, 6]]]

// console.log(items.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// const myName = "ramila" ;
// console.log(Array.isArray(myName));

// const myName2 = "ramila" ;
// console.log(Array.from(myName2));

// const score1 = 100;
// const score2 = 200;
// const score3 = 300;

// console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// const nestedArray = [1, 2, [3, 4], [5, [6, 7]]]
// console.log(nestedArray.flat(Infinity)) // [1, 2, 3,