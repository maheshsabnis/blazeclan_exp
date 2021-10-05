// define a single reducer function

const reducers=(state=[], action)=>{
    switch(action.type){
        case 'GET_DEPARTMENTS':
            console.log('call for get depts');
             return {...state};
        case 'GET_DEPARTMENTS_SUCCESS':
            console.log('call for get depts success');
            // departments is the payload dispatched from saga
            // please see sagas.js
            return {...state, departments:action.departments};     
        case 'SAVE_DEPARTMENT':
            console.log('call for save dept');
            return {...state};
        case 'SAVE_DEPARTMENT_SUCCESS':
            console.log('call for save dept success');
               // department is the payload dispatched from saga
            return {...state, department:action.department};              
        default:
            return state;  
    }
};

export default reducers;