// using WeakSet

let sw = new WeakSet();
let a = {id:1,name:'A'};
let b = {id:2,name:'B'};
let c = {id:3,name:'C'};
let d = {id:4,name:'D'};
let e = {id:1,name:'A'}; // a and e with values are same

// add them in WeakSet

sw.add(a); // store reference of object in WeakSet
sw.add(b);
sw.add(c);
sw.add(d);
sw.add(e);
sw.add(a); // repeated entry

console.log(`Is 'e' present is  = ${sw.has(e)}`);
// nullfy the e
e = null; // setting object to null will remove its reference from WeakSet()
console.log(`Is 'e' present is  = ${sw.has(e)}`);



