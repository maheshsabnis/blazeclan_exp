import React from 'react';
// connect: Connct the Redux Store with Views for Dispatched Actions as well as the store
import {connect} from 'react-redux';
import{getDepartments, saveDepartment} from './../actions/actions';
const GetDepartmentComponent=(props)=>{
    return(
        <div className="container">
            <input type="button" value="Get Departments" className="btn btn-primary"
             onClick={props.get}/>
            <input type="button" value="Save Department" className="btn btn-success"
             onClick={()=>props.post({
                DeptNo:80, DeptName: 'Maintenence', Location: 'Belgaum', Capacity:900
            })}/>
            <hr/>
            <div className="container">
                <strong>
                    The Newly created data is {JSON.stringify(props.dept)}
                </strong>
            </div>
        </div>
    );
};

// create mapDispatchToProps object that will map actions to props
// of the component

const mapDispatchToProps = {
    // propsType:actual actions methods
    get:getDepartments,
    post:saveDepartment
};

const mapStateToProps=(state)=>({
    dept:state.department  // department is received from reducers for SAVE_DEPARTMENT_SUCCESS
});

// export default GetDepartmentComponent;

export default connect(mapStateToProps, mapDispatchToProps)(GetDepartmentComponent);