import React, { Component } from "react";
import { SecureCallsService } from "./../../services/securecallservice";

class TokenAuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserId: 0,
      RegEmail: "",
      RegPassword: "",
      AuthEmail: "",
      AuthPassword: "",
      message: "",
      departments:[]
    };
    this.serv = new SecureCallsService();
  }
  clearReg = () => {
    this.setState({ UserId: 0 });
    this.setState({ RegEmail: "" });
    this.setState({ RegPassword: "" });
  
  };
  clearAuth=()=>{
    this.setState({ AuthEmail: "" });
    this.setState({ AuthPassword: "" });
  }

  handleInPutChanges=(evt)=>{
      this.setState({[evt.target.name]:evt.target.value});
  }
  registerUser = () => {
      let user = {
          UserId: this.state.UserId,
          Email: this.state.RegEmail,
          Password:this.state.RegPassword
      };
      this.serv.registerNewUser(user).then((resp)=>{
           this.setState({message:resp.data.message}) ;
      }).catch((error)=>{
          this.setState({message:error.message});
      });
  };
  authUser = () => {
    let user = {
       
        Email: this.state.AuthEmail,
        Password:this.state.AuthPassword
    };
    this.serv.authUser(user).then((resp)=>{
         this.setState({message:resp.data.message}); 
         // save the token in serssionstorage
         sessionStorage.setItem('token', resp.data.token);
    }).catch((error)=>{
        this.setState({message:error.message});
    });
  };
  getDataFromService = () => {
      // read the token from the session storage
      let token = sessionStorage.getItem('token');
      if(token === undefined){
         this.setState({message:`Authentication is failed. Please pass the Auth Header`});
      } else {
          this.serv.getdata(token).then((resp)=>{
              this.setState({departments:resp.data});
          }).catch((error)=>{
            this.setState({message:error.message});
        });
      }
  };
  render() {
    return (
      <div className="container-lg">
        <h3>The HTTP Call to Token-Based Secureity Service </h3>
        <table className="table table-bordred table-striped">
          <tbody>
            <tr>
              <td>
                <table className="table table-bordred table-striped">
                  <tbody>
                    <tr>
                      <td>User Id</td>
                      <td>
                        <input
                          type="text"
                          name="UserId"
                          onChange={this.handleInPutChanges.bind(this)}
                          value={this.state.UserId}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>
                        <input
                          type="text"
                          name="RegEmail"
                          value={this.state.RegEmail}
                          onChange={this.handleInPutChanges.bind(this)}
                          className="form-control"
                        />
                        
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          className="form-control"
                          name="RegPassword"
                          value={this.state.RegPassword}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                       
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="button"
                          value="Clear"
                          onClick={this.clearReg.bind(this)}
                          className="btn btn-primary"
                        />
                      </td>
                      <td>
                        <input
                          type="button"
                          value="Register"
                          onClick={this.registerUser.bind(this)}
                          className="btn btn-success"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <table className="table table-bordred table-striped">
                  <tbody>
                    <tr>
                      <td>Email</td>
                      <td>
                        <input
                          type="text"
                          name="AuthEmail"
                          className="form-control"
                          value={this.state.AuthEmail}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Password</td>
                      <td>
                        <input
                          type="password"
                          name="AuthPassword"
                          className="form-control"
                          value={this.state.AuthPassword}
                          onChange={this.handleInPutChanges.bind(this)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="button"
                          value="Clear"
                          onClick={this.clearAuth.bind(this)}
                          className="btn btn-primary"
                        />
                      </td>
                      <td>
                        <input
                          type="button"
                          value="Login"
                          onClick={this.authUser.bind(this)}
                          className="btn btn-success"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="Get Data"
                  onClick={this.getDataFromService.bind(this)}
                  className="btn btn-danger"
                />
              </td>
              <td>
                <strong>{JSON.stringify(this.state.departments)}</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="container">
          <strong>{this.state.message}</strong>
        </div>
      </div>
    );
  }
}

export default TokenAuthComponent;
