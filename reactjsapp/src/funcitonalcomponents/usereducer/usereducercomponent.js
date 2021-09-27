import React, { useEffect, useReducer, Fragment } from "react";

import axios from "axios";
// 1. CReate a Inital State TRansition Object
const initialState = {
  loading: "", // initial State for external calls
  error: "", // error returned from external call
  data: [], // data received from call when the execution is successful
};

// 2. a custom hook that will manage the external call anf using reducer update the state

const useReducerStateAsync = (url) => {
  // data: is the final state (success / error) that will be updated
  // to the component
  // dispatch: the action that will be dispatched to update the state
  // the dispatch will make sure that, the accurate data is updated in the
  // state
  const [data, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // start initializing the external call and dispatch action accordingly
    // type: the name of the actual action takes place
    dispatch({ type: "DATA_FETCH_STARTED" });
    axios(url)
      .then((response) => {
        if (response.status !== 200)
          throw new Error(`Error Occured Called Failed ${response.statusText}`);
        // receive the response
        return response.data;
      }) // first check the type of response
      .then((data) => {
        // start processing the response and update the store
        dispatch({ type: "DATA_FETCH_SUCCESS", payload: data.records });
      })
      .catch((error) => {
        // update the state with received error
        console.log(`Error Occured ${error.message}`);
        dispatch({ type: "DATA_FETCH_FAILED", payload: error.message });
      });
  }, []);
  // data will be returned when the call is completed
  return data;
};

// 3. The appReducer, thatn will monitor the events and based on the the state will be updated
// parameter 1: state, the state to b e updated based on action dispatched by the reducer
// parameter 2: action, the action (an event) dispateched by the reducer STARTED, SUCCESS, FAILED
function appReducer(state, action) {
  switch (action.type) {
    case "DATA_FETCH_STARTED":
      return { ...state, loading: "Call Started", error: "" };
    case "DATA_FETCH_FAILED":
      return {
        ...state,
        loading: "Call Completed With Error",
        error: `Error in receiving data ${action.payload}`,
      };
    case "DATA_FETCH_SUCCESS":
      return { ...state, loading: "Call Completed Successfully", error: "", data:action.payload };
    default:
      return state; // return the default state
  }
}

const UseReducerComponent = () => {
    const state = useReducerStateAsync("http://localhost:9081/api/departments");
    if(state === undefined) {
        return (
             <Fragment>
                 no Data to Display
             </Fragment>
        );
    }
    return (
        <Fragment>
            {
                JSON.stringify(state)
            }
        </Fragment>
   );
};

export default UseReducerComponent;
