const express = require('express');

const instance =express();

let customers = [
    {CustId:101, CuastName:'ABC'},
    {CustId:102, CuastName:'DEF'},
    {CustId:103, CuastName:'GHI'},
    {CustId:104, CuastName:'JKL'}
];


// add middlewares for Bodfy Partsing
// for reading the Header Values
instance.use(express.urlencoded({extended:false}));
// parse the data from body as JSON (Use this in HTTP POST and PUT) 
instance.use(express.json());

instance.get('/api/customers', (req,resp)=>{
    resp.status(200).send(customers);
});


instance.get('/api/auth/customers', (req,resp)=>{
    let authHeaders = req.headers.authorization;
    console.log(authHeaders);
    let credentials = authHeaders.split(" ")[1];
    console.log(`${credentials}`);
    let username = credentials.split(":")[0]; // username
    let password = credentials.split(":")[1]; // username
    if(username === "user" && password === "pwd"){
    resp.status(200).send(customers);} else {
        resp.status(401).send(`UnAuthoreized`);
    }
});



// read data by receibing the custom parameter from URL
// syntax: http://server:port/api/customers/:id
// the id is the URL parameter
instance.get('/api/customers/:id', (req,resp)=>{
    // read the header
    let id = parseInt(req.params.id);
    var cust = customers.find((c,i)=>{return c.CustId === id});
    resp.status(200).send(cust);
});

// post oepration
instance.post("/api/customers",(req,resp)=>{
    // Read the Data from the Body
    let cust  =req.body;
    console.log(`Received Data is = ${JSON.stringify(cust)}`);
    customers.push(cust);
    resp.status(200).send(customers);
});

instance.put("/api/customeres/:id",(req,resp)=>{
    // reade header
    // ready body
    // update Customers based on data from body
    // send the updated response
});

instance.delete("/api/customeres/:id",(req,resp)=>{
    // reade header
   // search record and deleted and send the updated response after deleting the record
});

instance.listen(9081,()=>{
    console.log('Staretd on port 9081');
});