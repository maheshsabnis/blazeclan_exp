import React, {useEffect,useState} from "react";
import Navigator from "./navigator";
import {useRouter} from 'next/router'
import styles from "./../../styles/Home.module.css";

const FirstComponent = () => {
    const [val,setVal] =  useState(0);
     const router = useRouter();
  
  // read data inside the useEffect

  useEffect(()=>{
      // received value from querystreing
    setVal(router.query.Value);
  },[]);
  
  return (
    <div className={styles.container}>
       <Navigator></Navigator> 
      <h3>The First Component</h3>
      <div>
          <strong>
              Value Received from Home is = {val}  
          </strong>
      </div>
    </div>
  );
};

export default FirstComponent;
