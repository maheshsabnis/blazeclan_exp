// The ES 6 Module Import. The 'React' is exportable that what it is imported in current file
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainReduxComponent from "./reduxapp/mainreduxcomponent";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

import { Provider } from "react-redux";

import reducers from "./reduxapp/reducers/reducers";

// create a store
// the reducers is loaded at aplication  level and hence it will
// monitor all dispatched actions and store subscriptions
let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

ReactDOM.render(
  <React.StrictMode>
    {/* Provide will load the redux store for all React Components working under it*/}
    <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
