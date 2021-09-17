// The ES 6 Module Import. The 'React' is exportable that what it is imported in current file
import React from 'react';
import ReactDOM from 'react-dom';
// importing teh CSS file as modlue so that its classes can be available for all components in the current applciation 
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// importing the App Component
import App from './App';
import SimpleComponent from './components/statelesscomponent/simplecomponent';
import SimpleStateComponent from './components/statefullcomponent/simplestatecomponent';
import reportWebVitals from './reportWebVitals';
// The method is used to mount and render the COmponent in HTML DOM
// Parameter 1: the component to be rendered in mounted
// Parameter 2: the DOM element in which the component is mounted  

// Pass the data to SimpleStateComponent using JSX Properties
// the pasopert from parent will be bound as {this.props.[PROPERTY-NAME]}
const myMessage = 'I am the message from the parent component';
ReactDOM.render(
  <React.StrictMode>
    <SimpleStateComponent message={myMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
