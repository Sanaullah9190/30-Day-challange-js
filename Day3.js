// ************ ACTIVITY 1: IF ELSE STATEMENTS ******
// TASK 1 :
let number = 0

if(number >0){
    console.log("Your Number is Positive",number);
}else if(number < 0){
    console.log("Your Number is negative",number);
}else if(number == 0){
    console.log("Your Number is Positive with zero",number);
}

// TASK 2: 

let age = 16

if(age >= 18){
    console.log("You are eligible for the vote");
}else{
    console.log(`you are not eligible for the vote `);
}

// ************ ACTIVITY 2:  NESTED IF-ELSE STATEMENTS ******
// TASK 3 :

let a = 9
let b = 7
let c = 5

if(a>b && a>c){
    console.log(`The graetest number is ${a}`);
}else if(b > a && b > c){
    console.log(`The graetest number is ${b}`);
}else if(c > a && c > b){
    console.log(`The graetest number is ${c}`);
}

// ************ ACTIVITY 3:  NESTED IF-ELSE STATEMENTS ******
// TASK 4:

let date  = new Date()
let day = date.getDay()

switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;
}

// TASK 5:
let score = 34

switch(true){
    case (score >=90):
        console.log("Grade is A");
    break;
    case (score <=90 && score > 80):
        console.log("Grade is B");
    break;
    case (score <=80 && score > 70):
        console.log("Grade is C");
    break;
    case (score <=70 && score > 60):
        console.log("Grade is D");
    break;
    case (score <=60 && score > 50):
        console.log("Grade is E");
    break;
    case (score <=50 && score > 40):
        console.log("Grade is F");
    break;
    case (score <=40):
        console.log("Grade is G");
    break;
}

// ************ ACTIVITY 4:  NESTED IF-ELSE STATEMENTS ******
// TASK 6:

let num  =  7
// console.log(num % 2 == 0);

if(num % 2 == 0){
    console.log(num,"is even Number");
}else{
    console.log(num, "is odd Number");
}

// ************ ACTIVITY 5:  NESTED IF-ELSE STATEMENTS ******
// TASK 7 :

let date1 = new Date()
let year = date1.getFullYear()
// console.log(year);

if(year % 4 ==0 && year % 100 !== 0 || year % 400 == 0){
    console.log(year," is leap year");
}else{
    console.log(year," is not leap year");
}





