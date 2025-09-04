// 🔧 Creation & Cloning
// Object.create(proto, [propertiesObject])

// Creates a new object with the specified prototype and optional properties.

// Object.assign(target, ...sources)

// Copies enumerable own properties from one or more source objects to a target object (shallow clone).

///////////////////////////////////=======================================================================================


// 🔍 Inspection & Enumeration
// Object.keys(obj)

// Returns an array of the object’s own enumerable property names.

// Object.values(obj)

// Returns an array of the object’s own enumerable property values.

// Object.entries(obj)

// Returns an array of key-value pairs (like Map).

// Object.hasOwnProperty(key)

// Checks if an object has a property as its own (not inherited).

// 'key' in obj

// Checks if a property exists in the object (including inherited).

///////////////////////////////////=======================================================================================


// Property Descriptors
// Object.defineProperty(obj, prop, descriptor)

// Adds or modifies a property with specific characteristics (e.g., writable, configurable).

// Object.defineProperties(obj, descriptors)

// Same as above but for multiple properties.


///////////////////////////////////=======================================================================================

// const p1 = {
//     name: "shri",
//     lastName: "rithe"
// }
// const p2 = Object.create(p1)
// so now p2 will looks like this 
// {
//     __proto__ : p1(which is exactly pointing to p1 object which u change here it will directly reflect to p1 object)
// }

// let name = "delhi"  (in js automatically new String("delhi"))
// name is string compiler whose 
// How ?
// console.log(name.__proto__) ===> this will return an object of string 
// so now when u write name.at(2) it will check name has .at() no then check it's prototype has at() yes bcz 
// __proto__ is pointing to string object

// basically name.__proto__ = String.prototype(done internally)
