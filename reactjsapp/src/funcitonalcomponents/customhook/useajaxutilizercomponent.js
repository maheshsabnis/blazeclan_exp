import React from 'react';

// importing the custom hook
import {useAjax} from './useAjaxHook';

const UseAjaxUtilizerComponent=()=>{
    const data = useAjax("http://localhost:9081/api/departments");
    const products = useAjax("https://apiapptrainingnewapp.azurewebsites.net/api/Products");

    

    if(data === undefined || data.length === 0 || products === undefined || products.length === 0 ) {
        return (
            <div className="container">
                <strong>
                    Call No Completed Yet 
                </strong>
            </div>
        );
    }

    return (
        <div className="container">
            <h2>Call Completed</h2>
        <strong>
            {JSON.stringify(data.records)}
            <hr />
            {JSON.stringify(products)}
        </strong>
    </div>
    );
};

export default UseAjaxUtilizerComponent;
