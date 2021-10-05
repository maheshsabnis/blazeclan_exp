# React.js Application Development

- Installing React CLI
    - a tool that is used to create Productionb-Ready react application structure
    - create-react-app
        - npm install -g create-reaact-app

    - Create a React Application using CLI 
        - create-react-app [PROJECT-NAME]
- Project Strcture
    - package.json
        - File that contains packages and script commands to develop, build, test and run the application
            - "@testing-library/jest-dom": "^5.14.1",
                - The 'JEST' framework used by the React
            - "@testing-library/react": "^11.2.7",
                - The Testing Enviornment
            - "@testing-library/user-event": "^12.8.3",
                - Provide DOM event testing without browser
            - "react": "^17.0.2",
                - The React.js Object Model for creating the application 
            - "react-dom": "^17.0.2",
                - The package used to render the Component in Browser
            - "react-scripts": "4.0.3",
                - USed to provide commands for Build, Test and Run the React Application
            - "web-vitals": "^1.1.2"
                - A tool used by Creact CLI for creating host build
        - Scripts commands in PAckage.json
            -   "start": "react-scripts start", -- Build JS files and then host the run the application
            -   "build": "react-scripts build", -- Build all JS files with their Imports for Syntax errors
            -   "test": "react-scripts test", -- test the React app w/o browser
            -   "eject": "react-scripts eject"  -- interact with the React App Module created using non CLI (create-react-app)        
    - node_module folder
        - Contains List of Installed Packaged for Development, Build, Test and RUn the application
    - src folder
        - The Application folder that contains the Application Code
            - index.js
                - Starting or ENtry Point for React application
                - Used to load and mount the React COmponent in index.html 
            - index.css
                - CSS file loaded by index.js for Stylesheets
            - App.js
                - The default component in the template         
    - public folder
        - Contains the 'index.html' where the React COmponent will be mounted                

# Programming with React.js
- Component
    - It is an autonomous object that contains following
        - Data
            - Properties and its values aka the 'state', that will be exposed or bound to UI for generating UI dynamically
        - Functions
            - The Logic of the component
        - Events
            - They are the behavior of the HTML element.
            - They will be used to execute functions when an event is raised in DOM
            - These funcations may update Data properties (state) and will result into DOM upates
        - DOM
            - UI of the component
            - This UI will be bound with data propeties as well as functions using events
    - Two Types of Components
        - By Syntax
            - Class Components, the ES 6 class derived from the 'Component' base class. Traditionally provided by react from its first version
            - Funcational Components, the JavaScript function that retuens the HTML DOM
                - Introduced in Version 16.0 and Mandatory from Version 16.8+  
        - The Concept
            - Stateless Component
                - The component that has just HTML elements for static rendering
            - Stateful Component
                - The Component that has the Local State or data received from its parent
        - Component<P,S>
            - P, is the 'props', the data received from the Parent Component
                - the 'props' is readonly but immutable across component 
                - 'props' can pass any number and types of properties from parent to child component
            - S, is the 'state', the component's local state propety 
                - the 'state' is mutable for the component
                - when the component is unloaded from DOM, the 'state' will be killed
            - Supports the binding of data (props and state) to HTML element using following syntax
                - {this.props.[PROPERTY-NAME]} / {this.state.[PROPERTY-NAME]}
                - e.g. 'name' is property received from Parent to Child and it is to be bound to div element so show the data
                    - <div>{this.props.name}</div>
                - e.g. 'name' if the local component's state property and it is used to show data to inpue element 
                    - <input type="text" value={this.state.name}>       
                        - Binding the state property to editable HTML element will make the element as 'read-only', so to update the value in editable HTML element, subscribe to the 'onChange' even and bind with the function from the component       
            - Component's methods
                - The 'setState()', method is used to update/modify the local component's state
                    - this.setState({[PROPERTY-NAME]:[NEW-VALUE]}, callback)
                        - The state PROPERTY-NAME will be modified by NEW-VALUE received from UI
                        - callback, the function that will update the state property and commite it so that the DOM can be updated
                            - IMP ***: if the PROPRTY-NAME is singular property e.f. state, number, etc, then the callback is optional. But, if PROPRTY-NAME is of the type array or the property is updated using select element, the callback is mandetory      
                - render()
                    - The method is used to return DOM for loading and mounting UI on HTML
                - Lifecylcfle methods
                - BInd en event of HTML elements to 'functions' from component using following syntax
                    - [EVENT-NAME]={this.[FUNCTION-NAME].bind(this)}
                    - e.g. f1() is the function to be bound with button
                        - <input type="button" onClick={this.f1.bind(this)}>   
                        - <input type="text" onChange={this.f1.bind(this)}> 

                - If same function is to be bound to multiple editable elements and on the change  event of these editable elements, if the state properties are to be updated, then
                    - Set the 'name' attibute of each editable element to the state property-name bound to it
                    - in setState() function add the following code
                        - this.setState({[evt.target.name]: evt.target.value})
                            -  [evt.target.name] is an array of names set for HTML elements those matches with the state property-names
                            - React will be using the reflection behind the scene to update each matching name property by the vaule received from HTML element on which change event is fired           

            - Component can be used as a Custom HTML element into its Parent
            - In one JS file ther can be multiple components, but only one component can be exported from the file
            - The Component is always in Pascal Case (Starts from Uppercase character)
    - JSX
        - JavaScript Extensions based on XML Rules
            - Start Tag MUST have End Tag
            - Tags are case sensitive
        - JSX have written HTML element System for rendering and generating propetis dynamically for 'props'                        

