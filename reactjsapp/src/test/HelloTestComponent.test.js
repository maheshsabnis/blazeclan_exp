import React from 'react';

import {render,unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';
import HelloTestComponent from '../componentfortest/HelloTestComponent';

describe('The Test Suite for Hello Test Component', () => {
    // declare a global  variable for all test cases
    let domContainer = null;
    beforeEach(()=>{
        // lets create a 'div' element in the domContainer
        domContainer = document.createElement('div');
        // append this domContainer in the document body in the memory
        document.body.appendChild(domContainer);
    });

    it('render the component without the props',()=>{
        // act
        act(()=>{
            // in the domCOntainer in memory the component will be rendered 
            render(<HelloTestComponent/>, domContainer);
        });
        // assertion
        expect(domContainer.textContent).toBe("Hello, Mr. NoName");
    });
    it('render the component with the props mpassed to the component',()=>{
        // act
        act(()=>{
            // in the domCOntainer in memory the component will be rendered 
            render(<HelloTestComponent message={'Mahesh'}/>, domContainer);
        });
        // assertion
        expect(domContainer.textContent).toBe("Hello, Mr. Mahesh");
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