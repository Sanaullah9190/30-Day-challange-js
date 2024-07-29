// MODULES 
// CREATING AND EXPORTING MODULES 
// TASK:=
const add  = (a,b)=>{
    console.log(a+b);
}

export  {add}

// task 2:
const person = {
    name:"sana",
    class:"Btech",
    price:0,
    greet:function(){
        console.log(this.name);
    }
}
export {person}

// activities 2: named and default export

// task 3:=

const sub = (a,b)=>{
    console.log(a-b);
}
const mult = (a,b)=>{
    console.log(a*b);
}
const divd = (a,b)=>{
    console.log(a/b);
}

export {
    sub,
    mult,
    divd
}

// task 4:
const defFunc = ()=>{
    console.log("i am export default function ");
}
export default defFunc;

// activities 3: importing intires modules 
// task 5:=
export {
        sub,
        mult,
        divd
    }
    
// activities 4: using third party module
//task 6:
import lodash from 'lodash'
const Myname = "sanaullah"
const CapName = lodash.capitalize(Myname)
    
console.log(Myname);
console.log(CapName);


// task 7:

import axios from 'axios'

async function fetchData(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data);
    } catch (error) {
        console.log("error fatching data");
    }
}

fetchData()




