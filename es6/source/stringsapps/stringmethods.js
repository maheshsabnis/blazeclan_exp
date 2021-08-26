let strData = "The James Bond series focuses on a fictional British Secret Service agent created in 1953 by writer Ian Fleming, who featured him in twelve novels and two short-story collections. In the movies, Rager Moore was the Best Bond. Since Fleming's death in 1964, eight other authors have written authorised Bond novels or novelisations: Kingsley Amis, Christopher Wood, John Gardner, Raymond Benson, Sebastian Faulks, Jeffery Deaver, William Boyd and Anthony Horowitz. The latest novel is Forever and a Day by Anthony Horowitz, published in May 2018. Additionally Charlie Higson wrote a series on a young James Bond, and Kate Westbrook wrote three novels based on the diaries of a recurring series character, Moneypenny.";

// search an index where 'in' is present
console.log(`Index of  'in' is = ${strData.indexOf('in')}`); // ES 3 and ES 5 methods starts from 0th index
// START READING STRING FROM 90TH POSITION
console.log(`Index of  'in' is = ${strData.indexOf('in',90)}`);
// use 'search()' method to start searching from 0th index always
// stot at the first occureacne of match pattern 
console.log(`Using search() for searching 'in' is = ${strData.search('in')}`);
// using match() to read all occurances of pattern
// match() method acceps regular expression
// serach only 'in' match as a word string or may be a substrin in word
// case sensitive
console.log(`All Occurances of 'in' is = `);
console.log(strData.match(/in/g)) 
// searchg for 'in' and 'In'
console.log(`All Occurances of 'in' is =`); 
console.log( strData.match(/in/gi));

let n = ['Amit', 'Ajit', 'Amar', 'Ajay', 'Amol', 'Ajey'];

let res1 = n.map((r,i)=>{
    return r.startsWith('Am');
}); 
console.log(res1);



