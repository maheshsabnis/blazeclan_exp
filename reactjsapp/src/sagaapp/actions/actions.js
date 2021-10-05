// define two actions one for getting all departments by ing call to REST API
// second to Post new department to REST APIs

export const getDepartments=()=>{
    return {
        type: 'GET_DEPARTMENTS'
    };
};

export const saveDepartment=(dept)=>{
  

   return {
       type:'SAVE_DEPARTMENT',
       dept
   }
};