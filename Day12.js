// activity 1: BASIC ERROR  HANDLLING WITH TRY- CATCH

// task 1:
let errorHandel = function(){
    try {
        let error = false
        if(!error){
            throw Error("error is true ")
        }
    } catch (error) {
        console.log("error",error);
    }
}

errorHandel()

// task 2:
let errorHandel1 = function(a,b){
    try {
        if(a=== 0){
            throw Error('a is  equal to 0')
        }
        let d = a/b
        console.log(d);
    } catch (error) {
        console.log("error",error);
    }
}
errorHandel1(2,4)

// ACTIVITY 2: FINALLY BLOCK
//TASK 3:-

const add = (a,b)=>{
    try {

        if(a>0){
           console.log(a+b);
        }

    } catch (error) {
        console.log("a is not greater than 0");
    }finally{
        console.log("additon function is run");
    }
    
}
add(1,6)


// ACTICITY 3; CUSTOM ERROR OBJECT
//task 4
class CustomError extends Error{
    constructor(message){
        super(message),
        this.message ="Custom Error"
    }
}

function throwError(){
    throw new CustomError("This the custom error function")
}

try {
    throwError();
} catch (error) {
    if(error instanceof CustomError){
        console.log('find the custom error',error.message);
    }else{
        console.log('unexpected error ');
    }
    
}

//task 5:

class validationError extends Error{
    constructor(message){
        super(message)
        this.message
    }
}


function validationCheck(input){
    if(input.trim() === ""){
        console.log('input filed is required');
    }
    return "valid input "+ input;
}

try {
    console.log(validationCheck("hello world"));
    console.log(validationCheck(""));
} catch (error) {
    if(error instanceof validationError){
        console.log("cought the error,",error.message);
    }else{
        console.log('cought unexpected error');
    }
}


// ACTIVITIES 4: ERROR HANDLING IN PROMISES
//TASK 6:
const randomPromise = new Promise((resolve,reject)=>{
    let RandomNum = Math.random()

    if(RandomNum <!0){
        reject(`${RandomNum} is not greater than 0`)
    }
    resolve(`${RandomNum} is greater than 0`)
})
randomPromise
.then(()=>console.log("promise is resolve"))
.catch((error)=>{
    console.log('promis is reject');
})

// task 7:
const randomPromise1 = new Promise((resolve,reject)=>{
    let RandomNum = Math.random()
    console.log(RandomNum);
    if(RandomNum >0){
        resolve(`${RandomNum} is greater than 0`)
    }else{
        reject(`${RandomNum} is not greater than 0`)
    }
})

async function otherPromise(){
    try {
        const result = await randomPromise
        console.log(result);
    } catch (error) {
        console.log('unexpected error');
    }
}
otherPromise()

// actitity 5 : gracefull error handling in fetch

//task 8:
fetch("https://invalid.com")
    .then((data)=> data.json())
    .then((data2)=>{
    console.log(data2);
    })
    .catch((error)=>{
    console.log("invalid sana url",error);
    })

// task 9 :

const Invalid = async()=>{
    try {
        let url = await fetch("https://invalid.com")
        let result = await url.json()
        console.log(result);
    } catch (error) {
        console.log("invalid url",error);
    }
}

Invalid()
    










