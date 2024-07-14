// **********ACTIVITY 1: ARITHMATIC OPERSTORS************
// Taks 1:

const sum = (num1,num2)=>{
    let result = num1+num2
    console.log(result); // output = 5
}
sum(2,3)

const sum1 = (num1,num2)=>{
    return num1+num2
}

console.log(sum(2,3)); // output = 5

// Task 2: 

const sub= (num1,num2)=>{
    let result = num1-num2
    console.log(result); // output = 2
}
sub(5,3)

const sub1 = (num1,num2)=>{
    return num1-num2
}

console.log(sub1(5,3)); // output = 2


// Task 3: 

const multy= (num1,num2)=>{
    let result = num1*num2
    console.log(result); // output = 15
}
multy(5,3)

const multy1 = (num1,num2)=>{
    return num1*num2
}

console.log(multy1(5,3)); // output = 15

// Task 4: 

const div= (num1,num2)=>{
    let result = num1/num2
    console.log(result); // output = 2
}
div(10,5)

const div1 = (num1,num2)=>{
    return num1/num2
}

console.log(div1(10,5)); // output = 2


// Task 5: 

const remnd= (num1,num2)=>{
    let result = num1%num2
    console.log(result); // output = 0
}
remnd(10,5)

const remnd1 = (num1,num2)=>{
    return num1%num2
}

console.log(remnd1(10,5)); // output = 0

// **********ACTIVITY 2: ASSIGNMENT OPERSTORS************

// TASK 6: 


let y = 2
let x2 = 4
console.log(x2+=y); // output = 6

// TASK 7

let y1 = 2
let x1 = 4
console.log(x1-=y1); // output = 2

// **********ACTIVITY 3: COMPARISION OPERSTORS************

// TASK 8: 

// let age = prompt("enter the age ")// not work one node or terminal
let age1 = 16
if(age1>18){
    console.log(`your age is under the ${age1} so you can drive car`);
}else if(age<18){
    console.log(`your age is under the ${age1} so you can't drive car`);
}

// TASK 9:

let age = 18
if(age>=18){
    console.log(`your age is under the ${age} so you can drive car`);
}else if(age<=17){
    console.log(`your age is under the ${age} so you can't drive car`);
}

// TASK 10

let num1 = 123456
let num2 ="123456"

console.log(num1==num2); //output = true
console.log(num1===num2);//output = false

// **********ACTIVITY 4: LOGICAL OPERSTORS************

// TASK 11:

let x = 10

if(x<11 && x>0 ){
    console.log("The vale of x is between ",x);
}else{
    console.log("the value of x is not between ",x);
}

// TASK 11:

let age2 = 18


if(age2<10 || age2<17){
    console.log(`your age is under the ${age} so you can't drive car`);
}else{
    console.log(`your age is above the ${age} so you can drive car`);
}

if(age !==18){
    console.log(`your age is under the ${age} so you can't drive car`);
}else{
    console.log(`your age is above the ${age} so you can drive car`);
}

// **********ACTIVITY 4: TERNARY OPERSTORS************

// TASK 14:

let number = -2
number >0 ? console.log("Posite Number is",number) :console.log("negative Number is",number);






