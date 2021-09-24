import React, { Component } from 'react';

function MyFunctionalComponent(props){
    // local property
    const value = 'I am the Property from the FUnctional Component';
    let name = 'Mahesh';
    // Inner FUnction
    function display(){
        alert('I am dipslay');
        name = 'Mahesh Sabnis';
        console.log(`Name is = ${name}`);
    }
    return (
        <div className="container">
            <h3>The First Funcaitonal Component</h3>
            <strong>
                Data Received from Parent = {props.message}
            </strong>
            <br />
            <strong>
                {value}
            </strong>
            <br />
            <input type="button" value="Click Me" className="btn btn-warning"
             onClick={display}/>
             <br />
             <strong>
                 {name}
             </strong>
             <br />
             <ExpressionComponent data={value}></ExpressionComponent>
             <br />
             <ExpressionNoReturnComponent info={name}></ExpressionNoReturnComponent>
        </div>
    );
}


// Constance FUnction Expresion as a component that returns HTML
const ExpressionComponent=(props)=>{

    // local functions are declared as constant expressions
    const myFunction=()=>{
        alert('HAHAHA HOOOOOO HIIIIHIIII');
    };

    return (
        <div className="container">
            <h4>The Constant HTML Component That is Returning HTML</h4>
            <strong>
                {props.data}
            </strong>
            <br />
            <input type="button" value="CLick"  onClick={myFunction}/>
        </div>
    );
}

// Constant Expression Component whihc does not retuns HTML

const ExpressionNoReturnComponent=(props)=>(
  
    <div className="container">
        <h4>The COmponent which does not returns the HTML</h4>
        <strong>
            {props.info}
        </strong>
    </div>
);

 


export default MyFunctionalComponent;