import React, { Component } from 'react'

class SimpleStateComponent extends Component {
    constructor(props) {
        super(props);
        // defining the local State
        this.state = { 
            x:0,
            y:0,
            z:0
        };
    }

    // evt is the event raised on the target element with whihc the
    // methodm is bound
    handleXChange(evt){
        // update the state for x
        this.setState({x:parseInt(evt.target.value)}, ()=>{
            console.log(`Value in X =  ${this.state.x}`);
        });
    }
    handleYChange(evt){
        // update the state for x
        this.setState({y:parseInt(evt.target.value)}, ()=>{
            console.log(`Value in Y =  ${this.state.y}`);
        });
    }

    handleInputChange(evt){
        this.setState({[evt.target.name]: evt.target.value},()=>{
            console.log(`The Name of the element = ${evt.target.name} and value is= ${evt.target.value}`);
        })
    }

    add(){
        let res = parseInt( this.state.x) + parseInt( this.state.y);
        this.setState({z:res});
    }

    render() { 
        return ( 
            <div className="container">
                <strong>
                    The Value Received from Parent is = {this.props.message}
                </strong>
                <hr />
                <div className="container">
                    <div className="form-group">
                        x = <input type="text" name="x"  value={this.state.x}
                         onChange={this.handleInputChange.bind(this)} className="form-control"/>
                    </div>
                     <br />
                     <div className="form-group">
                        y = <input type="text" name="y" value={this.state.y}
                        onChange={this.handleInputChange.bind(this)}  className="form-control"/>
                    </div>
                     <br />
                     <div className="form-group">
                        z = <input type="text" value={this.state.z} readOnly className="form-control"/>
                    </div>
                    <hr />
                    <input type="button" value="Add" onClick={this.add.bind(this)} className="btn btn-success"/>
                </div>
            </div>
        );
    }
}
 
export default SimpleStateComponent;