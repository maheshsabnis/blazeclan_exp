import React, {useContext} from "react";
import {DataContext} from './../datacontext';

const TableWithEventComponent = () => {


  // Subscribe to the DataContext using 'useContext' to read the data
    // dataSource will read the 'value' provided by parent component that is passed
    // using <DataContext.Provider value={}></DataContext.Provider>
  let subscriber = useContext(DataContext);
   console.log(`Received data is = ${JSON.stringify(subscriber)}`);
   // <DataContext.Provider value={{departments,setDept}}> 
  let dataSource = subscriber[Object.keys(subscriber)[0]]; // array
  let dispatchAction = subscriber[Object.keys(subscriber)[1]]; // action
  if (dataSource === undefined || dataSource.length === 0) {
    return (
      <div className="alert alert-danger">
        <strong>No Records to Display</strong>
      </div>
    );
  } else {
      let columnHeaders = Object.keys(dataSource[0]);
    return (
    
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {columnHeaders.map((head, idx) => (
              <th key={idx}>{head}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataSource.map((record, idx) => (
            <tr key={idx} onClick={()=>dispatchAction(record)}>
              {columnHeaders.map((head, i) => (
                <td key={i}>{record[head]}</td>
              ))}
              
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default TableWithEventComponent;
