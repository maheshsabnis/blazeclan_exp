"use strict";

// using for..of loop
var arr = [10, 20, 30, 40, 50];
console.log('Using for..loop');

for (var i = 0; i < arr.length; i++) {
  console.log("For..loop value = ".concat(arr[i]));
}

console.log();
console.log('Using for..in loop');

for (var _i in arr) {
  console.log("For..loop value = ".concat(arr[_i]));
}

console.log();
console.log('Using for..of loop');

for (var _i2 = 0, _arr = arr; _i2 < _arr.length; _i2++) {
  var n = _arr[_i2];
  console.log("Value = ".concat(n));
}
