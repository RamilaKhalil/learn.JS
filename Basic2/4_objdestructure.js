// Agar tum JavaScript mein object destructuring kar rahi ho (jaise tumne kiya):


// const { courseInstructor: instructor } = course;
// console.log(instructor); // "hitesh"
// Toh ye perfectly work karta hai — pure JavaScript mein.

// 🔥 Lekin React mein kya hota hai?
// React mein bhi ye same syntax hota hai, especially jab tum props ya state ko destructure karti ho.

// ✅ Example 1: Props Destructuring in Functional Component

// function CourseCard({ coursename, price, courseInstructor }) {
//   return (
//     <div>
//       <h2>{coursename}</h2>
//       <p>Price: {price}</p>
//       <p>Instructor: {courseInstructor}</p>
//     </div>
//   );
// }
// Yahaan pe destructuring ho rahi hai props se directly:


// { coursename, price, courseInstructor }
// Agar tum rename bhi karna chahti ho, toh aise likh sakti ho:


// function CourseCard({ courseInstructor: instructor }) {
//   return <p>Instructor: {instructor}</p>;
// }
// ✅ Example 2: Destructuring from useState

// const [user, setUser] = useState({
//   name: "Hitesh",
//   age: 30,
//   course: "React"
// });

// const { name, course } = user;

// console.log(name);   // "Hitesh"
// console.log(course); // "React"
// ⚠️ Common Mistake in React:

// const { courseInstructor } = course;
// // ✅ correct

// const { courseInstructor: instructor } = course;
// // ✅ correct too

// console.log(courseInstructor); 
// // ❌ Error: courseInstructor is not defined

// console.log(instructor);
// // ✅ this works
// ➡️ Jab tum rename karti ho like courseInstructor: instructor, toh ab original courseInstructor variable available nahi hota — tumhe instructor use karna hota hai.

// 👩‍💻 To sum up:
// React mein destructuring ka use hota hai props, state, context, etc. se data nikaalne ke liye.
// Rename karne ke baad original naam use mat karo.
// Destructuring JS ka hi feature hai, React mein woh hi logic chalta hai.
