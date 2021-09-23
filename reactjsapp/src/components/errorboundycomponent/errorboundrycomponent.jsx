import React, { Component } from "react";

class ErrorBoundryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
    };
  }
  // listen to the error thrown by the child child component
  // this will internally call tye setState() method to save the
  // listened error from the child component
  // error: error received from the child component
  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }

  // catch and log the error
  componentDidCatch = (error, logInfo) => {
    console.log(error.toString(), logInfo.componentStack);
  };
  render() {
    if (this.state.errorMessage) {
      // return the FallBAckUI
      return (
        <div className="container">
          <h6>Theere is a problem in loading the component</h6>
          <strong>The Error is {this.state.errorMessage}</strong>
        </div>
      );
    } else {
      // continue rendering the child component
      return this.props.children;
    }
  }
}

class MyCounterErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  updateValue = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    if (this.state.value > 10)
      throw new Error("You have reached to max clicks");
    else {
      return (
        <div className="container">
          <h4>The Counter Component</h4>
          <strong>The Current Value is = {this.state.value}</strong>
          <hr />
          <input
            type="button"
            value="Update Value"
            className="btn btn-primary"
            onClick={this.updateValue.bind(this)}
          />
        </div>
      );
    }
  }
}

class OtherChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pValue: 0,
    };
  }
  updateValue = (evt) => {
    this.setState({ pValue: parseInt(evt.target.value) });
  };
  render() {
    if (this.state.pValue % 2 !== 0) {
      throw new Error("ODDDY");
    } else {
      return (
        <div  className="container">
          <input type="text" className="form-control" 
           value={this.state.pValue}
            onChange={this.updateValue.bind(this)}/>
        </div>
      );
    }
  }
}

class MyContainerErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  reload = () => {
    // refresh the same Page
    window.history.go(0);
  };
  render() {
    return (
      <div className="container">
        <h4>The Container Component usign Error Boundries</h4>
        {/* using the Error Boundry Component to control the execution
                and handle any errors */}
        <ErrorBoundryComponent>
          <MyCounterErrorComponent></MyCounterErrorComponent>
         
        </ErrorBoundryComponent>
        <ErrorBoundryComponent>
        <hr />
          <OtherChildComponent></OtherChildComponent>
          </ErrorBoundryComponent>
        <hr />
        <input
          type="button"
          value="Reload"
          onClick={this.reload.bind(this)}
          className="btn btn-danger"
        />
      </div>
    );
  }
}

export default MyContainerErrorComponent;
