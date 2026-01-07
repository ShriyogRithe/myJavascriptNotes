// let person = {name : "Shriyog"}
// const members = [person]    // imagine this as  members[0] = person     
// person = null
// console.log(members)



//////////////////////////========================================

// shallow vs deep copy 
// deep copy have different ref
// shallow copy have same ref

// const b = {...a} // shallow copy
// const b = structuredClone(a) // deepcopy new added in js 

// custom deepCopy interview ques
// function deepClone(value, seen = new WeakMap()) {
//   // Handle null or primitive values
//   if (value === null || typeof value !== 'object') {
//     return value;
//   }

//   // Handle circular references
//   if (seen.has(value)) {
//     return seen.get(value);
//   }

//   // Handle Date
//   if (value instanceof Date) {
//     return new Date(value);
//   }

//   // Handle RegExp
//   if (value instanceof RegExp) {
//     return new RegExp(value);
//   }

//   // Handle Array
//   if (Array.isArray(value)) {
//     const arrCopy = [];
//     seen.set(value, arrCopy);
//     for (const item of value) {
//       arrCopy.push(deepClone(item, seen));
//     }
//     return arrCopy;
//   }

//   // Handle plain objects
//   const objCopy = {};
//   seen.set(value, objCopy);
//   for (const key in value) {
//     if (value.hasOwnProperty(key)) {
//       objCopy[key] = deepClone(value[key], seen);
//     }
//   }

//   return objCopy;
// }

// Map have strong reference to its keys [keys can anythings] {garbage collector not allowed}
// Weak Map have weak reference to it's key and non iteratable bcz gc cleans up its key so it's unsafe [keys must be object only]

//////////////////////////========================================

// Map vs Object 

// Object have prototypal chain and map don't have it
// Object keys are string and map keys can be anythings 


//////////////////////////========================================


