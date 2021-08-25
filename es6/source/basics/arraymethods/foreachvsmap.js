let names = ["Mahesh", "Tejas","Ramesh", "Pushkar", "Leena", "Neeta", "Neema", "Ajay", "Ram", "Nandu", "Anil", "Keshav","Abhay", "Jaywant","Anil", "Shyam","Shweta"];

let res1 = names.forEach((n,i)=>{
    if(n.length > 5){
        n = n.toUpperCase();
        console.log(`Uppercase ${n}`); 
        return n;
    }
});
console.log('Useing forEach()');
console.log(res1);
console.log(names);

let res2 = names.map((n,i)=>{
    if(n.length > 5){
        n = n.toUpperCase();
        console.log(`Uppercase ${n}`); 
        return n;
    }
});
console.log('Useing map()');
console.log(res2);
console.log(names);

let res3 = names.filter((n,i)=>{
    if(n.length > 5){
        n = n.toUpperCase();
       
        return n;
    }
});
console.log('Useing filter()');
console.log(res3);
console.log(names);

