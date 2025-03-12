// array

// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

// A  [ 0, 1, 2, 3, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2 ]
// B  [ 0, 1, 2, 3, 4, 5 ]
// C  [ 0, 4, 5 ]
// [ 1, 2, 3 ]

// slice(start, end) copy karta hai array ka ek hissa.
// Lekin original array ko change nahi karta.
// Yahaan slice(1, 3) ka matlab:
// Index 1 se le kar index 3 se ek pehle tak elements lega.
// Yani: [1, 2]


// splice(start, deleteCount) original array ko change karta hai.
// Yahaan splice(1, 3) ka matlab:
// Index 1 se start karo
// 3 items hata do (index 1, 2, 3 → yani values 1, 2, 3)