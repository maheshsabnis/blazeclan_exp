import React from 'react';

import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import EventTestComponent from './../componentfortest/EventTestComponent';
describe('The Test Suite for Hello Test Component', () => {
    let domContainer = null;
    beforeEach(()=>{
        domContainer = document.createElement('div');
        document.body.appendChild(domContainer);
    });

    it('render the component without the props',()=>{
        // act
        act(()=>{
            // render the component in memory
            render(<EventTestComponent/>, domContainer);
        });

        // look for the button element 
        const button = document.querySelector('button');
        // seact the div with className as '.dv'
        const div = document.querySelector(".dv");
        // check if the button's innerHTML is Save
        expect(button.innerHTML).toBe('Save');
        // check if the innerHTML ofdiv is false
        expect(div.innerHTML).toBe('false');
        // lest dispacth the 'click' event on button and makse sure that the
        // the innerHTML of button is 'Update' and innerHTML of div is true

        act(()=>{
            button.dispatchEvent(new MouseEvent('click', {bubbles:true}));
        });
        expect(button.innerHTML).toBe('Update');
        expect(div.innerHTML).toBe('true');
    });
     
    afterEach(()=>{
        // clean up operations
        // 1. unmount the dom
        unmountComponentAtNode(domContainer);
        // 2. remove it from the memory
        domContainer.remove();
        // 3. reset it
        domContainer = null;
    });
});