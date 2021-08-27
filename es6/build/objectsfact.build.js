"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var x = 10;
var y = x;
console.log("x = ".concat(x, " and y=").concat(y));
y = 100;
console.log("x = ".concat(x, " and y=").concat(y));
var n1 = "Mahesh";
var n2 = n1;
console.log("n1 = ".concat(n1, " and n2= ").concat(n2));
n2 = "Sabnis";
console.log("n1 = ".concat(n1, " and n2= ").concat(n2)); // using objects

var obj1 = {
  a: 10
};
console.log("obj1.a = ".concat(obj1.a));
var obj2 = obj1; // both will point to same location 

console.log("obj1.a = ".concat(obj1.a, " and obj2.a = ").concat(obj2.a));
obj2.a = 1000; // this will modify obj1.a as well

console.log("After modification obj2.a , obj1.a = ".concat(obj1.a, " and obj2.a = ").concat(obj2.a)); // set the obj1 to null, inform the browser that obj1 is no more required

obj1 = null; // release a link between the obj1 and its value storage
// obj1 is garbage collected for the code running in JSOM (JavaScript Object Model)
// obj2 will have an exclusive control on the value i.e. a:1000 

console.log("After modification obj1 to null ,obj2.a = ".concat(obj2.a)); //obj1.b = 5000; //  reassign of data to obj1.a is not allowed
//console.log(`obj1.b = ${obj1.b} and obj2.a = ${obj2.a}`);
// to create a new copy ate separate location for object, use 
// Object.assign(target,source);
// target: the object that will be created
// source: the object from whihc the target object will be created

var obj3 = Object.assign({}, obj2);
console.log("obj2.a = ".concat(obj2.a, " and obj3.a = ").concat(obj3.a));
obj3.a = 8000;
console.log("After modification obj3.a , obj2.a = ".concat(obj2.a, " and obj3.a = ").concat(obj3.a)); // we can also copy the obj2 into an extsting anonymous object
// e.g. there exist an object having b:10

var obj4 = Object.assign({
  b: 10
}, obj2);
console.log("obj2 = ".concat(JSON.stringify(obj2), " and obj4 = ").concat(JSON.stringify(obj4))); // can we assign obj2 in already existing object?

var obj5 = {
  b: 20,
  c: 30
};
var obj6 = Object.assign(obj5, obj2); // enhance the obj5 by copying schema and data of obj2 in it

console.log("obj2 = ".concat(JSON.stringify(obj2), " and obj6 = ").concat(JSON.stringify(obj6))); // enhance the same object by passing new schema to it
// Object.assign() will replace the original object by adding same object with enhanced preoperties

obj6 = Object.assign({
  d: 90,
  e: 70
}, obj6); // immutable object by enhancing it 

console.log("obj6 = ".concat(JSON.stringify(obj6))); // in ES 6, the Immutability is implemented using spread operator syntax ...obj
// where obj is the immutable object

obj6 = _objectSpread(_objectSpread({}, obj6), {}, {
  x: 100,
  y: 200,
  z: 300,
  p: 400
});
console.log("obj6 = ".concat(JSON.stringify(obj6))); // the spread in ES 6, will modify the same object w/o any overwrite using getOwnProperty() 
// and Iterator symbol to add new properties and values in existing object
