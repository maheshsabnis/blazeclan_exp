import React, { Component } from "react";

class DataGridComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (
      this.props.dataSource === undefined ||
      this.props.dataSource.length === 0
    ) {
    } else {
       let columnHeaders = []; 
       columnHeaders = Object.keys(this.props.dataSource[0]);
      return (
        <div className="container">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {columnHeaders.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Explicitely pass the object biond with table row to the method*/}
              {this.props.dataSource.map((emp, index) => (
                <tr key={index}>
                  {columnHeaders.map((header, idx) => (
                    <td key={idx}>{emp[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default DataGridComponent;
