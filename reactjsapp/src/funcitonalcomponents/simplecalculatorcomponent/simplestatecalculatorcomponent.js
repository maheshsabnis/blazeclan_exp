import React, {useState} from "react";

const SimpleStateCalculatorComponent = () => {
    // defining the state
    // syntx of destrcturing
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [res,setRes] = useState(0);

    const clear=()=>{
        setX(0);
        setY(0)
    }

    const add=()=>{
        setRes(x+y);
    }

  return (
    <div className="container">
       {/*  onChange={(evt)=> setX(parseInt(evt.target.value))}, when the 
          onChange event is raised the setX() will dispatched and the state of x will be changed */} 
      X: <input type="text" className="form-control" value={x}
       onChange={(evt)=> setX(parseInt(evt.target.value))} />
      <br />
      Y: <input type="text" className="form-control" value={y}
       onChange={(evt)=>setY(parseInt(evt.target.value))}/>
      <br />
      Res: <input type="text" className="form-control" 
         value={res} readOnly/>
      <br />
      <div className="btn-group-lg">
        <input type="button" value="Clear" className="btn btn-primary" 
          onClick={clear}/>
        <input type="button" value="Add" className="btn btn-danger" 
        onClick={add}/>

      </div>
    </div>
  );
};

export default SimpleStateCalculatorComponent;
