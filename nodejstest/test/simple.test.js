const expect = require("chai").expect;

const MyClass = require('./../simple');

describe('Testing MyClass', () => {
    let obj = new MyClass();

    it('should add 2 numbers',()=>{
        let x = 100;
        let y = 200;
        let expected = 300;

        let actual = obj.add(x,y);

        expect(actual).to.equal(expected);
    });


    it('should throw error if string is empty',()=>{
        let x = '';
        let y = 'Sabnis';
        let expected = 'String Cannot be empty';

        let actual = obj.concat(x,y);

        expect(actual).throw(expected);
    });


    it('should concatinate two strings',()=>{
        let x = 'Mahesh';
        let y = 'Sabnis';
        let expected = 'MaheshSabnis';

        let actual = obj.concat(x,y);

        expect(actual).to.be(expected);
    });
});