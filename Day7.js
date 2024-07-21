// objects
//ACTIVITIES 1 ; OBJECT CREATION AND ACCESS

// TASK 1 = 
let book = {
    title:"Games of Throne",
    author:"Sana",
    year:2024,
}

// console.log(book);

//task 2;
// console.log(book.title,book.author);

//ACTIVITIES 2 ; OBJECT method

// TASK 3 =
book.getDetails = function(){
    return `Book title is ${book.title} and authour is ${book.author}`
}
// console.log(book.getDetails());


// task 4 
book.updateYear = function(year){
    book.year = year
    return `publish year is ${book.year}`
}

// console.log(book.updateYear(2023));

//ACTIVITIES 3 ; NESTED OBJECT

// TASK 5 =

let librarry = {
    name:"Store 1",
    books:[
        {title:"hello",author:"sana",year:2002},
        {title:"nice",author:"ashish",year:2009},
        {title:"pink",author:"aman",year:2008},
        {title:"red",author:"saksham",year:2006},
        {title:"green",author:"satyam",year:2005},
    ]
}

// console.log(librarry);

//task 6 =>

for(let i = 0 ; i<librarry.books.length ; i++){
    // console.log(`Name: ${librarry.name} \n Title: ${librarry.books[i].title}`);
}

//ACTIVITIES 4 ; THE THIS KEYWORD
// TASK 7 =

librarry.getDetail = function(i){
    return `Title: ${this.books[i].title} and Year: ${this.books[i].year}`
}

// console.log(librarry.getDetail(3));

//ACTIVITIES 5 ; need to do this net day
// TASK 7 =

