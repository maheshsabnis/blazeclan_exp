// create an action method akaaction creator that will accept the department object
// from the UI and return an output action

const addDepartment=(department)=>{
    console.log(`AddDepartment  action is dispatched ${JSON.stringify(department)}`);
    // write some logic here
    department.DeptName = department.DeptName.toUpperCase(); 
    return {
        // returning the output action
        type: 'ADD_DEPARTMENT',
        department // the payload means the data returnied by the action
        // so that it can be further updated in store
    };
} 

export default addDepartment;