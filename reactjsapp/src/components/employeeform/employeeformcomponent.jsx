import React, { Component } from "react";

// import constants and Logic
import { Departments, Designations } from "../../models/constants";
import { EmployeeLogic } from "../../models/employeelogic";

class EmployeeFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EmpNo: 0,
      EmpName: "",
      DeptName: "",
      Designation: "",
      Salary: 0,
      departments: Departments,
      designations: Designations,
      employees: [],
      columnHeaders: [],
    };
    // define an instance of the Logic class
    // IMP***: Declare all external instances in constructor after the state properties are declared
    this.logic = new EmployeeLogic();
    this.state.employees = this.logic.getEmployees();
    // read all keys of the employee object
    this.state.columnHeaders = Object.keys(this.state.employees[0]);
  }
  handleAllChanges=(evt)=>{
      this.setState({[evt.target.name]:evt.target.value},()=>{
      });
  }

  handleDeptNameChange=(evt)=>{
      this.setState({DeptName:evt.target.value},()=>{
        alert(`Selected DeptName  = ${this.state.DeptName}`);
      });
    
  }

  clear=()=>{
      this.setState({EmpNo:0});
      this.setState({EmpName:''});
      this.setState({DeptName:''});
      this.setState({Designation:''});
      this.setState({Salary:0});
  }
  save=()=>{
      let emp = {
          EmpNo: this.state.EmpNo,
          EmpName: this.state.EmpName,
          DeptName: this.state.DeptName,
          Designation: this.state.Designation,
          Salary: this.state.Salary
      };
      // we cannot mutate (Update State using assignment statement)
    //  this.state.employees = this.logic.saveEmployees(emp);

    // define a temp array object based on employees
    let temp = this.state.employees.slice();
    // add data in temp
    temp = this.logic.saveEmployees(emp);
    // mutate the employees state using emp
    this.setState({employees:temp});   

      console.log(`Employeess  =${JSON.stringify(this.state.employees)}`);
  }

  getSelectedEmployee=(emp)=>{
    this.setState({EmpNo:emp.EmpNo});
    this.setState({EmpName:emp.EmpName});
    this.setState({DeptName:emp.DeptName});
    this.setState({Designation:emp.Designation});
    this.setState({Salary:emp.Salary});
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="EmpNo">EmpNo</label>
            <input
              type="text"
              className="form-control"
              name="EmpNo"
              value={this.state.EmpNo}
              onChange={this.handleAllChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="EmpName">EmpName</label>
            <input
              type="text"
              className="form-control"
              name="EmpName"
              value={this.state.EmpName}
              onChange={this.handleAllChanges.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="DeptName">DeptName</label>
            <select
              className="form-control"
              name="DeptName"
              value={this.state.DeptName}
              onChange={this.handleAllChanges.bind(this)}
            >
                {
                    this.state.departments.map((dept,idx)=>(
                        <option key={idx} value={dept}>{dept}</option>
                    ))
                }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Designation">Designation</label>
            <select
              className="form-control"
              name="Designation"
              value={this.state.Designation}
              onChange={this.handleAllChanges.bind(this)}
            >
                {
                    this.state.designations.map((desig,idx)=>(
                        <option key={idx} value={desig}>{desig}</option>
                    ))
                }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="Salary">Salary</label>
            <input
              type="text"
              className="form-control"
              name="Salary"
              value={this.state.Salary}
              onChange={this.handleAllChanges.bind(this)}
            />
          </div>
          <div className="form-group  btn-group">
             <input type="button" value="Clear"  className="btn btn-primary"
              onClick={this.clear.bind(this)}/>
             <input type="button" value="Save"  className="btn btn-success"
              onClick={this.save.bind(this)}/>
          </div>
        </form>
        <hr />
        <div className="container">
            {/* <strong>
                {JSON.stringify(this.state.employees)}
            </strong> */}
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        {
                            this.state.columnHeaders.map((header,idx)=>(
                                <th key={idx}>{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* Explicitely pass the object biond with table row to the method*/}
                    {
                        this.state.employees.map((emp,index)=>(
                            <tr key={index}  onClick={()=>this.getSelectedEmployee(emp)}>
                                {
                                   this.state.columnHeaders.map((header,idx)=>(
                                    <td key={idx}>{emp[header]}</td>
                                )) 
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default EmployeeFormComponent;