- React.js UI Application Development
    - Compositonal Application Development
        - Create a UI for Data Entry, Data Validations, AJAX Calls and Smooth Navigation
        - For Data Entry and Validations: Design a Form and write Validation Logic as per the need (Rule Engine, HTML 5 Validations)
            - Please find out the frequency of UI Reusability
                - Planning for UI Reusability
                    - What is the UI?
                        - select, table, etc.
                    - What data will be passed to generate the UI?
                        - Input properties accepted by the component.
                        - THis data will be passed from Parent to Child Component
                    - What state property will be bound to the Re-usable component?
                        - Bind the STate property of the Parent COmponent to the child so that the whe the child component raise an event, the state property from the parent component must be updated.
                    - Plan for the event raised into the child component that will emit data to parent component and parent component will receive this data by subscribing to the property value emitted by the child component
    - IMP** IN React's Compositional Application, if the complex UI is occuring multiple times in a component, then make this complex UI as seperate component and used it by passing data to it.                 

- Difference between 'export' and 'export default'
    - An 'export' is used to export type (array, function, class, etc). THis must be imported as expression
        - E.G. export class MyClass {....}
        - Import it as
            - import {MyClass} from 'file'
    - An 'export default' will by default export the schema that can be directly used by importer w/o any expression
        - E.g. class MyClass{...}; export default MyClass;
        - Import it as 
            - import MyClass from 'file'
