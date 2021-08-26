let values = [10,20,30,40,50,60,70,80,90];
let sum = 0;
values.forEach((n,i)=>{
    sum+=n;
}); 
console.log(sum);

// using reduce function
var res1 =  values.reduce((finalSum, currentRecord,i,v)=>{
    console.log(`previous ${finalSum} current ${currentRecord} index ${i} arr ${v}`);
     return finalSum+currentRecord;
});
console.log(`Using reduce() to calculate sum = ${res1}`);

let names = ['A', 'B', 'C', 'D', 'E', 'E', 'D', 'C', 'B','A', 'A', 'C', 'E','E', 'F'];
// finding out the frequency of the strings in array
let frequency = names.reduce((srcNames,currentName)=>{
    // srcNames is an object that represents the final State after the execution
    // previousValue of the srcNames will be empty object {}
    // currentName: is each record in iteration of arry 
    console.log(`${JSON.stringify(srcNames)} and ${currentName}`);
    // logic for frequency
    // the 'in' operator will execute under the reduce() function and used for iteration
    if(currentName in srcNames){
        srcNames[currentName]++; // add the count of current record in srcName object and increase the frequency
    } else {
        srcNames[currentName] = 1; // for no repeate match the frequncy will be 1
    }

    // return the final state from array containing frequency of records
    return srcNames;
},{});
console.log(frequency);

// display data by group by dname
console.log();
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

// source will be array
// property, name of tyhe property for group
function displayGroupByPropertyName(source, property){

    let result = source.reduce((groupResult, record)=>{
        console.log(`Group Result ${JSON.stringify(groupResult)} and Record = ${JSON.stringify(record)}`);
        // lets read the key for group
        let key = record[property]; // group key (all dname values)

        // read the record match by the key. If no record in key then the 
        // groupResult wull be empty else, for the key the matched record will be added in group
        if(!groupResult[key]){
            groupResult[key] =[]; // empty for no record match with key
        }
        // add the matched record in group
        groupResult[key].push(record);
        
        return groupResult;
    },{});

    return result;
    
};

let group = displayGroupByPropertyName(records, 'dname');
console.log(`Group by Records ${JSON.stringify(group)}`);
