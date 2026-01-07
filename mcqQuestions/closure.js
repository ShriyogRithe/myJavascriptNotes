
// console.time("111")
// for(let i = 0;i<1000000;i++) {
    
// }
// console.timeEnd("111")

//////////////////////////========================================

// How would u use a closure for create a private counter 

// function counter (count) {
//   let countOuter = count
//   return function () {
//     return ++count;
//   }
// }
// let counterFn = counter(0) 
// console.log(counterFn())
// console.log(counterFn())
// console.log(counterFn())
// console.log(counterFn())


//////////////////////////========================================


// What is Module Pattern
// var Module = (function () {
//    function private() {
//     console.log("private")
//    }
//    const public = function () {
//     console.log("public")
//    }
//    return  { public }
// })()

// Module.public()


//////////////////////////========================================

// Make this run only once 

// function startFollowing() {
//     let followed = false
//     let viewed = 0
//     return function follow() {
//         if(followed) {
//             console.log("Already followed......", ++viewed)
//         } else {
//             followed = true
//             console.log("Start following.......", ++viewed)
//         }
//     }
// }
// const followFn = startFollowing()
// followFn()
// followFn()
// followFn()
// followFn()

//////////////////////////========================================

// Now to form a generic soln for once function like we have lodash.once() {that means it only runs only once}
// function once(fn, context) {
//     let ans 
//     return function () {
//         if(fn) {
//             ans = fn.apply(context || this, arguments)
//             fn = null
//         }
//         return ans 
//     }
// }

// const hello = once(() => {console.log("hello function")})

// hello()
// hello()
// hello()

//////////////////////////========================================

// Now implement caching or memomize 
// const sqaure = (num1, num2) => {
//     for(let i = 0;i<1000000;i++) {

//     }
//     return num1 * num2
// }

// function memomize() {
//     const memo = {}
//     return (num1, num2) => {
//         console.log('sssss', memo?.[`${num1-num2}`])
//         if(memo?.[`${num1-num2}`]){
//             return memo[`${num1-num2}`]
//         }
//         for(let i = 0;i<1000000;i++) {

//         }
//         memo[`${num1-num2}`] = num1 * num2
//         return memo[`${num1-num2}`]
//     }
// }
// const m = memomize()
// console.time("1111")
// m(123,234)
// console.timeEnd("1111")
// console.time("2")
// m(123,234)
// console.timeEnd("2")

//////////////////////////========================================









