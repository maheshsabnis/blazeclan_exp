// using function

// THe COnstructor Function
function Person(id,name,age){
    this.Id = id;
    this.Name = name;
    this.Age = age;

    this.getDetails = function(){
        console.log('====================================');
        console.log(`Id = ${this.Id}, Name = ${this.Name} , Age = ${this.Age}`);
        console.log('====================================');
    };
}

let person = new Person(101, 'MAhesh', 45);
person.getDetails();

// use the Object Creational Strategy
// use the Object.create() for  creating a Deep Copy of the Object.
// But they are different
let p1 = Object.create(person); 
p1.getDetails();
p1.Id = 201;
p1.Name = "Neeta";
p1.Age = 43;
p1.getDetails();
console.log('====================================');
console.log(person === p1); // print false
console.log('====================================');

class Employee {
    constructor(eno,ename){
        this.EmpNo = eno;
        this.EmpName = ename;
        console.log('====================================');
        console.log('Insance Created');
        console.log('====================================');
    }
    display(){
        console.log('====================================');
        console.log(`EmpNo = ${this.EmpNo} and EmpName = ${this.EmpName}`);
        console.log('====================================');
    }
}

let e1  =new Employee(101,'Mahesh');
e1.display();
let e2  =Object.create(e1);
e2.EmpNo = 301;
e2.EmpName = "Tejas";
e2.display();