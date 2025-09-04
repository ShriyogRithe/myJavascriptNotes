// Question 1 : "use new keyword and make show function pointing to a different object"
// 1. const obj = { x : 20 }
// function show() {
//     console.log(this)
// }
// new (show.bind(obj)) //✅ in thi case 'new' keyword got high precedence than 'this' keyword

// 2. function show() {
//     console.log(this)
//     return {x: 20}
// }
// const x = new show()  //✅ in case of 'new' x will always print {} (new instance) but object if return object 


// 3. const obj = { x : 20 }
// function show() {
//     console.log(this)
// }
// const x = new (show.bind(obj)) //✅ x will print {} bcz 'new' > 'bind'

// 🏆  'new' > 'bind' precedence
// 🚀   
//=====================

// Question 2 : Difference between Object.create and {}
// 1. 
// const obj1 = { name: "Alice" };
// console.log(obj1.name); // Output: Alice ✅
// console.log(Object.getPrototypeOf(obj1) === Object.prototype); // Output: true ✅

// 2. 
// const personPrototype = {
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const obj2 = Object.create(personPrototype);
// obj2.name = "Bob";
// obj2.greet(); // Output: Hello, my name is Bob ✅

// console.log(Object.getPrototypeOf(obj2) === personPrototype); // Output: true ✅

// +------------+------------------------+--------------------------------+
// | Feature    | {} (Object Literal)    | Object.create(proto)           |
// +------------+------------------------+--------------------------------+
// | Prototype  | Object.prototype       | proto (custom prototype)       |
// | Inheritance| No inheritance         | Can inherit properties/methods |
// | Use Case   | Simple object creation | Prototype-based inheritance    |
// +------------+------------------------+--------------------------------+


//==============

// Question 3: How new keyword works under the hood
// Pseudo code 
// function newOperator(Constructor) {
//     const obj = Object.create(Constructor.prototype); // Step 1 & 2
//     const result = Constructor.apply(obj);           // Step 3
//     return result instanceof Object ? result : obj;   // Step 4
// }

// Make own 'new' keyword 
// function newKeyword(fn, ...args ) {
//   let newObj = {}
//   Object.setPrototypeOf( newObj, fn.prototype)
//   let result = fn.apply( newObj, ...args)
//   return result instanceof Object ? result : newObj
// }

// function human(...args) {
//     console.log(args)
//     // return {x: 30} ///
// }

// const man = newKeyword(human, ['hi', 'hello', 'world'])
// console.log(man) // Output: ['hi', 'hello', 'world']

//=======

// function showMessage(...args) {
//     console.log(this.message, args)
// }

// showMessage.call({ message: 'Hello' }, 1, 2, 3, 4);
// showMessage.apply({ message: 'hello world' }, [10, 20, 30, 40, 50, 60, 70, 80])
// const c = showMessage.bind({ message: 'Hello world'}, 1, 2, 3, 4);


//==========================================================================================

// Question on this 
// function Pet(name) {
//    this.name = name
//    this.getName = () => this.name
// }
// const cat = new Pet("shriyog")
// console.log(cat.getName())

// const { getName } = cat
// console.log(getName())

//==========================================================================================

// const obj = {
//     a: 1,
//     b: 2,
//     sum() {
//         return this.a + this.b
//     }
// }

// const res = obj.sum;
// console.log(res())

