// ACTIVITIES:1
//TASK 1:-

let editHtml = document.getElementById("text")
editHtml.innerText = "Chai or code "

// TASK 2:-

// let editByClass = document.getElementsByClassName("main")
let editByClass = document.querySelector('.main')
editByClass.style.backgroundColor = 'pink'

// ACTIVITIES:2
//TASk 3:-
let divCreate = document.createElement('div')
divCreate.textContent = "I am created div"
// document.body.appendChild(divCreate)
document.querySelector('.main').appendChild(divCreate)

//task 4 :-
let liCreate = document.createElement('li')
liCreate.textContent = ' I am create list'

document.querySelector('.list').appendChild(liCreate)

// ACTIVITIES:3
//TASk 5:-
let removeElement = document.querySelector('#text')
document.body.removeChild(removeElement)

// task 6 

let removeLast = document.querySelector('.list')
if(removeLast.lastChild){
    removeLast.removeChild(removeLast.lastElementChild)
}

// ACTIVITIES:4
//TASk 7:-

let img = document.createElement('img')
// img.src = "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fletsenhance.io%2Fstatic%2F8f5e523ee6b2479e26ecc91b9c25261e%2F1015f%2FMainAfter.jpg&imgrefurl=https%3A%2F%2Fletsenhance.io%2F&docid=-t22bY2ix3gHaM&tbnid=tYmxDgFq4MrkJM&vet=12ahUKEwjSscr0pbyHAxVwcGwGHdMPCbkQM3oECBUQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwjSscr0pbyHAxVwcGwGHdMPCbkQM3oECBUQAA"
// document.querySelector('.main').appendChild(img)


//task 8:-
let classRemove = document.querySelector('div')
// console.log(classRemove);

classRemove.classList.remove('container')
classRemove.classList.add('container')

// ACTIVITIES:5
//TASk 9:-

let clickBtn = document.querySelector('#btn')
let para = document.getElementById('text')
clickBtn.addEventListener('click',()=>{
    para.innerText = "i am change by button"
})

// task 10 :-
let eventHand = document.querySelector('.main')

eventHand.addEventListener('mouseover',()=>{
    eventHand.style.border = "yellow"
})


