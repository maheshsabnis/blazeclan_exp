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
import EmployeeFormComponent from './components/employeeform/employeeformcomponent';
import EmployeeFormReusableComponent from './components/employeeform/employeeformreusablecomponent';
import EmployeeFormValidationComponent from './components/employeeform/employeeformvalidations';
import LifecycleParentComponent from './components/lifecyclecomponent/demolifecyclecomponent';
import { DepartmentHttpService } from './services/depthttpservice';
import DepartmentAjaxCallComponent from './components/ajaxcallscomponents/departmentajaxcallcomponent';
import TokenAuthComponent from './components/ajaxcallscomponents/securecallscomponent';
import MyContainerComponent from './components/errorboundycomponent/errorfallbackuicomponent';
import MyContainerErrorComponent from './components/errorboundycomponent/errorboundrycomponent';
import CompanyComponent from './components/hoccomponent/companycomponent';
import StockComponent from './components/hoccomponent/stockcomponent';
import Hoc from './components/reusablecomponents/hoccomponent';
// The COntainer for the Routing
import {BrowserRouter} from 'react-router-dom';
import MainRoutingComponent from './routingapp/mainroutingcomponent';
import MyFunctionalComponent from './funcitonalcomponents/simplefunctionalcomponent';
import SimpleStateCalculatorComponent from './funcitonalcomponents/simplecalculatorcomponent/simplestatecalculatorcomponent';
import DepartmentComponent from './funcitonalcomponents/departmentcomponent/departmentcomponent';
import ToggleComponent from './funcitonalcomponents/lifecyclehooks/togglecomponent';
import UseAjaxUtilizerComponent from './funcitonalcomponents/customhook/useajaxutilizercomponent';
import UseReducerComponent from './funcitonalcomponents/usereducer/usereducercomponent';
import CodeSplitComponent from './adv/codesplitting/utilizercomponent';
import LazyLoadedCompopnent from './adv/lazyloading/lazyloadedcomponent';
// The method is used to mount and render the COmponent in HTML DOM
// Parameter 1: the component to be rendered in mounted
// Parameter 2: the DOM element in which the component is mounted  

const companies = [
  {Id:1, CompanyName: 'Microsoft', Employees:100000, MarketStatus:'Registered'},
  {Id:2, CompanyName: 'Google', Employees:50000, MarketStatus:'Registered'},
  {Id:3, CompanyName: 'Oracle', Employees:130000, MarketStatus:'Registered'},
  {Id:4, CompanyName: 'Amazon', Employees:200000, MarketStatus:'Registered'}
];

const stocks =[
  {Id:101, StockName: 'Microsoft', Volume:30000},
  {Id:102, StockName: 'Google', Volume:50000},
  {Id:103, StockName: 'Orcale', Volume:31000},
  {Id:104, StockName: 'Amazon', Volume:30060}
];

const Company = Hoc(CompanyComponent, companies);
const Stock = Hoc(StockComponent, stocks);


// Pass the data to SimpleStateComponent using JSX Properties
// the pasopert from parent will be bound as {this.props.[PROPERTY-NAME]}
const myMessage = 'I am the message from the parent component';
ReactDOM.render(
  <React.StrictMode>
      <LazyLoadedCompopnent></LazyLoadedCompopnent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
