// CLASSES 
// ACTIVITIES 1: CLASS DEFINATION
// task 1:
class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        return `hello my name is ${this.name} and my age is ${this.age}`
    }
    updateAge(newAge){
        this.age = newAge
        return `your age is updatd and your newAge is ${this.age}`
    }
    static greetingMassege(Name){
        return ` Hello my anme name is ${Name}`
    }
}

const data = new Person('jonny baba',68)
console.log(data.greet());

//task 2:
console.log(data.updateAge(78));
 
// ACTIVITIES 2: CLASS INHERITANCE
//task :3

class Person2{
    constructor(studentId){
        this.studentId = studentId
    }
    loginID(){
        return `you are login and your Login ID is ${this.studentId} `
    }
}

class Student extends Person2{
    static studentCount = 0
    constructor(studentId){
        super(studentId)
        Student.studentCount++
    }
    
}

const id = new Student(8)
console.log(id.loginID());

//task 4:
class Person3{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greeting(){
        return `Hello my name is ${this.name} and my age is ${this.age}`
    }
    updateAge(newAge){
        this.age = newAge
        return `your age is updatd and your newAge is ${this.age}`
    }

}

class Student2 extends Person3{
    constructor(name,age,studentId){
        super(name,age)
        this.studentId = studentId
    }
    greet(){
        return `${super.greeting()} and student id is ${this.studentId}`
    }
}

const balak = new Student2('bob',67,8)
console.log(balak.greet());
console.log(balak.updateAge(88));

// ACTIVITIES 3: STATIC METHOD AND PROPERTIES
// task 5:
console.log(data.greetingMassege('sanaullah'));

// task 6:
const student3 = new Student(11)
const student4 = new Student(12)
const student5 = new Student(13)

console.log(`total number of student is ${Student.studentCount}`);

//ACTIVITIES 5: GETTERS AND SETTERS
//TASK 9

class Account{
    #balance = 0;
    Deposite(amount){
        this.#balance += amount;
        return`Deposite ${amount}\n Available Balance ${this.#balance}`
    }
    withdraw(amount){
        if(this.#balance < amount){
            console.log('insuficent balance',this.#balance);
            return;
        }
        this.#balance -=amount;
        return`Withdraw ${amount}\n Available Balance ${this.#balance}`
        
    }
}

const account = new Account()
console.log(account.Deposite(200));
console.log(account.withdraw(50));

// task 10
console.log(account.Deposite(200));
console.log(account.withdraw(20));
console.log(account.Deposite(30));
console.log(account.withdraw(40));



