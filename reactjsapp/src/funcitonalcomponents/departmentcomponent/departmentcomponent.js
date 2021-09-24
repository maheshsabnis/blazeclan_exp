import React, { useState,useEffect } from "react";

import TableComponent from "../reusablecomponents/tablecomponent";
import TableWithEventComponent from "../reusablecomponents/tablecomponentwithevents";
import {DepartmentHttpService} from './../../services/depthttpservice';

// import the DataContext

import {DataContext} from './../datacontext';


const DepartmentComponent = () => {
  const [dept, setDept] = useState({
    DeptNo: 0,
    DeptName: "",
    Location: "",
    Capacity: 0,
  });
  const [departments, updateDepartments] = useState([]);
  const [message,setMessage] = useState(''); 
  const serv = new DepartmentHttpService();

   // make an ajax call using useEffect()

   useEffect(()=>{
       serv.getData()
           .then((resp)=>{
               updateDepartments(resp.data.records);
           })
           .catch((error)=>{
            setMessage(`Error = ${error.message}`);
           }); 
   },[]); // the dependnecy parameter to inform the useEffect() that the state is changed and rendering is done  



  const clear = () => {
    // reset the dept object to intial value
    setDept({ DeptNo: 0, DeptName: "", Location: "", Capacity: 0 });
  };

  const save = () => {
    // // mutating the departments array using the new department object
    // updateDepartments([...departments, dept]);
    serv.postData(dept).then((resp)=>{
         updateDepartments([...departments, resp.data.records])   
    }).catch((error)=>{
        setMessage(`Error = ${error.message}`);
       }); 
  };

  return (
    <div className="container">
        {/*  onChange={(evt)=> setDept({...dept, DeptNo:parseInt(evt.target.value)})}
          when an onChange event is raised, the setDept() action will be dispatched
          it will update the intial DeptNo for the 'dept' object to the new value 
        */}
      <form>
        <div className="form-group">
          <label htmlFor="DeptNo">DeptNo</label>
          <input
            type="text"
            name="DeptNo"
            className="form-control"
            value={dept.DeptNo}
            onChange={(evt) =>
              setDept({ ...dept, DeptNo: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="DeptName">DeptName</label>
          <input type="text" name="DeptName" className="form-control" 
            value={dept.DeptName}
            onChange={(evt) =>
              setDept({ ...dept, DeptName: evt.target.value })
            }/>
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input type="text" name="Location" className="form-control" 
            value={dept.Location}
            onChange={(evt) =>
              setDept({ ...dept, Location: evt.target.value })
            }
          />
          <div className="form-group">
            <label htmlFor="Capacity">Capacity</label>
            <input type="text" name="Capacity" className="form-control" 
              value={dept.Capacity}
              onChange={(evt) =>
                setDept({ ...dept, Capacity: parseInt(evt.target.value) })
              }
            />
          </div>
        </div>
        <hr />
        <div className="btn-group">
          <input type="button" value="Clear" className="btn btn-primary"
           onClick={clear} />
          <input type="button" value="Save" className="btn btn-success" 
          onClick={save}/>
        </div>
      </form>
       <br/>
        {/* Using the DataContext to Provide data to Child Component */}
        <DataContext.Provider value={departments}>
          <TableComponent></TableComponent>
        </DataContext.Provider>    
        <br/>
        {/* the setDept will be the action that will be a callback action dispatched
          when an event is raised in the Child Component i.e. TableWithEventComponent
        */}
        <DataContext.Provider value={{departments,setDept}}>
          <TableWithEventComponent></TableWithEventComponent>
        </DataContext.Provider> 
        <br />
        <strong>
          {message}
        </strong> 
    </div>
  );
};

export default DepartmentComponent;