- The state property cannot be directly mutated (updated/changed/modified) based on events (where as you can initialize it in constructor), instead use setState()
- WHile selecting data from HTML select element, to update the state property bind with the select eent, use the setState(({},()>{}) use the callback to mutat/ commit the state                                                          

- Validating the Component
    - There is no standard support avaialble for trhe validation
    - Either use HTML 5 Validation Attributes
    - OR Write the valtions explicitely

- React Component Lifecycle
    - To Manage the coding styles and writing the at appropriate location
    - To Manage the cod for AJAX Calls during the component's first rendering
        - use an 'axios' package
            - This is the node based package that is used to make an ajax calls. THis uses Promises internally
                - get(url, config), post(url,data,config), put(url,data,config), delete(url,config)
                    - url is the url of Remote REST API
                    - data is tye object send to API for PUT and POST operations
                    - config: the header configuration values 
                        - e.g. Content-Type (MIME-TYpes), AUTHORIATION 
                - All these metods returns the Promise Object Promise<AxiosResponse>
                    - It has the 'data' property, the property that represents the response
            - npm install --save axios                
    - To global Error Handling  

- The MERN
    - MySQL, Express, React,Node

- COmpositional Pattern of React
    - Approach is that divide the complex UI into 'small-reusable' components
    - Share Data Acress them 
    - The Error Handling COde was forced in each component for the FallBack UI
    - React 16.0+ with Error Boundry
        - A Pattern that is used to provide a mechanism of handling errors acorss any child component in case of Compositional REact App
            - Create a Component that will be container component for varius children component
            - THis component will implement following
                - static  getDerivedStateFromError(error) property
                    - Listen to error thrown by the child component and collect the error in 'error' object
                - componentDidCache(error, logInfo)
                    - error: is the error listened by getDerivedStateFromError property
                    - logInfo: is the object that logs the statck trace in browser using 'componentStack' property          

- Higher-Order-Component (HoC)
    - THis is formal pattern suggested by React from React 16.0+ to perform the component's logic's resuability without modifying the original component
    - Technically this is 'PURE Function' ins JavaScript
        - Pure function is a function that has same input and output parameter
    - GUidelines
        - The Hoc function name must starts from Uppercase characheter (Pascal Case)
        - The FIrts Parameter should be Component object
        - Rest other paranetrers may be any other primitive types
        - The function MUST return Component 
- Single Page App (SPA) Using React
    - react-router-dom
        - 5.3.0
        - npm install --save react-router-dom
            - BrowserRouter
                - The component that is used to provide navigation across components using 'Router'
            - Router
                - Provide 'Route' Component. This is used to define a Routing INsfrastructure
                    - props
                        - exact: used to math the Route Path
                        - path: used to define URL for Routing
                        - component: Accepts the component name as expresison to toute
            - Redirect
                - USed to redirect to the component if exact match is not found
                - props
                    - to: the URL to navigate if exact path is not found
            - Switch
                - The COmponent that contains 'Route' expressions in it
                - The Route Table
            - Link
                - The Component that is used to query to the "Route" to perform navigation                          
        - this.props.history.push("<URL>"), will pass the URL of Route Path based on which the Component will be queried to the <Route> and the component will be loaded
        - this.props.match.param.<PARAMETER>
            - USed to read route parameter

# React.js Phase 2
- Functional Components
    - Recommended Approach of creating components in React Apps
    - It is a function that is created like a simple JavaScript Function
    - 3 Syntaxs of Creating a functional component
        - A SImple function that returns a HTML DOM
            - function MyFunction(){....... return(<HTML/>)}
                - More dev. friendly and makes the new JS Developers to start working with React
                - This can contains local variable and inner functions those can be bind with DOM
                - These local variables are note 'state'
        - Constant Function Expression that returns HTML DOM
            - const ExpressionComponent=(props)=>{..... return (<HTML/>)}
                - This can have inner functions as a const expressions
                - This can have local varibales  but thses are not state properties
        - COnstant Function Expression, that contains HTML DOM but does not returns HTML
            - const ExpressionConponent=()=>(<HTML/>);
    - The 'props' is used for comunication across Components
    - Since the functional component is defining 'scope' for all of its contents (properties and child function), using 'this' prefix is not necessary
    - Local properties declared inside the functional component can be beound with HTML Elements but they are not state so they cannot be updated and shown in DOM element, even they are changed using events
    - Advantages by FUnctional Component
        - No class, so no constructor, no lifecycle methods, no state object, no setState(), etc.
        - It offers a Simple Syntax of Component creation
        - Its is not necessary to use '.bind(this)' function to bind method with DOM event

- How to perform folowing operations while using Functional Components?
    - Defining State and Update State
    - Sharing Data Across Components expcet 'props'
    - Making Ajax calls or using LIfecycle
- The Answer for above question is 'React Hooks'
    - Hooks are the functions with predefined behavior
    - They are executed directly on the Component level and not inside any method of the component except the 'CUSTOM HOOKS'       
        - Basic Hooks, used inn each functional component for state, and other operations
            - useState()
                - THis is the Hook used for creating Statefull Component
                - uses
                    - const [state, action] = useState(initialState);
                        - state: the property that will be used to bind with DOM and update teh DOM based on value changes
                            - state can be primitive type (number,string, boolean)
                            - state can also be object type (array, {}, date) 
                        - initialState: the Initial value of the state property
                        - action: the method that will be dispatched whrn an event is occured in DOM and this method will be used to modify the initialState to new state.
                -  function useState<TST>(initialState: TST | (() => TST)): [TST, Dispatch<SetStateAction<TST>>];
                    - TST: is the state object / property
                    - Dispatch: used to listen to an event raised on DOM element
                    - SetStateAction: used to execute a method that will be used to update the state property and hence update the component by re-rendering the DOM    

            - useContext()
                - The hook that is based on React.Context, this is used to pass data from parent component to a specific child component
                    - The context is created using 'createContext()' method of 'react'
                        - export default DataContext = createContext(InitialValue)
                            - InitialValue can be
                                - {Object}
                                - {{Object, callback}}
                                    - complex object
                                    - callback
                                        - USed to pass the data from Child Component to the parent
                    - The parent component will use 'DataContext' to provide data using its 'Provider' object and its 'value' property
                        - <DataContext.Provider value={}>
                            - <ChildComponent/>
                        - </DataContext.Provider>      
                    - The Child Component has to consume the DataContext using 'useContext()' Hook
                        - let data = useContext(DataContext);
                            - the 'data' is the object / complex object pass by parent component             
            - useEffect()
                - The hook that will be executed on Function component and this is a combination of 'componentDidMount()' and 'componentWillUnMount()' lifecycle hooks of class component 
                - This hook is used to perofrm long-running-async operations and also the cleanup operations 
                - Syntax
                    - useEffect(()=>{Long Running Async Process} return ()=>{Clean up operations} , Dependency Parameter)
                        - Long Running Async Process: The Ajax calls or any other promise based operations. These will update the state of the component
                        -  Clean up operations (optional): Used to perform all those operations which we want to execute when the component is unloaded. e.g. Releasing an EVent, cleaning up the promise object, etc.
                        - Dependency Parameter: When the long running process updates that state, the component's rendering is updated. SInce, the useEffect() is called at functional Component level, it will be always in executing state, to stop the execution of useEffect() after the state is changed, pass the dependency parameter as an Empty Array, this array is the state property that will inform the useState() that the state is changed and now an execution can be stopped.
        - Hooks: They are the object, those are used to perform 'pre-defined' operations e.g. state changes, data sharing, initialoization and unmount operations, etc. THey are called 'only-at' component level. If your react app, contains multiple components and it is required that some functionality to be shared across multiple components, then create a 'CUSTOM-HOOK'
            - THis is a function that will be containing a generic funcationality and will be having a high-scale of re-use across multiple components.
            - The custom hook can use (or wrap) standard hooks and provide a new extended or enhanced functionality to the component                 

        - Additional Hooks, required only in some specific scenarios           
            - useReducer()
                - THis is an enhanced 'useState()' hook.
                - This is used to modify the State from  initial to final with state transition
                    - Initial-----to----inprocess----FinalSuccess
                    - Initial-----to----inprocess----FinalFailure
                - Typically used in case where a one-Single state  object is to be shared across multiple components    
                - Syntax
                    - useReducer(appReducer, initialState)
                        - initialState: The ibject that is to be modified
                        - appReducer
                            - used to update the state based on execution status of the external call or long running process 
            - useMemo()
                - JavaScript Memoization
                - Caching the result of the Same function, if this function is invoked recursively
            - useCallback()
            - useLayoutEffect()
            - useDebuggerValue()

- Code Splitting
    - Create seoarate files for Logic and import these files in components asynchronously using the fallback
        - Recommended for the Modularity
            - Synatax
                - import ('[FILE-PATH]').then((object from Exportable Types)=>{
                        // The Exportable type can be class, function, constant
                }).then((error)=>{
                    // error
                });
- Lazy Loading
    - Approach of Loading a compnent at runtiome by discovering it using its file path
    - React.lazy('[COMPONENT-FILE-PATH]');
    - The standard 'Suspense' component. THis compoennt will keep loading the fallback UI till the actual component is not looaded
        -  <Suspense fallback={[FALL-BACK-UI]}></Suspense> 

# Redux
- Predicatable Application State Management for teh JavaScript Applications
- Concepts
    - Store: The Application Object that maintains all data for the applications.
        - Each View of the React Applicaiton will be responsible to update data in Store and read data from store
    - Action:
        - The Implementation of the logic to be executed by View when an event is fired on UI
        - Action May have input parameters and output parameters
        - Action provides an information aboput what has happened
    - Reducers:
        - A Pure JavaScript function that monitors each action dispatched from View and based on output received from the action this will update the store
        - There can be multiple reducer funcations
        - IMP***
            - Do not write heavy logic in reducer function
            - e.g. AJAX Calls
            - Date Time Operations
            - Heavy Data OPerations
    - Views
        - User Interface that will be interacted by End-User to fire events  and dispatch actions
        - Each view subscribe to the store to read the data
- Packages
    - redux
        - The 'createStore(Reducer, Enhancer)' method
            - This method is used to create a 'store' at application level
            - The 'Reducer' is of the type 'combineReducers()'
              - An Agreegation of all reducers in the application    
              - The combineReducers() provide a mechanism to update the state in the store
            - The 'Enhancer' object
                - A Complex object that is used to provide an additional behavior to the store
                    - The in-browser simulation of the Redux execution
                        - Store with Initial Data
                        - Actions those are dispatched
                        - Store with Updated Data
                    - The 'Middleware'
                        - If the action performs and asyn call then the middleware object is used to monitor and manage these async calls
                            - SAGA: Industry standard Middleware based on ES 6 Generators. This manages all async calls and receive data. Once the Async call is completed based on SUCCESS or FAIL the output action is dispatched.   
                            - THUNK: A simple Middleware (Not-Recommended for Production)
    - react-redux
        - The Bridge package that links react with redux
        - Provider object
            - The Object that provides redux store to react components and manages the lifecycle of these components     
                - <Provider store={STORE-OBJECT}> <REACT-COMPONENTS>  </Provider>   
        - mapDispacthToProps object
            - Use to map the action metho to the UI elements so that when an event is fired on UI element, the action is dispatched         
        - mapStateToProps object
            - This object is used to subscribe the Component with reduc store. This will query to store to read the state (data) from teh store so that it can be shown on UI
        - connect(mapDispachToProps, mapStateToPros) (REACT-COMPONENT)
            - Establish a connection between Redux Store and React UI Application so that when the action is dispatched, based on the output action the reducer will update the store and then the updated data from the store will be provided to the UI
        - Redux-Hooks available from React 16.8+
            - useDispatch()
                - Used to dispach an action from UI. Replacement for mapDispacthToProps.
            - useSelector()
                - Used to map or subscribe the store with View (component). Replacement for the mapStateToProps.
    - Planning for the implementation
        - Create Views (Components)
        - Plan for Events from the Components
        - Write Actions
        - Write Reducers
            - Combine all reducers into a single reducer object
        - Create store usign reducer and enhancer
        - provide the store to Provider which will manage an execution of React App


# Using SAGA
- If a Redux App is expected to perform an async call then the SAGA Middleware is required
- THis Middleware uses an object model to manage async operations based on promises and subscribe to all these promises by resolving them inside the GENRATOR FUNCATION
- Packages
    - saga
        - The package for providing Middlewares
    - redux-saga
        - Package that integrated Redux Object Model with SAGA Object Model
        - Methods
            - createSagaMiddleware()
                - a method that is used to register a Saga object model with Redux Store so that all dispatch actions are monitored
            - The Middleware is applied to the redux store using 'applyMiddleware()' method of the 'redux' package
        - redux-saga has a special effects module for asyoperation manement as follows
            - redux-saga/effects
        - redux-saga/effects has following some of the important methods
            - take()
                - A method that is used to listen to the specific action dispatched from UI
                - It reads the action and its return type e.g. {type:'ACTION-NAME', payload}    
                - The take() method uses this payload as input parameter to the generator function to define an execution. e.g. POST call to REST API needs data received from the UI   
            - takeLatest()
                - Reads the latest action dispatched from the UI
                - otherwise its same as take() function
            - call()
                - Used to make an external promise based calls
                - This method is used to used to subscribe to the promise object and resolves it  
            - put()
                - THis method is used to dispatch an output action when the call() method is executed
                    - If the call() retuens success the put() will dipatch success action with data else error with error message
            - all()
                - MOnitor all saga generator functions from the root of the application                    





# Assignments

# Date: 17-09-2021
- Create a Scientific Calculator in React.js like on WIndows OS (NO-GOOGLE)

# Date: 20-09-2021
1. (Today) Create ValidationSummary Component. THis component will show all validation error message at the bottom of the page. 
2. (Today) Create a RadioButtonListComponent and CheckBoxList Component based on data passed to it. e.g. DeptNames/Designations (RadioButtons), TechnicalSkills (CheckBoxeList) 
3. Modify the DropdownComponent to select multiple options and emit the selected multiple values to parent
4.  (by Tomorrow) Create a DataTableComponent with following specifications
    - dataSource property: Used to generate columns and rows. THis is collection passed from Parent Component
    - event method: getSelectedRow(), this will return the data of selected row to parent component
    - canDelete: If this is true then show Delete button fdor each row in datatable
    - canSort: If this is true then the table will be sorted
    - soryKey: the name of the property based on which the table will be sorted, if canSort is true
    - isPagination: if this is set to true, then pageSize property must be passed as non-zero positive value. If this property is false, then display all records in datatable
    - pageSize: based on this property, the component will show rows and then the pagination will be displayed based on total number of records in dataSource 
5. (by Tomorrow) Use the DataTable component to show data in it. When the Delete button is clicked for a specific row, then the record MUST be removed from the parent component's collection
6.  To the DataTableComponent pass a property as 
    - canSearch: if this value is set to true, then display a Text Input element above the table and when data is entered in this text element, show the matched record in the table    
7.(Optional): Sort and reverse each table column when the column header is clicked    

# Date: 22-09-2021
- STart creating React UI COmponents for Logistic
    - Customers, Orders, Trucks, Drivers, Vendors, Dispatch

- Create a Server-side search of the Employees BAsed on the DeptName,
    - CReate API for the Search
    - CReate a React Component to implement this logic        

# Date: 23-09-2021
1. Take an experince of Routing for the Employees by accesing the Employees REST API
  (DO IT Now) 
2. IMplement the Routing for the LOgistics App with following guidelines
    - End-user can register him self as customer and only he can see following links
        - Record and update Customer Information
        - Register Order
        - Update Order
        - Delete order if it has not already been dispatched
    - Administrator can Register/Update/Delete Vendor
    - Adminustrator and Vendor Can Register/Update/Delete
        - Truck Info
        - Driver INfo
        - Destination
        - Rates
    - Administrator can also register the Staff
        - Accountant
        - Loading People
        - Manager
        - CLerk
    - Manager and Administrator can perform the following
        - Book the Dispatch for Order and Assign Truck and Driver to it   
    - Administrator/Manager/Clerk Can perform Following
        - Generate Bill of the Dispatch
    - NOTE: Routing Links for Various Operations e.g. Regitsre/Update/Delet, etc . will be accessible to specific roles only    
        
# Date: 24-09-2021
1. (Today)
    - Use the Funcational Components to develope SIngle Page Application using react-router-dom
        - Perform Department CRUD Operations
# Date: 04-10-2021
- Dispatch an action from the Click event of the row. THis action will accept the selected row data as input parameter. The selected data must be queried in to the store using the reducer object and the queries data from the store must be shown in the createdepartmentredux component so that, it can be updated. 
- When the Save button is clicked, the updated record must be send back to store and must be shown in the  ListDepartmetsReduxComponent again. 
