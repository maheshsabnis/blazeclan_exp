let FirstName = "James";
let MiddleName = "William";
let LastName = "Bond";

// traditional Concatination
let fullName = FirstName + ' ' + MiddleName + ' ' + LastName;
console.log('FullName = ' + fullName);
// ES 6 Template String or INterpolation
// ${<Expression>}, the Expression wil be Parsed, Evaluated and Replaced by Actual Value
fullName = `${FirstName} ${MiddleName} ${LastName}`;
console.log(`Template String =  ${fullName}`);
console.log(`Result of 3+2 = ${3+2}`);
