// create a reducer function as a 'PURE FUNCATION' that will accept the initialstate and action
// and based on the action type that is returned after dispatching the nact5ion, the data will be 
// updated into the store


// IMP** There can be mutiple reducer functions exists
// One reducer function can invoke other reducer function


import {combineReducers} from 'redux';

export const addDepartmentReducer=(state,action)=>{
    console.log(`Invoked the addDepartmentReducer with initisl state = ${JSON.stringify(state)}`);

    switch(action.type){
        case 'ADD_DEPARTMENT':
            return {
                department:action.department // the payload returned by the action
            };
        default:
             return state; // the default state    
    }
}

// the initial state of the store is an empty, it will be 
// updated when the ADD-DEPARTMENT action is dispatched 
// and the new department object is returned 
export const listDepartmentsReducer=(state=[], action)=>{
    console.log(`Invoked the listDepartmentsReducer with initisl state = ${JSON.stringify(state)}`);
    switch(action.type){
        case 'ADD_DEPARTMENT':
            // the new addeded departyment will be added into the store
            return [...state, addDepartmentReducer(undefined,action)]
        default:
             return state; // the default state    
    }
}

// combine all reducers so that t5here will be only one reducer object taht will be
// used to manage the store
// the listDepartmentsReducer will be used to monitor all dispatched actions and
// will update the store
// if a view wants to read data from the store, they will use the listDepartmentsReducer
// to subscribe to store and select (aka query) data from the store  

const reducers  =combineReducers({listDepartmentsReducer});

export default reducers;