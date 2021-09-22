import React, { Component } from 'react';
// import the service

import {DepartmentHttpService} from './../../services/depthttpservice';


class DepartmentAjaxCallComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            DeptNo:0,
            DeptName:'',
            Location:'',
            Capacity:0,
            departments:[],
            columnHeaders:[],
            message:''
        };

        this.serv = new DepartmentHttpService();
    }

    handleAllChanges=(evt)=>{
        this.setState({[evt.target.name]:evt.target.value});
    }

    loadData(){
        this.serv.getData().then((resp)=>{
            this.setState({departments:resp.data.records},()=>{
                // read the schema of the first record to generate table headers
                this.setState({columnHeaders: Object.keys(this.state.departments[0])});
                this.setState({message: `Data is receiced Sucessfully`})
            });
        }).catch((error)=>{
            this.setState({message: `Error Occured while loading data ${error.message}`})

        });
    }


    // make AJAX call here
    componentDidMount=()=>{
        this.loadData();
    }
    clear=()=>{
        this.setState({DeptNo:0});
        this.setState({DeptName:''});
        this.setState({Location:''});
        this.setState({Capacity:0});

    }
    save=()=>{
        let dept = {
            DeptNo: this.state.DeptNo,
            DeptName: this.state.DeptName,
            Location: this.state.Location,
            Capacity: this.state.Capacity
        };

        this.serv.postData(dept).then((resp)=>{
            this.setState({message: 'Data is Created Successfully'});
            this.loadData();
        }).catch((error)=>{
            this.setState({message: `Error Occured while loading data ${error.message}`})

        });
    }

    render() { 
        return ( 
            <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="DeptNo">DeptNo</label>
                <input
                  type="text"
                  name="DeptNo" className="form-control"
                  value={this.state.DeptNo}
                  onChange={this.handleAllChanges.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="DeptName">DeptName</label>
                <input
                  type="text" 
                  name="DeptName" className="form-control"
                  value={this.state.DeptName}
                  onChange={this.handleAllChanges.bind(this)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  name="Location" className="form-control"
                  value={this.state.Location}
                  onChange={this.handleAllChanges.bind(this)}
                />
                <div className="form-group">
                  <label htmlFor="Capacity">Capacity</label>
                  <input
                    type="text"
                    name="Capacity" className="form-control"
                    value={this.state.Capacity}
                    onChange={this.handleAllChanges.bind(this)}
                  />
                </div>
              </div>
              <hr />
              <div className="btn-group">
                  <input type="button" value="Clear" className="btn btn-primary"
                   onClick={this.clear.bind(this)}/>
                  <input type="button" value="Save" className="btn btn-success"
                  onClick={this.save.bind(this)}/>
              </div>
            </form>
            <div className="container">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  {this.state.columnHeaders.map((head, idx) => (
                    <th key={idx}>{head}</th>
                  ))}
                </tr>
              </thead>
    
              <tbody>
                {this.state.departments.map((dept, idx) => (
                  <tr key={idx}>
                    {this.state.columnHeaders.map((head, i) => (
                      <td key={i}>{dept[head]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <h6>{this.state.message}</h6>
          </div>
         );
    }
}
 
export default DepartmentAjaxCallComponent;
