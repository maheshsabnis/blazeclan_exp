import React from 'react';
import GetDepartmentComponent from './views/getdepartmentcomponent';
import ListDepartmentComponent from './views/listdepartmentscomponent';

const MainSagaComponent=()=>{
    return(
        <div className="container">
            <h1>The React-Redux-SAGA Application</h1>
            <GetDepartmentComponent></GetDepartmentComponent>
            <hr />
            <ListDepartmentComponent></ListDepartmentComponent>
        </div>
    );
};

export default MainSagaComponent;
