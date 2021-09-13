const express =  require('express');
const path = require('path');

// define an instance of express
const instance = express();

// configure Middlewares 

// define a statif file middleware for CSS
instance.use(
    express.static(path.join(__dirname, './../../node_modules/bootstrap/dist/css'))
);
// define a statif file middleware for JS files from Views folder
instance.use(
    express.static(path.join(__dirname, './../views'))
);

const route = express.Router();

instance.use(route);

// Request Processing HTTP methods
route.get("/",(req,resp)=>{
    resp.sendFile("index.html", {
        root: path.join(__dirname, "./../views")
    });
});

route.get("/home",(req,resp)=>{
    resp.sendFile("home.html", {
        root: path.join(__dirname, "./../views")
    });
});

route.get("/about",(req,resp)=>{
    resp.sendFile("about.html", {
        root: path.join(__dirname, "./../views")
    });
});

route.get("/contact",(req,resp)=>{
    resp.sendFile("contact.html", {
        root: path.join(__dirname, "./../views")
    });
});

// Expose a public Ednpoint to access requests and process it
instance.listen(9080, ()=>{
    console.log(`Server Started on port 9080`);
});