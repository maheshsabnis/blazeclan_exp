let o1 = {name:'Mahesh'};
console.log(`o1 = ${JSON.stringify((o1))}`);
// store the object in array
let arr = [o1];
console.log(`Data in Array is = ${JSON.stringify(arr)}`);
o1 = null; // destroy the link between o1 ref and its value
console.log(`Data in Array is after o1 is destroyed = ${JSON.stringify(arr)}`);
// reinitialize the o1 by ginving the rebirth
o1 = {name:'Kumar', age:45}; // rebirth to the object
// push the object into the array
arr.push(o1);
console.log(`Data in Array is afetr rebirth of o1 = ${JSON.stringify(arr)}`);


let arr1 = [
    {dept:{dno:10,dname:'D1'}, emps:[{eno:101,ename:'A'},{eno:101,ename:'A'},]},
    {dept:{dno:10,dname:'D1'}, emps:[{eno:101,ename:'A'},{eno:101,ename:'A'},]},
    {dept:{dno:10,dname:'D1'}, emps:[{eno:101,ename:'A'},{eno:101,ename:'A'},]},
    {dept:{dno:10,dname:'D1'}, emps:[{eno:101,ename:'A'},{eno:101,ename:'A'},]},
    {dept:{dno:10,dname:'D1'}, emps:[{eno:101,ename:'A'},{eno:101,ename:'A'},]},
]

