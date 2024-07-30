// ARRAYS

// ACTIVITIES 1 - ARRAY CREATION AND ACCESS

//TASK 1:=
let arr = [1,2,3,4,5]
console.log(arr);

//TASK 2=
console.log(arr[arr.length -5],arr[arr.length-1])

// ACTIVITIES 2- ARRAY METHODS

//TASK 3:=
let arr1 = [2,4,6,8]
arr1.push(10)

console.log(arr1);

//TASK 4 =
arr1.pop(arr1[arr1.length-1])
console.log(arr1);

//task 5=
arr1.shift(arr1[arr1.length-4])

console.log(arr1);

//task 6
arr1.unshift(4)
console.log(arr1);

// ACTIVITIES 3- ARRAY METHODS(INTERMIDEATE)

//TASK 7:=

let Arr = [2,4,6,8];

const newarr = Arr.map((newArr)=>{
    return newArr *2
})

console.log(newarr);

//task 8=:

let Arr1 = [2,4,6,9,7,5];

const EvenArr = Arr1.filter( even => even %2 ==0)

console.log(EvenArr);

//task 9 = 

let Arr2 = [2,4,6,9,7,5];

const reducer = Arr2.reduce((acc,ele)=> acc+ele)

console.log(reducer);

// ACTIVITIES 4- ARRAY litration

//TASK 10:=

let Arr3 = [2,4,6,9,7,5];

for(let i=0 ; i< Arr3.length; i++){
    console.log(Arr3[i]);
}

// task 11=

Arr3.forEach(element => {
    console.log(element);
});

// ACTIVITIES 5- multidimensonal  ARRAY 

//TASK 13:=

let mutiDimArr = [[1,3],[4,6],[6,7]]
for(let i = 0; i<mutiDimArr.length ;i++){
    console.log(mutiDimArr[i]);
}
console.log(mutiDimArr);

//task 12

let a2d = [[3,4],[4,6]]
console.log(mutiDimArr[1][2]);




