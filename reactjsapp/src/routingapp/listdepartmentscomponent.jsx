import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {DepartmentHttpService} from './../services/depthttpservice';
class ListDepartmentsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            departments:[],
            columnHeaders:[],
        };
        this.serv = new DepartmentHttpService();

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
    render() { 
        return (
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
                    <td>
                        <button className="btn btn-warning">
                            {/* Navigatint to Edit Component and passing the DeptNo */}
                            <Link to={`/edit/${dept.DeptNo}`}>Edit</Link>
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          );
    }
}
 
export default ListDepartmentsComponent;