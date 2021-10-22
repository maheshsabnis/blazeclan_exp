# Programming with Next.js

1. The 'next' package
    - The Obt Model that used to provide the default Routing,Build and execution features for the React BAsed Apps
    - The Standard Components for coding
        - Head, the headef component
        - Link, the component used in routing
    - Hooks
        - useRouter, the hook to manage the routing and query based navigations across components
    - The 'getStaticProps()'
        - Method that is d to perform long running async operations e.g. Aja Calls
    - The Server-Side Rendering management
        - Static HTML will be directly incuded into the response
        - The HTML that changes based on Events or Server-Side execution only be replaced by generating the re-rendering of those HTML elements
    - Next.js Object Model
        - next the base object model
        - next/head, contains Head component
        - next/link, contains component for Route Navigation
        - next/image, contains Image component for rendering the image
2. Folder Strfucture
    - The 'pages' folder, used to contains all components
    - This is by default used in routing for navigation across components
        - The '_app.js'
            - The Hight-Order-Component (HoC)
                - THis will be used to accept 'Component' and input parameter along with 'pageProps' and return the component. The 'pageProps', is the data to be shared across components.
   - The 'styles' folder,
        - The folder that contains all styles those are used by the application.
    - package.json
        - The Next commands
            - next dev
                - Start the development server and run the application
                - Compile the Next app and generate 'Compiler-Errors' if any
            - next build
                - Create a Production Build
            - next start
                - Run the BUld and load it in browser and mnager SSR                                           
    The 'public' folder
        - COntain Global Resources to be used by all components
        - Store the Production Build in it
    - IN the 'pages' folder add a new sub-folder and name it as 'components'. This folder will contain all components
        - Note: VERY IMP ****
            - The 'pages' folder is by default map with root routing e.g. http://localhost:3000
            - To Navigate to other page (component) change the URL as
                - http://localhost:3000/components/[File-NAME].js   
    - To navigate across components use the 'Link' component from 'next/link'
        - This MUST use the <a> for Hyperlinks
        - The Link has 'href' property for path of the component to navigate to
    - If multiple components have same code for rendering , the create a seperate component
    - To pass data across components using the routing use 'useRouter' hook from 'next/router' and set the queryString paramater
        - const router = useRouter()
        router.push({
            pathname: '[COMPONENT-URL]',
            query:{KEY:VALUE}
        });
        - ON the receiver component, agsin use 'useRouter', declare its object and in 'useEffect', the value can be read as 
            - router.query.[KEY]                  
- Server-Side AJAX Calls
    - Server-Side Rendering of the HTML and The JSOn Data for it
    - The 'getStatProps()' a method that is written to fetch the data during compile time 
    - THis method is executed in server-side and not on client side
    - When to use this?
        - If the Data MUST be ready before the rendering of the component then use getStaticProps()
        - If The static HTML and JSON to be generaed for responsive UI rendering then use this method  

- Dynamic Routing           
    - In Next.js the routing is handled using the following workflow
        - The '/' (root) is mmaped with 'pages' folder
        - When the Link href is as below
            - /mycomponent
                - The Router will look for the 'mycomponent.js' component file in 'pages' folder, if this file is found the component defined in mycomponent.js will be rendered
                - If the 'mycomponent.js' file is not found, then error will be shown     
                - The next.js routing will match the URL against a regular expression and search for the component js file
    - The DYnamic Routing that will decide the routing component and its data based on regular expression defined in 'href'