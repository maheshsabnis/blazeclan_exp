import React, { Component } from 'react';
class DropdownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleChange=(evt)=>{
        this.props.selectedValue(evt.target.value);
    }
    render() { 
         if(this.props.dataSource=== undefined) {
             return <div className="container alert alert-warning">
                 <strong>
                     No Data to show in DOM 
                 </strong>
             </div>
         } else {
             return (
            <select className="form-control"
             value={this.props.stateProperty}
              onChange={this.handleChange.bind(this)}>
                {
                    this.props.dataSource.map((rec,index)=>(
                        <option key={index} value={rec}>{rec}</option>
                    ))
                }
            </select>  
         
         );
            }
    }
}
 
export default DropdownComponent;
