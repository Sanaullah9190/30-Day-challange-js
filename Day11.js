// PROMISES AND ASYNC / AWIAT 
// ACTIVITIES 1 : UNDERSATANDING PROMISE

//task 2:

new Promise((resolve,reject)=>{
    console.log("hello before the resolve");
    setTimeout(()=>{
        resolve()
    },2000)
})
.then(()=>{
    console.log("after the resolve promise in 2 sec");
})

// task 2:

new Promise((resolve,reject)=>{
    console.log("hello before the resolve");
    setTimeout(()=>{
       reject()
    },2000)
})
.then(()=>{
    console.log("apromise is resolve after 2 sec");
}).catch((error)=>{
    console.log(`promise is reject after 2 sec ${error}`);
})

// activites: 2 Chainnig Pomise
//task 3:

const ChainPromise = new Promise((resolve,reject)=>{
    resolve({
        name:"sanaullah",
        rollno:45,
        class:"Btech"
    })
})
ChainPromise
.then((data)=>{
    console.log(data);
    return data.name
}).then((name)=>{
    console.log(name);
}).finally(()=>{
    console.log("promise is finished");
})

// ACTIVITY 3: USING ASYNC AWAIT
//TASK 4:
const PromiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name:"sanaullah",
            rollno:45,
            class:"Btech"
        })
    },2000)
})
const promiseTwo = async function(){
    const data = await PromiseOne
    console.log(data);
}
promiseTwo()

//task 5:

const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
           if(!error){
                resolve({
                    name:"sanaullah",
                    rollno:45,
                    class:"Btech"
            })
           }else{
            reject()
           }
    },2000)
})
promiseFour = async function(){
    try {
        const data = await PromiseOne
        console.log(data);
    } catch (error) {
        console.log("promise is rejected");
    }
}
promiseFour()

// ACTIVITES FETCHING DATA FROM API

//task 6:

fetch('http://api.tvmaze.com/search/shows?q=golden girls')
.then((responce)=> responce.json())
.then((data)=> data[0])
.then((show)=>{
    console.log(show.show.name);
    console.log(show.show.url);
})
.catch((error)=>{
    console.log("error",error);
})

// task 7:

const apiFatch = async()=>{
    try {
        let url = await fetch('https://ec.europa.eu/taxation_customs/vies/rest-api/ms/DE/vat/122268496')
    
        const weather = await url.json()
        console.log(weather.viesApproximate.matchName);
    } catch (error) {
        console.log("eeror to fetch the wether");
    }
}

apiFatch()

// ACTIVITIES 5: CONCURRENT PROMISE
// TASK 8:=

const promiseA = new Promise((resolve)=> setTimeout(()=>resolve("Promise A is resolve"),2000))
const promiseB = new Promise((resolve)=> setTimeout(()=>resolve("Promise B is resolve"),4000))
const promiseC = new Promise((resolve)=> setTimeout(()=>resolve("Promise C is resolve"),1000))

Promise.all([promiseA,promiseB,promiseC])
.then((value)=>{
    console.log(`the value of all promise is ${value}`);
})

//TASK 9
Promise.race([promiseA,promiseB,promiseC])
.then((value)=>{
    console.log(`first resolve ${value}`);
})




