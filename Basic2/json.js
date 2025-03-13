// What is JSON?
// JSON stands for JavaScript Object Notation.
// It’s a lightweight format used to store and transfer data.
// Mostly used when you're fetching data from APIs.

// ✅ Example: JavaScript Object vs JSON
// 💻 JavaScript Object:
// js
// Copy
// Edit
// const user = {
//   name: "Hitesh",
//   age: 25,
//   isLoggedIn: true
// };
// 📦 JSON (as a string):
// js
// Copy
// Edit
// const userJSON = `{
//   "name": "Hitesh",
//   "age": 25,
//   "isLoggedIn": true
// }`;
// 🔸 Keys and strings are in double quotes in JSON.
// 🔸 JSON is always a string when received from APIs.

// 🔁 Convert Between Object ↔ JSON
// ✅ JS Object ➡️ JSON string
// js
// Copy
// Edit
// const user = { name: "Hitesh", age: 25 };
// const jsonString = JSON.stringify(user);

// console.log(jsonString); // '{"name":"Hitesh","age":25}'
// ✅ JSON string ➡️ JS Object
// js
// Copy
// Edit
// const jsonString = '{"name":"Hitesh","age":25}';
// const userObject = JSON.parse(jsonString);

// console.log(userObject.name); // Hitesh
// 🔥 Real Example (API fetch)
// js
// Copy
// Edit
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json()) // converting JSON string to JS object
//   .then(data => console.log(data));
// 📌 Use Cases:
// Task	Method
// Object ➡ JSON string	JSON.stringify(obj)
// JSON string ➡ Object	JSON.parse(jsonStr)
// 🧠 Quick Exercise for You:
// 1. Convert this JS object to JSON:
// js
// Copy
// Edit
// const product = {
//   id: 1,
//   title: "Laptop",
//   price: 999,
//   inStock: true
// };
// 2. Parse this JSON string to a JS object:
// js
// Copy
// Edit
// const data = '{"username":"ramila","isOnline":true,"points":1200}';