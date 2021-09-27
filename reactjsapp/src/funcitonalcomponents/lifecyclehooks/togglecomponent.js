import React,{useState, Fragment} from 'react';
import MouseMoveComponent from './mousemovecomponent';
const ToggleComponent=()=>{
 const [show, canShow] = useState(true);

 return(
      <Fragment>
          <h3>The Toggle Component</h3>
          <button onClick={()=>canShow(!show)}>Toggle</button>
          {
              show && <MouseMoveComponent></MouseMoveComponent>
          }
          <div>
              <strong>
                  The Toggle COmponent
              </strong>
          </div>
      </Fragment>
 );
};

export default ToggleComponent;

