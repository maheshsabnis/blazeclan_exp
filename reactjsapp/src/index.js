// The ES 6 Module Import. The 'React' is exportable that what it is imported in current file
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import MainSagaComponent from "./sagaapp/mainsagacomponent";

// import createStore, applyMiddleware and compose object
// applyMiddleware: the method that will be used to register the
// middleware in store
// compose: is a method thate will be used to create an enhancer
// object thta contains REDUX TOOLS and Middleware
import { createStore, applyMiddleware, compose } from "redux";
// createSagaMiddleware: used to register and run the SAGA middleware
// at the application level
import createSagaMiddleware from "redux-saga";

// import reducers, rootSaga and Provider
import reducers from "./sagaapp/reducers/redeucres";
import { Provider } from "react-redux";
import rootSaga from "./sagaapp/sagas/sagas";

// create a sagaMilldeware object

const appSagaMiddleware = createSagaMiddleware();
// define an enhancer object
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a store using reducers and the middleware
let store = createStore(reducers, enhancer(applyMiddleware(appSagaMiddleware)));

// run the middleware at the application level
appSagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainSagaComponent></MainSagaComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
