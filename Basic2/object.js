// // // singleton

// // 🔹 2. Singleton Object kya hota hai?
// // 💡 Singleton ka matlab hota hai: only one instance allowed.

// Normal Object Literal mein:
// js
// Copy
// Edit
// const user1 = { name: "Ramila" };
// const user2 = { name: "Ramila" };

// console.log(user1 === user2); // ❌ false
// Yahan user1 aur user2 dono alag alag object hain.
// Chahe unka data same ho, wo do alag instance hain.

// 🔸 Singleton mein:
// js
// Copy
// Edit
// const singletonUser = Object.create({});
// const singletonUser2 = singletonUser;

// console.log(singletonUser === singletonUser2); // ✅ true
// Yahan singletonUser aur singletonUser2 dono same instance ko point kar rahe hain.
// Yani memory mein ek hi object bana hai — isko hi kehte hain singleton.



// // Jab tum object Object.create() se banati ho, wo singleton ban sakta hai.

// // Example:

// // js
// // Copy
// // Edit
// // const user = Object.create({});
// // Ye object banane ka different way hai, object literal se alag.
// // Yeh zyada tar advanced scenarios ya prototypes ke sath use hota hai.

// // // Object.create

// // // object literals

// // const user = {
// //     name: "Ramila",
// //     age: 22,
// //     isLoggedIn: true
// //   };
// //   💬 Ye simple aur easy way hai object banane ka.
// //   Yehi hota hai object literal — jab tum directly {} ke andar key-value pairs likhti ho.
  

// // const mySym = Symbol("key1")


// // const JsUser = {
// //     name: "Hitesh",
// //     "full name": "Hitesh Choudhary",
// //     [mySym]: "mykey1",
// //     age: 18,
// //     location: "Jaipur",
// //     email: "hitesh@google.com",
// //     isLoggedIn: false,
// //     lastLoginDays: ["Monday", "Saturday"]
// // }
// // // Ye ek object hai jismein key-value pairs hain.
// // // ✅ "full name" double quotes mein hai, kyunki usme space hai.
// // // ✅ [mySym] ka matlab hai symbol ko as a key use karna.

// // // console.log(JsUser.email)
// // // console.log(JsUser["email"])
// // // console.log(JsUser["full name"])
// // // console.log(JsUser[mySym])

// // // JsUser.email ➝ dot notation (jab key ek word ho)
// // // JsUser["full name"] ➝ bracket notation (jab key mein space ho)
// // // JsUser[mySym] ➝ symbol wali key

// // JsUser.email = "hitesh@chatgpt.com"
// // // Object.freeze(JsUser) //Ye line object ko freeze kar deti hai. Uske baad koi bhi update nahi chalega.


// // JsUser.email = "hitesh@microsoft.com"
// // // console.log(JsUser);

// // JsUser.greeting = function(){
// //     console.log("Hello JS user");
// // }
// // JsUser.greetingTwo = function(){
// //     console.log(`Hello JS user, ${this.name}`);
// // }

// // console.log(JsUser.greeting());
// // console.log(JsUser.greetingTwo());

// const objuser = {
//     name: "Hitesh",
//     age : 90,
//     city : "jaipur",
//     // const user : function(){
//     //     console.log("User is logged in");
//     // }
// //Tumne galti se likh diya: const user: function() { ... }
// // ❌ const ka use sirf object ke bahar hota hai, andar nahi.


//     // user : function(){
//     //     console.log("User is logged in");
//     // }
//     user(){
//         console.log("User is logged in");
//     }, //Syntax (ES6+)
//     greet() {
//         console.log(`Hello from ${this.name}`);
//       }, //this.name => object ke andar jo name property hai (Hitesh), usko access karta hai.
//       //Agar tum name ki value badal do, greet() us new value ko print karega.
//       isLoggedIn: false,
//       Loggedstatus(){
//         if(this. isLoggedIn){
//             console.log("User is logged in");
//         }
//         else{
//             console.log("User is logged out");
//         }
//         },
//         isLogIn: false,
//       Logstatus(){
//         if(this.isLogIn){
//         console.log(`Welcome back ${this.name} from ${this.city}`)
//         }
//         else{
//             console.log(`${this.name}, please log in to continue.`)

//         }
//     },
//     profile : {
//         name: "Hitesh",
//         country : "pak"
//     },

// };
//  console.log(objuser);
//  objuser.user();
//  objuser.greet();
//  objuser.Loggedstatus();
//  objuser.Logstatus();
//  console.log(objuser.profile);//Yeh line galat hai kyunki profile ek object hai, function nahi — isliye usse () ke saath call nahi kar sakte.
 

//  //<..................................................>//

// //  nested objects with arrays
// //  looping through object keys
// //  or object destructuring next?