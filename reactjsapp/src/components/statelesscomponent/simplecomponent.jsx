// import React Component
import React, {Component} from 'react';
// import the component
import SomeOtherComponent from './someothercomponent';

// the class component
class SimpleComponent extends Component {
    render(){
        return (
            <div>
                <h1>The Simple Component</h1>
                {/* USe COmponent as a custom HTML element */}
                <OtherComponent></OtherComponent>
                 <hr/>
                 <SomeOtherComponent></SomeOtherComponent>
            </div>
        );
    }
}


class OtherComponent extends Component {
    render(){
        return (
            <div>
                <h3>Other Component</h3>
            </div>
        );
    }
}

// export the class Component
export default SimpleComponent;