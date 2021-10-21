import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from  'react';
import Navigator from './components/navigator';
import {useRouter} from 'next/router';

export default function Home() {
  const [x,setX] = useState(0);
  const router = useRouter();
  const click=()=>{
    setX(x*x);
    // navigate to the firstComponent
    router.push({
      pathname: '/components/firstComponent',
      query: {Value:x}  // Value is key having the x passed in querystring    
    });
    // http://localhost:3000/components/firstComponent?Value=[value-of-x]
  };
  return (
    <div className={styles.container}>
      
      <Navigator></Navigator>
      <h1>The Index Component</h1>
      <input type="text" value={x} onChange={(evt)=> setX(parseInt(evt.target.value))}/>
      <button onClick={click}>
         Click Me
      </button>
      <hr />
      <div>
         x = {x}
      </div>
    </div>
  )
}
