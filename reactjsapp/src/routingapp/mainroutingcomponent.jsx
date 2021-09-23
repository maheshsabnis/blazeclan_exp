import React, { Component } from 'react';

// import classes for routing
import {Switch, Route, Redirect,Link} from 'react-router-dom';
import CreateDepartmentComponent from './createdepartmentcomponent';
import EditDepartmentComponent from './editdepartmentcomponent';
import ListDepartmentsComponent from './listdepartmentscomponent';


class MainRoutingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-lg">
                <table className="table table-bordered table-striped">
                    <tbody>
                        <tr>
                            <td>
                                {/* DFefine Route Links */}
                                <Link to="/">List of Departments</Link>
                            </td>
                            <td>
                                {/* DFefine Route Links */}
                                <Link to="/create">Create Department</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                {/* Define the ROute Switch */}
                <Switch>
                    <Route exact path="/" component={ListDepartmentsComponent}></Route>
                    <Route exact path="/create" component={CreateDepartmentComponent}></Route>
                    {/* The Route with Parameter */}
                    <Route exact path="/edit/:id" component={EditDepartmentComponent}></Route>
                    {/* If route parameter does not match then redirect to Default */}
                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
         );
    }
}
 
export default MainRoutingComponent;
