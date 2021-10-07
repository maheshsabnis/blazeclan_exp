class MyClass {
    add(x,y){
        return parseInt(x) + parseInt(y);
    }

    concat(s1,s2){
        if(s1.length === 0 || s2.length === 0){
            throw new Error('String Cannot be empty');
        }
        return s1 + s2;
    }
}

let o  = new MyClass();
console.log(`Add = ${o.add(3,4)}`);
//console.log(`Concat Error ${o.concat('','Sabnis')}`);
console.log(`Concat Success ${o.concat('Mahesh','Sabnis')}`);


module.exports  = MyClass;