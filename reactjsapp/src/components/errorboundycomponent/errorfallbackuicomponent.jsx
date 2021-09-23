import React, { Component } from 'react';

class MyCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value:0
        };
    }
    updateValue=()=>{
        this.setState({value: this.state.value+1});
    }
    render() { 
        try{
            if(this.state.value > 10) throw new Error('You have reached to max clicks');
            else {
                return (  
                    <div className="container">
                        <h4>The Counter Component</h4>
                        <strong>
                            The Current Value is = {this.state.value}
                        </strong>
                        <hr />
                        <input type="button" value="Update Value"  className="btn btn-primary"
                         onClick={this.updateValue.bind(this)} />
                    </div>
                );
            }
        }catch(e){
            // return the fallback UI
            return (  
                <div className="container">
                    <h4>The Counter Component</h4>
                    <strong>
                           Error Occured while rendering the component {e.message} 
                    </strong>
 
                </div>
            );
        }
       
    }
}
 
class MyContainerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    reload=()=>{
        // refresh the same Page
        window.history.go(0);
    }
    render() { 
        return (  
            <div className="container">
                <h4>The Container Component</h4>
                <MyCounterComponent></MyCounterComponent>
                <hr />
                <input type="button" value="Reload" onClick={this.reload.bind(this)}
                 className="btn btn-danger"/>
            </div>
        );
    }
}
 
export default MyContainerComponent; 