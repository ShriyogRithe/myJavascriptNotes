// const data = {
//     name: "shriyog"
// }
// function getMyData(email, city) {
//   return `my name is ${this.name} and city is ${city} with email is ${email}`
// }

// // call Polyfill

// // Function.prototype.myCall = function (context = {}, ...args) {
// //     if(typeof this !== 'function') {
// //         throw new Error('This function is not callable.....')
// //     }
// //     context  = context || globalThis
// //     const uniqueFn = Symbol('fn')
// //     context[uniqueFn] = this
// //     const res = context[uniqueFn](...args)
// //     delete context[uniqueFn]
// //     return res
// // }

// // console.log(getMyData.myCall(data, 'shriyog@gmail.com', 'indore'))



// // Function.prototype.myApply = function (context = {}, argsArray) {
// //     if(typeof this !== 'function') {
// //         throw new Error('this is not callable')
// //     }
// //     context = context || globalThis
// //     const newFn = Symbol('fn')
// //     context[newFn] = this
// //     const res = context[newFn](...argsArray)
// //     delete context[newFn]
// //     return res
// // }
// // console.log(getMyData.myApply(data, ['shriyog@gmail.com', 'indore']))

// Function.prototype.myBind = function (context = {}, ...newArgs) {
//     if(typeof this !== 'function') {
//         throw new Error('this is not callable')
//     }
   
//     context = context || globalThis
//     const fn = this
//     return function (...args) {
//         const newFn = Symbol('fn')
//         context[newFn] = fn
//         const res = context[newFn](...newArgs, ...args)
//         delete context[newFn]
//         return res
//     }
// }
// console.log(getMyData.myBind(data, 'shriyog@gmail.com', 'indore')())

// const fn = getMyData.myBind(data, 'shriyog@gmail.com')
// fn( 'indore')


// const a = {
//     name : "aaa",
//     getName() {
// console.log('pppp', this)
// }
// }
// const {getName} = a
// getName.call(a)
