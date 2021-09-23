import React, { Component } from "react";

export default function Hoc(AppComponent, ...dataSource) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: dataSource[0],
      };
    }

    render() {
        // ...this.props, any additional valuues redceived from the caller of Hoc
      return (
        <div className="container">
            {this.props.additioalData}
          <AppComponent data={this.state.data} {...this.props}></AppComponent>
        </div>
      );
    }
  };
}
