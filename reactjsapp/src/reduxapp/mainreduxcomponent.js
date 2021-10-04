import React from 'react';
// useDispatch: this hook is used to dispatch an action from the View
// useSelector: this hook is usde to subscribe to the store to query to it
// for extracting data
import {useDispatch, useSelector} from 'react-redux';
// import the action
import addDepartment from './actions/actions';

import CreateDepartmentReduxComponent from './views/createdeptcomponent';
import ListDepartmentsReduxComponent from './views/listdeptcomponent';
const MainReduxComponent=()=>{
    let dispatch = useDispatch();
    let depts = useSelector(state=>state.listDepartmentsReducer);
    return (
        <div  className="container">
            <h1>The React-Redux App</h1>
            {/* The AddDepartment is a props, that will be used by the  CreateDepartmentReduxComponent
             for dispatching the action on some event*/}
            <CreateDepartmentReduxComponent
              AddDepartment={(dept)=>dispatch(addDepartment(dept))}></CreateDepartmentReduxComponent>
            <hr />
            {/* the data received from the store 'depts' will be passed to the  
            ListDepartmentsReduxComponent component
            */}
            <ListDepartmentsReduxComponent
             departments={depts}></ListDepartmentsReduxComponent>
        </div>
    );
};

export default MainReduxComponent;
