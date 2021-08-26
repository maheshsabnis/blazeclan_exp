let values = [10,20,30,40,50,60,70,80,90];
// use find() to search record based on condition

let searchMoreThan50 = values.find((x)=>{
    return x>50;
});
console.log(searchMoreThan50);

let records = [
    {eno:1,ename:'A',dname:'d1'},
    {eno:2,ename:'B',dname:'d2'},
    {eno:3,ename:'C',dname:'d3'},
    {eno:4,ename:'D',dname:'d1'},
    {eno:5,ename:'E',dname:'d2'},
    {eno:6,ename:'F',dname:'d3'},
    {eno:7,ename:'G',dname:'d1'},
    {eno:8,ename:'H',dname:'d2'},
    {eno:9,ename:'I',dname:'d3'}
];

function searchByDname(dname){
    let res = records.find((d)=>{
        return dname == d.dname;
    });
    console.log(res);
    return res;
};

console.log(`Record ${JSON.stringify(searchByDname('d1'))}`);
