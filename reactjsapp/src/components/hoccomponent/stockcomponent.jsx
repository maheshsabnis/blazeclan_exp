import React, { Component } from 'react';
import DataGridComponent from '../reusablecomponents/datagridcomponent';
class StockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <div className="container">
                 <h3>List of Stocks</h3>
                 <DataGridComponent dataSource={this.props.data}></DataGridComponent>
                 {this.props.additioalData}
             </div>
          );
    }
}
 
export default StockComponent;