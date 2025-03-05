//Comparison of datatypes in javascript 

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); //true
// console.log("02" > 1); //true

//JavaScript comparisons mein strings ko numbers mein convert karta hai agar doosri value ek number ho.
//Isi wajah se "2" aur "02" dono 2 ban jaate hain aur 2 > 1 true hota hai

// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// Summary:
// Comparison operators (>, <, >=, <=) null ko 0 mein convert karte hain.
// Equality (==) operator null ko sirf undefined se equal maanta hai, 0 se nahi.
// 👉 Is wajah se inconsistent results milte hain!
// ✔ Best practice: Hamesha === (strict equality) use karo! 🚀

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false

// undefined == 0 → ❌ false (sirf null ke saath equal hota hai)
// undefined > 0 → ❌ false (kyunki undefined NaN ban jata hai)
// undefined < 0 → ❌ false (NaN kisi bhi number se compare nahi hota)
// 👉 NaN ke saath koi bhi comparison (>, <, >=, <=) hamesha false hota hai! 🚀



// // === 

//console.log("2" === 2); //false