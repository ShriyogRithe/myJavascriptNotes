// --> Theory for var let const 
// Function scope
// function hello () {

// }

// Block scope
// {
    
// }


// variable shadowing 
// function test() {
//     let a = 10;

//     if(true) {
//         let a = 12; // Now this is new variable which is exists only on this scope.
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

// Shadowing rules [Golden Rule only this combination is correct]
// var ---> let (correct)
// let ---> var (illegal)

// function test() {
//     let a = 10;
//     if(true) {
//         var a =20;
//         console.log(a);
//     }
//     console.log(a);
// }
// test();

////////////////////////===========================================================================

// Concept 3 : let and const can't redeclare on same scope but var can 

// let a; 
// let a;// illegal 

// var a;
// var a; //legal


////////////////////////==================================================================================

// Function, scope, hoisting, arrow functions
// First Class Functions

// function which can treat as any other variable or value like 
// function square(n) {
//     return n * n
// } 
// function display(fn) {
//     return "Square is" + fn(5);
// }
// console.log(display(square)) // Here square is a firstb class function





////////////////////////==================================================================================
