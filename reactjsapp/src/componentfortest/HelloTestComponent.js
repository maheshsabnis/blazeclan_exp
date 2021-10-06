import React from 'react';

function HelloTestComponent(props){
    // test if condition
    if(!props.message){
        return (
            <h1>Hello, Mr. NoName</h1>
        );
    } 
    // test else condition
    else {
        return (
            <h1>Hello, Mr. {props.message}</h1>
        );
    }
}

export default HelloTestComponent;