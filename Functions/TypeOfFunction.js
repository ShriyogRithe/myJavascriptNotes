//null vs undefined
// null is an empty value of blank value 
// when a variable is declare but not defined then it's value is undefined
// For Arthematic we have :
// null to 0
// undefined to NaN
// 2**1  ====> 2 ki power 1 

//Rest parameter (...args)
// A function definition can only have one rest parameter.
// The rest parameter must be the last parameter in the function definition.
// Trailing commas are not allowed after the rest parameter.
// The rest parameter cannot have a default value.

// Rest operator pratice 
// let arr = [10, 20, 30]
// function saveData(...arr) {
//     console.log(arr);
// }
// saveData(-10, arr)

//Hoisting Best example
// for(let i = 0;i<10;i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }


//


// function test(r) {
//     const obj = { age: 26 }; // Create a shared object
//     if (r == obj) {
//         console.log('yessss');
//     }
//     if (r === obj) {
//         console.log('nnooooo');
//     } else {
//         console.log('elseeee');
//     }
// }
// == or === will always compare with reference not value in case of objects


// var i = 10;
// (function history() {
//     var i = 14;
//     console.log(i);
//   })();
/// OUTPUT 

// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//   }
  
//   const person = 'Lydia';
//   const age = 21;
  
//   getPersonInfo`${person} is ${age} years old`;
//  //this is equal to 
//   getPersonInfo(['', ' is ', ' years old'], 'Lydia', 21);


// Either == or === always compare with reference equality not value 

// (() => {
//     let x, y;
//     try {
//       throw new Error();
//     } catch (x) {
//       (x = 1), (y = 2);
//       console.log(x);
//     }
//     console.log(x);
//     console.log(y);
//   })();
  // INTERESTING

//   var status = "1"

//   setTimeout(() => {
//     const status = "2"

//     const obj = {
//         status: "3",
//         getStatus() {
//             return this.status;
//         }
//     }

//     console.log(obj.getStatus()); // 3
//     console.log(obj.getStatus.call(this));
//   }, 0);
// different for browser and for node 
// this is pointing to global object for browser it has some values but not for node globally we can't assigned values in nodes 



// Concate 2 arrays like ['a', 'b', 'c]  and ['d', 'e', 'f']
// arr.push(elements) // [a, b, c, [d, e, f]]  which is wrong 
// arr.concat(elements) // [a, b, c, d, e, f]  but return newly array i want to manipulate same arr 
// arr.push.apply(arr, elements)  // correct way to do this as arr.push(5, 6, 7, 8)

// Find max, min element in array 
// Math.max(...arr)
// Math.max.apply(null, arr)  // correct way to do this as arr


// function f() {
//     console.log(this)
// };

// let user = {
//     g: f.bind(null)
// };

// user.g();
// NOTE: null will converted to global object in non strict mode and give undefined behavior in strict mode


