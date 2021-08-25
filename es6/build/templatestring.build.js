"use strict";

var FirstName = "James";
var MiddleName = "William";
var LastName = "Bond"; // traditional Concatination

var fullName = FirstName + ' ' + MiddleName + ' ' + LastName;
console.log('FullName = ' + fullName); // ES 6 Template String or INterpolation
// ${<Expression>}, the Expression wil be Parsed, Evaluated and Replaced by Actual Value

fullName = "".concat(FirstName, " ").concat(MiddleName, " ").concat(LastName);
console.log("Template String =  ".concat(fullName));
console.log("Result of 3+2 = ".concat(3 + 2));
