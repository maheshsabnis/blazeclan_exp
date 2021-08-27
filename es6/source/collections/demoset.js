let set = new Set();
// add() to append record, forEach() to read all data , has() to check if value is present in Set
// delete(), to delete data from Set(), keys() to read all Keys, values() to read all values

set.add(10); //--<> key as 10
set.add(20); //--<> key as 20
set.add(30); //--<> key as 30
set.add(40); //--<> key as 40
set.add(10); // repetation, repeated value will be ignored 

// for each add the size is evaluated, if size is 0 the record is added in Set and Key is created 
// same as value of record. For each further  add() call, for the value to be added, the Key 
// is verified in Set(), if found, the record will be ignored else will be added in Set   

// printing size of the set using 'size' property
console.log(`Size of set is = ${set.size}`);

set.forEach((v,i)=>{
    console.log(`Value at index i = ${i} is = ${v} `);
});
// reading all keys and values
console.log(`Keys = ${JSON.stringify(set.keys())} and values = ${JSON.stringify(set.values())}`);
for(let k of set.keys()){
   console.log(k);
}

console.log('Values');
for(let v of set.values()){
    console.log(v);
 }
 
 // remove data from Set
 console.log(`Remove ${set.delete(40)}`);
 console.log(`Size of set is = ${set.size}`);