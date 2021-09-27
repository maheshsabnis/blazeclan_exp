import React, {useState, useEffect} from 'react';

import axios from 'axios';

// The hook that will accept a url as input parameter and will use the
// axios objetc to make a call to URL and update trhe state. This state
// will be given (or provided) back to the component

export const useAjax=(url)=>{
    const [state, updateState] = useState([]);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            // based on the response, modify the state
            updateState(response.data);

        }).catch((error)=>{
            // if error occure the state will be containing error message
            updateState([...state, error.message])
        });
    },[]);
    // the state will be loaded and returned
    // the initial state will be [] emoty array and when the 
    // call is completed the state with data will be returned 
    return state;
};
