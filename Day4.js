// ************ ACTIVITY 1:  FOR LOOP ******
// TASK 1 :

for(let i = 1 ; i<=10 ; i++){
    console.log(i);
}

// task 2:

for(let i = 1 ;i<=10 ; i++){
    console.log(`5 * ${i} = ${i*5}`);
}

// ************ ACTIVITY 2:  FOR LOOP ******
// TASK 3 :


let j = 1
let sum  = 0;

while (j<=10) {
    sum += j
    j++
}

// console.log(sum);

//task = 4

let k = 10

while(k >= 1){
    console.log(k);
    k--
}

// ************ ACTIVITY 3:  FOR LOOP ******
// TASK 5 :

let i = 1

do {
    console.log(i);
    i++
} while (i<=5);

// task 6 ;

let f = 1
let fac = 1;

do {
    fac *= f
    f++
} while (f<=5);
console.log(`factorial of 5 is ${fac}`);

// ************ ACTIVITY 4:  FOR LOOP ******
// TASK 7 :

for(let i = 1 ; i<=5 ; i++){
    console.log("*".repeat(i));
}

for(let i = 1 ; i<=5 ; i++){
    for(let j= 1 ; j<=i ; j++){
        console.log("*");
    }
    console.log("\n");
}

// ************ ACTIVITY 5:  FOR LOOP ******
// TASK 8 :

for(let i = 1 ; i<=10 ; i++){
    if(i === 5){
        continue
    }
    console.log(i);
}

// task 8 :

for(let i = 1 ; i<=10 ; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}