// BONUS question 
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     sayName() {
//       console.log(this.name);
//     }
//   }
  
//   const p = new Person('Shriyogrithe');
  
//   // Direct call → works
//   p.sayName(); // 'Shriyogrithe'
  
//   // Callback → loses `this`
//   setTimeout(p.sayName, 0); // undefined (or error in strict mode)

// //   ✅ Fix with .bind()
// // javascript
// Copy
// Edit
// setTimeout(p.sayName.bind(p), 0); // 'Shriyogrithe'

// Bind chaining is not possible it will not give error but not 1st function bind only exists

// arrow functions get this by it's lexiographically function

//=====
//FIT dynamic properties to object
// const pr = "hello"
// const dr = "welcome"

// const user = {
//     [pr]: dr
// }

// console.log(user)

//=====

// cont name = "shri"
// let last="rithe"

// function refactor() {
// return name + last
// }
// refactor()
// +----------------------------------------------------+
// | Global Execution Context                          |
// |-------------------------------------------------- |
// | Global Memory:                                    |
// |  - name = "shri"                                  |
// |  - last = "rithe"                                 |
// |  - refactor → Function reference                  |
// |-------------------------------------------------- |
// | Call Stack:                                       |
// | 1. Global Execution Context                       |
// +----------------------------------------------------+

//   ↓ Function call `refactor()` creates a new context

// +----------------------------------------------------+
// | Function Execution Context (refactor)             |
// |-------------------------------------------------- |
// | Local Memory:                                     |
// |  - name (found in Global Scope)                   |
// |  - last (found in Global Scope)                   |
// | Execution: `return name + last → "shririthe"`     |
// +----------------------------------------------------+

//   ↓ Function execution completes → Function context is removed

// +----------------------------------------------------+
// | Global Execution Context (remains until script ends) |
// +----------------------------------------------------+

// /=====

// Use cases for closures 
// Closures are useful in: ✅ Encapsulation (Private variables)
// ✅ Function factories (Reusable functions)
// ✅ Event listeners (Maintaining state)
// ✅ Memoization (Performance optimization)
// ✅ Initialization functions (Run once logic)
// ✅ Fixing loop issues
// ✅ Currying functions

// Caching example 
// function memoizedFactorial() {
//   let cache = {};

//   return function factorial(n) {
//       if (n in cache) {
//           console.log("Fetching from cache:", n);
//           return cache[n];
//       }
//       console.log("Calculating:", n);
//       if (n === 0 || n === 1) return 1;
//       return cache[n] = n * factorial(n - 1);
//   };
// }

// const fact = memoizedFactorial();
// console.log(fact(5)); // Calculates and stores in cache
// console.log(fact(5)); // Fetches from cache


//Counter example
// function counter() {
//   let count = 0;  // Private variable

//   return {
//       increment: function() {
//           return ++count;
//       },
//       decrement: function() {
//           return --count;
//       },
//       getCount: function() {
//           return count;
//       }
//   };
// }

// const myCounter = counter();
// console.log(myCounter.increment()); // 1
// console.log(myCounter.increment()); // 2
// console.log(myCounter.getCount());  // 2
// console.log(myCounter.decrement()); // 1

//IMP 
// function outer() {
//   let count = 0;
//   function inner() {
//       return ++count;
//   }
//   return inner;
// }

// const c1 = outer();  // Returns `inner` function with its own closure
// const c2 = outer();  // Returns another `inner` function with a new closure

// console.log(c1()); // Output: 1
// console.log(c2()); // Output: 1
// console.log(c1()); // Output: 2

// selectors 
// element class id 

//====
// this concepts 
// Rule 1 --> 
// function showMesssage() {
//   console.log(this) /// it will print window when no "use strict" follow otherwsie undefined
// }
// showMesssage();

// Rule 2 --->
// function showMesssage() {
//   console.log(this) /// it will print new object with prototype bcz new keyword introduced 
// }
// new showMesssage();

// Rules 3 --> 
// function showMesssage() {
//   console.log(this)  // 
// }
// showMesssage.call()// it will print global object
// showMesssage.call({}) // it will print {}


// Rules 4 -->
// function showMesssage() {
//   console.log('new showMesssage')
//   console.log(this)
// }
// const obj = {
//   showMesssage
// }
// obj.showMesssage();  // pointing to the obj object 
//=====
// 1️⃣ Default Binding:
// `this` refers to the global object (or `undefined` in strict mode).
// function foo() { 
//   console.log(this); 
// } 
// foo(); // Window (or undefined in strict mode)

// // 2️⃣ Implicit Binding:
// // `this` refers to the object calling the method.
// const obj = {
//   foo: function() {
//     console.log(this);
//   }
// };
// obj.foo(); // `this` = obj

// // 3️⃣ Explicit Binding:
// // `this` is explicitly set using call(), apply(), or bind().
// function bar() {
//   console.log(this);
// }
// const obj2 = { name: "Explicit" };
// bar.call(obj2); // `this` = obj2
// bar.apply(obj2); // `this` = obj2
// const boundFunc = bar.bind(obj2);
// boundFunc(); // `this` = obj2

// // 4️⃣ New Binding:
// // `this` refers to the newly created instance.
// function Foo() {
//   this.name = "New Binding Example";
//   console.log(this);
// }
// const instance = new Foo(); // `this` = new instance of Foo



