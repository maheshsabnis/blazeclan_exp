import React, {Fragment,useState,useEffect} from 'react';

// Synchronous load using import

import {StringUtilities} from './operastions';

const CodeSplitComponent=()=>{
    const strObj = new StringUtilities();
    const length = strObj.getLength('Mahesh Sabnis');
    const upperCase = strObj.changeCase('Mahesh Sabnis');

    const [lg,setLg] = useState(0);
    const [upper,setUpper] = useState('');
    let l=0;
    let up = "";
// async Load
 import('./operastions').then((module)=>{
      let obj = new module.StringUtilities();
    l = obj.getLength('Mahesh R. Sabnis');
     up =  obj.changeCase('Mahesh R. Sabnis');

 }).catch((error)=>{
     console.log(error);
 });

 useEffect(()=>{
    setLg(l);
    setUpper(up);
 },[]);

    return (
        <Fragment>
            Get Length : {length}
            <hr/>
            Upper Case : {upperCase} 
            <hr />
            <strong>
                Length = {lg}
            </strong>
             <hr />
             <strong>
                 Upper Case = {upper}
             </strong>
        </Fragment>
    );

};

export default CodeSplitComponent;
