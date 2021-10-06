import React from 'react';

import {shallow,mount} from './../enzyme';

import ListOptionsComponent from '../componentfortest/ListOptionsComponent';
import ListComponent from '../componentfortest/ListComponent';

describe('Test Suite for React Parent to Child Component', () => {
    it('show render the ListComponent when an array is passed to it',()=>{
        // arrange
        const names = ["James Bond", "Jason Bourn", "Jack Reacher", "Indiaia Jones"];
        // act
        const domTree  =shallow(<ListComponent names={names}/>);
        // simulate the DOM Tree that is created in memory 
        console.log(domTree.debug());
        // check if the DOM contains an element with class as 'names'
        expect(domTree.find(".names").exists()).toBe(true); 
    });


    it('show render the ListComponent with an element with class as empty',()=>{
        // arrange
        const names = [];
        // act
        const domTree  =shallow(<ListComponent names={names}/>);
        // simulate the DOM Tree that is created in memory 
        console.log(domTree.debug());
        // check if the DOM contains an element with class as 'empty'
        expect(domTree.find(".empty").exists()).toBe(true); 
    });

    it('show render the ListComponent with children as li when an array is passed to it',()=>{
        // arrange
        const names = ["James Bond", "Jason Bourn", "Jack Reacher", "Indiaia Jones"];
        // act
        const domTree  =mount(<ListComponent names={names}/>);
        // simulate the DOM Tree that is created in memory 
        console.log(domTree.debug());
        // check if the DOM contains an element with class as 'names'
        expect(domTree.find("li").exists()).toBe(true); 
    })

});