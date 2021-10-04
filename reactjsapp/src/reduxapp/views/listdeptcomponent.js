import React  from 'react';
const ListDepartmentsReduxComponent=(props)=> {
      if(props.departments === undefined || props.departments.length === 0){
          return (
              <div className="alert alert-danger">
                  <strong>No Records to display</strong>
              </div>
          )
      } else {
         let columnHeaders = [];
         columnHeaders = Object.keys( props.departments[0].department);
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
                                        <td key={i}>{d.department[c]}</td>
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
 
export default ListDepartmentsReduxComponent;