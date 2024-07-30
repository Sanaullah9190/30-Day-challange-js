// ES6 + FEATURE
// ACTIVITIES 1:- TEMPALATE LITERALS 
// TASK 1:-

const name ="sanaulah"
const age = 18

console.log(`Name is ${name} and age is ${age}`);

// TASK 2:-

const country = 'INDIA'
const about = "is the very beutifull country"
const last = 'thank'

console.log(`my country name is ${country} and ${about} and ${last}`);

// ACTIVITIES 1:- DESTRUCTURING

// task 3
let arr = [6,5,7,34,77,88,96,43]

let [first , second] = arr

console.log(`first element is ${first} and second element is ${second}`);

// task 4

let obj = {
    book:"Game of throne",
    title:"hbo",
    year:2023,
    author:"sana"
}

let {title,author} = obj

console.log(`destructure title is ${title} and sestructure author is ${author}`);

// ACTIVITIES 3:- spread and rest operatpr 

//taask 5:- 
let person = ['ashish','aman','topa','sanaullah','saksham']

let newArr = [...person,'aditya','rahul']

console.log(newArr);

// task 6;-
function sum(...number){
    return number.reduce((acu,cav)=> acu + cav ,0)
}
let result = sum(1,2,3,4,5,6)

console.log(result);

// task 7-

function product(a,b=1){
    return a*b
}

let withBothParameter = product(3,5)
let withoutBothParameter = product(3)
console.log(withBothParameter);
console.log(withoutBothParameter);


// task 8:-
const actor = 'sunyleony'
let age2 = 56
let work = 'acting'

const setData = {
    actor,
    age2,
    work,
    greet(){
        console.log(`The name of actor is ${this.actor} and age is ${this.age2}`);
    }
}

console.log(setData);
console.log(setData.greet());

// task 8 
let propName = 'first Name'
let propWork = 'work as'
let born = 'born in'

let fulldata = {
    [propName]:'sanaullah',
    [propWork]:"studend",
    [born]:2004,
}

console.log(fulldata);

