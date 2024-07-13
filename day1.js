// Activity 1: Variable Decleartion 

// Task 1:-
var num1 = Number() // output = 0
console.log(num1);

// // Task 2:-
let str1 = String() // uotput = ""
console.log(str1);


// Activity 2: constant declaration 
// Task 3:-
const bool1 = Boolean() // false (0)
console.log(bool1);

//Activity 3: data Type 
// Task 4:-
let str = String() //output - string
console.log(typeof str);

let num = Number() //output - number
console.log(typeof num);

let bool = Boolean() //output - boolean
console.log(typeof bool);

let obj = Object() //output - object
console.log(typeof obj);

let arr = Array() //output - object
console.log(typeof arr);

// Activity 4: Reassiging Variable
// task 5:-
let initaialValue = "Good Morning Every One "
console.log(initaialValue);
initaialValue = "Chai or code "
console.log(initaialValue);

// This methode is called stack in the stack the original value never change only we get the refrence or copy from the original valye (STACK IS USED IN STATIC MEMORRY ALLOCATION) 

//Activity 5:-
const initValue = String("Chai or code ")
console.log(initValue);
initValue ="hitesh sir"
console.log(initValue); //output:- TypeError: Assignment to constant variable.


// Features Request
//  Question 2

// In the decleartion of the valriable using (let) we can reassign the the value of that variable many (stack) times for examlple

let initaialValue1 = "Good Morning Every One "
console.log(initaialValue1);

//Reassigin the value in the same variable
initaialValue1 = "Chai or code "
console.log(initaialValue);

// In the decleartion of the valriable using (const) we can not reassign the the value of that variable many  times becouse (const) referse to constant , when we decleared no ne can change the value;

// examlple :-

const initValue1 = String("Chai or code ")
console.log(initValue);
initValue1 ="hitesh sir"
console.log(initValue1); //output:- TypeError: Assignment to constant variable.
