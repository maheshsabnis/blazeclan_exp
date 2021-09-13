const express = require('express');
const cors = require('cors');
const dataAccess = require('./dal/dataccess');
const instance =express();
const ds = new dataAccess();
instance.use(express.urlencoded({extended:false}));
// parse the data from body as JSON (Use this in HTTP POST and PUT) 
instance.use(express.json());

// to enable the Cross-Origin-Resource-Sharing (CORS) to access request from
// Different Origin
// For specifric or all Headers
// For specific or all Matehod
// use cors() middleware
instance.use(cors({
    origin: '*', // all origins
    allowedHeaders: '*', // all; headers
    methods: '*' // all methods
}));

instance.get('/api/customers',(req,resp)=>{
    let customers = ds.getCustomers();
    resp.status(200).send(JSON.stringify(customers));
});
instance.post('/api/customers',(req,resp)=>{
    let cust  =req.body;
   
    customers = ds.saveCustomers(cust);
    resp.status(200).send(JSON.stringify(customers));
});

instance.listen(9081,()=>{
    console.log('Staretd on port 9081');
});