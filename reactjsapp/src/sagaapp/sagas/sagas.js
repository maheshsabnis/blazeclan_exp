import {DepartmentHttpService} from './../../services/depthttpservice';

import {takeLatest, call,put,all} from 'redux-saga/effects';

function getDepartments(){
    let serv = new DepartmentHttpService();
    // accept a method from the serrvice and resolve the promise 
    // rersponse object

    const response = serv.getData().then((result)=> result.data);
    // let the function resolve the promise object here itself so that
    // the caller will directly be able to read data from it
    return Promise.resolve(response);
}

function saveDepartment(dept){
    let serv = new  DepartmentHttpService();
    const response =  serv.postData(dept).then((result)=>result.data);
    return Promise.resolve(response);
}


// create combinational methods 1 for input action and other for output action
// these will be generator functions

// the output action
function* outputGetDepartmentsGenetrator(){
    console.log('HAHA for Get Departments Input action is successfull');

  // invoke the method that is calling method from service
  // the call() will directly read data from the resolved promise
  // 'NO EXPLICT PROMISE SUBSCRIPTION IS REQUIRED'
  const response = yield call(getDepartments); 
  // now dispatch the output action with the output data
  yield put({
      type: 'GET_DEPARTMENTS_SUCCESS',
      departments: response.records // because 'records' is the key returned by REST API
  });
}

// generator function that wil be used to process GET_DEPARTMENTS action
// the input action will map with output action
function* inputGetDepartmentsGenerator(){
    console.log('Waiting for Get Departments Input action');
    yield takeLatest('GET_DEPARTMENTS',outputGetDepartmentsGenetrator);
}

// the actoin is the returned object by the SAVE_DEPARTMENT 
// dispatch action
function* outputSaveDepartmentGenerator(action){
    // read the dept object returned from the dispatched action
    const dept = action.dept;
    // call method from the service
    const response = yield call(saveDepartment, dept);
    // dispatch the output action
    yield put({
        type: 'SAVE_DEPARTMENT_SUCCESS',
        department:response.records // records is the key returned from the REST API 
    }); 
}

// this will be executed for the SAVE_DEPARTMENT action
// dispatched from View
function* inputSaveDepartmentGenerator(){
    // the takeLatest() will also read the 
    // payload returned by the dispatched action
    // e.g. {type:'SAVE_DEPARTMENT', dept}
    // this object will be passed to the outputSaveDepartmentGenerator method
    yield takeLatest('SAVE_DEPARTMENT', outputSaveDepartmentGenerator);
}


// create a root saga middleware function that will monitor
// all generator functions those will be executed
// when an action is dispatched from UI

export default function* rootSaga(){
    console.log('SAGA is running and waiting for actions to dispatch');
    yield all([inputGetDepartmentsGenerator(),inputSaveDepartmentGenerator()]);
}