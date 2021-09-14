const express = require('express');
const instance =express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());

const dataAccess = require('./dal/dataaccess');
let ds = new dataAccess();
instance.get("/api/cls/departments", ds.getAllDepartments);
instance.post("/api/cls/departments", ds.createDepartment);
instance.listen(9081,()=>{
    console.log('Staretd on port 9081');
});