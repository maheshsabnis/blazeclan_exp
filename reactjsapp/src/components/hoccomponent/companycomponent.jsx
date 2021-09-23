import React, { Component } from 'react';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
class CompanyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <div className="container">
                 <h3>List of Companies</h3>
                 <DataGridComponent dataSource={this.props.data}></DataGridComponent>
             </div>
          );
    }
}
 
export default CompanyComponent;