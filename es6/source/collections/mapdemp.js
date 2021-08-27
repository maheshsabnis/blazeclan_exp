// save data in Map() as key/Value pair 
let map = new Map();
// use set() method to add entry in Map, the 'size' property for size of Map()
// 'get()' to read entry at Key, use 'has()' to check if the key present in Map()
// 'delete()', to delere record based on key

map.set(1, {eno:101,ename:'Mahesh1'});
map.set(2, {eno:102,ename:'Mahesh2'});
map.set(3, {eno:103,ename:'Mahesh3'});
map.set(4, {eno:104,ename:'Mahesh4'});
map.set(5, {eno:105,ename:'Mahesh5'});
map.set(5, {eno:106,ename:'Mahesh6'}); // repetation for key, 

// map will not accept a duplicate kay
// if the duplicate key occures suring 'set()' call, the previous key and its valeu will be
// replaced by the new value 
console.log(`Size of map is = ${map.size}`);
// read value for key 5
console.log(`Value in map for key =5 is = ${JSON.stringify(map.get(5))}`);
// check if the record found
console.log(`Record available for key 5 is = ${map.has(5)}`);

// iterate over the map()
map.forEach((value,key)=>{
    console.log(`Value ate key = ${key} is= ${JSON.stringify(value)}`);
});
// delete record
console.log(`Record available for key 5 is = ${map.delete(5)}`);
// iterate over the map()
map.forEach((value,key)=>{
    console.log(`Value ate key = ${key} is= ${JSON.stringify(value)}`);
});




