// EVENT HANDLING 
// ACTIVITIES 1: BASIC EVENT HANDLING 

//TASK 1

let btn = document.querySelector('#btn')
let para = document.getElementById('text')

btn.addEventListener("click",()=>{
    para.innerText = "30 days js challenge"
})

// TASK 2 : 
 
let img = document.querySelector("#img")
img.addEventListener('dblclick',()=>{
    img.style.opecity = "0"
})

// AVTIVITIES 2 : MOUSE EVENT

// task 3:
let bgChange = document.getElementById('main')

bgChange.addEventListener('mouseover',()=>{
    bgChange.style.backgroundColor = 'red'
})

//task 4;
bgChange.addEventListener("mouseout",()=>{
    bgChange.style.backgroundColor = ''
})

// ACTIVITY 3 KEYBOARD EVENTS
// task 5:

// let input = document.querySelector('#input')

// input.addEventListener("keydown",(e)=>{
//     console.log(`keypress is ${e.key}`);
// })

//task 6:
let input = document.querySelector('#input')

input.addEventListener("keyup",(e)=>{
    console.log(`keypress is ${e.key}`);
})

// ACTIVITY 4: FORM EVENTS 

//task 7:
let form = document.querySelector("#form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let input2 = document.getElementById('input2')
    console.log(input2.value);
})

// task 8:

let lang = document.querySelector('#language')
let para2 = document.querySelector("#para2")

lang.addEventListener("change",(e)=>{
    para2.textContent = e.target.value;
})

// AVTIVITIES 5 :
//TASK 9:
let list = document.querySelector('#list')

list.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})

//task 10:
let btnlist = document.querySelector("#btn")
let lang2 = document.querySelector("#language")

btnlist.addEventListener('click',()=>{
    let listItem = document.createElement('option')
    listItem.textContent = "i am created list item"

    lang2.appendChild(listItem)
})
