//  ACRIVITY 1: FUNCTION DECLARATION 

// TASK 1:-


function oddEvenCheck( num){
    if(num%2 ==0){
        console.log(num," is even Number");
    }else{
        console.log(num,"is Odd Number");
    }
}

oddEvenCheck(5)

// TASK 1:-

function square(num ,pow){
    return sq = num**pow
}
console.log(square(3,3));

//  ACRIVITY 2: FUNCTION EXPRESSION 

// TASK 3:-

function maxNumber (num1,num2){
    if(num1>num2){
        console.log(num1,"is greater number");
    }else{
        console.log(num2,"is greater number");
    }
}

maxNumber(10,8)

//TASK 4:
function addString(name,title){
    return name+" "+title;
}

console.log(addString("sana","ansari"));


//  ACRIVITY 3: ARROW FUNCTION 

// TASK 5:-
const addNum =(num1 , num2)=>{
    return num1+num2;
}

console.log(addNum(5,7));

// TASK 6:-

const checkCharect =((str,charector)=>{
    return str.includes(charector)
})

console.log(checkCharect("sanaullah","p"));

//  ACRIVITY 4: FUNCTION PARAMETER AND DEFOULT VALUE 

// TASK 7:-

const product =((num1,num2=7)=>{
    return num1*num2 
})

console.log(product(3));

// TASK 8;

const greatting =(name ,age = 18)=>{
    return ([name,age])
}
console.log(greatting("sanaullah"));

//  ACRIVITY 5: HIGHER ODER FUNCTION 

// TASK 9:-

const add =(a,b)=>{
    console.log(a+b);
}

const higherOber =(fun,num)=>{
    for(let i=0;i<= num; i++){
        fun(i,i)
    }
}

higherOber(add,6)

let higherOderFun =(fun1,func2,value)=>{
    return func2(fun1(value))
}

let fun1 =(num)=>{
    return num*5
}


let fun2 =(num)=>{
    return num*num
}


console.log(higherOderFun(fun1,fun2,6));
