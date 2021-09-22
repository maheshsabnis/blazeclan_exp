import React, { Component } from 'react';
class LifecycleParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            pValue:0
        };
    }

    componentDidMount=()=>{
        console.log('Parent Component is Mounted');
    }

    componentDidUpdate=()=>{
        console.log('Parent Component is updated');
    }

    update=(evt)=>{
        this.setState({pValue:parseInt(evt.target.value)});
    }

    render() { 
        console.log('IN the Parent Component');
        if(this.state.pValue % 2 === 0){
            return(
                <div className="container">
                    <h3>The Parent Component</h3>
                    <input type="text" value={this.state.pValue}
                     className="form-control"
                     onChange={this.update.bind(this)}/>
                     <EvenComponent></EvenComponent>
                </div>
            );
        }else {
            return(
                <div className="container">
                    <h3>The Parent Component</h3>
                    <input type="text" value={this.state.pValue}
                     className="form-control"
                     onChange={this.update.bind(this)}/>
                     <OddComponent></OddComponent>
                </div>
            );
        }
    }
}

class EvenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            x:0,
            y:0
         };
         console.log('Even Component Constructor');
    }

    getMousePosition=(evt)=>{
        // X and Y postion of the mouse
        this.setState({x:evt.clientX});
        this.setState({y:evt.clientY});
        console.log(`x = ${this.state.x} and y = ${this.state.y}`);
    }

    componentDidMount=()=>{
        console.log('Even Component is Mounted');
        // attach the MouseMOve Event
        window.addEventListener('mousemove', this.getMousePosition);
    }

    componentDidUpdate=()=>{
        console.log('Even Component is updated');
    }
    // Write all the CLeanup operations in UnMOunting
    // e.g. clearing even subscription
    componentWillUnmount=()=>{
        console.log('Even Component is UnMount');
        window.removeEventListener('mousemove', this.getMousePosition);

    }
    render() { 
        console.log('In the Even Component');
        return ( 
            <div className="container">
                <h4>The Even Component</h4>
                <strong>
                    x = {this.state.x} $$$$$$$ y =  {this.state.y}
                </strong>
            </div>
         );
    }
}

class OddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log('Odd Component Constructor');

    }

    componentDidMount=()=>{
        console.log('Odd Component is Mounted');
        
    }

    componentDidUpdate=()=>{
        console.log('Odd Component is updated');
    }
    componentWillUnmount=()=>{
        console.log('Odd Component is UnMount');
    }

    render() { 
        return (  
            <div className="container">
                <h4>The Odd Component</h4>
                <strong>
                    Value received from Parent : {this.props.value}
                </strong>
            </div>
        );
    }
}
 

 
export default LifecycleParentComponent;
