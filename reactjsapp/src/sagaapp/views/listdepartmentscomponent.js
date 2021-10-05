import React  from 'react';
import {connect} from 'react-redux';
const ListDepartmentComponent=(props)=> {
      if(props.departments === undefined || props.departments.length === 0){
          return (
              <div className="alert alert-danger">
                  <strong>No Records to display</strong>
              </div>
          )
      } else {
         let columnHeaders = [];
         columnHeaders = Object.keys( props.departments[0]);
         console.log(columnHeaders); 
        return (
            <div className="container">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                    {
                        columnHeaders.map((c,i)=>(
                            <th key={i}>{c}</th>
                        ))
                    }
                </tr>
              </thead>
    
              <tbody>
                      {
                          props.departments.map((d,idx)=>(
                              <tr key={idx}>
                                  {
                                       columnHeaders.map((c,i)=>(
                                        <td key={i}>{d[c]}</td>
                                    )) 
                                  }
                              </tr>  
                          ))
                      }
                        
              </tbody>
            </table>
            </div>
          );}
     
}
 
// define mapStateToProps object that will subscribe the current component
// with store using connect() so that data from the component can be read
// and shown on the UI

const mapStateToProps=state=>({
    departments:state.departments // state.departments is received from GET_DEPARTMENTS_SUCCESS
                                // please see reducers.js
});

// export default ListDepartmentComponent;
export default connect(mapStateToProps,null)(ListDepartmentComponent);