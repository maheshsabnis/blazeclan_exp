const express = require('express');
const path = require('path');
const cors = require('cors');
const instance =express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());


// Load  the sequelize type object
// Sequelize: the base object for Mapping with database
// DataTYpes.: will provide JavaScript Datatypes those will ne mapped with Database Datatypes 
const {Sequelize, DataTypes} = require('sequelize')

instance.use(cors({
    origin: '*',  
    allowedHeaders: '*',  
    methods: '*' 
}));


// Initialize the Database Connection
const sequelize = new Sequelize("business", "root", "P@ssw0rd_", {
    host: 'localhost',
    dialect:'mysql',
    pool: {
         min: 0, max:5, idle:10000   
    },
    define:{
        timestamps:false // the suo-generated columns for concurrency 
    }
}); 



// map with the Table using JavaScript model class generated after sequielize-auto command
// map public property from JavaScript with Table columns with its datatype
// The sequelize object will provide the database connection information
const modelDept = require(path.join(__dirname,'./models/department'))(sequelize, Sequelize.DataTypes);

// let's REST API

instance.get('/api/departments',(req,resp)=>{
    sequelize.sync({force:false}) // connect to db but do not overwrite the table
            .then(()=> modelDept.findAll()) // execute the method for readig data aynchronously 
            .then((data)=>{
                resp.status(200).send({message:'Read Operation is Successful', records: data}) // read data returns by the findAll() method
            })
            .catch((error)=>{
                resp.status(500).send({message:'Read Operation is Failed', error: error.message})
            }); // otherwsie error
});


// USing queries for executing the Select Query
instance.get('/api/query/departments',(req,resp)=>{
     sequelize.query("Select * from Department")
     .then((result)=>{
         resp.status(200).send(result[0]);
     }).catch((err)=>{
        resp.status(500).send(err.message);
     });
});

// Use the Query method for Executing the Stored Procedure

instance.get('/api/sp/employees',(req,resp)=>{
    sequelize.query("CALL getEmployees()")
    .then((result)=>{
        resp.status(200).send(result);
    }).catch((err)=>{
       resp.status(500).send(err.message);
    });
});



instance.post('/api/sp/employees',(req,resp)=>{
    let emp = req.body;
    console.log(JSON.stringify(emp));
    sequelize.query(`CALL insertEmployee(${emp.EmpNo},'${emp.EmpName}','${emp.Designation}',${emp.Salary},${emp.DeptNo})`)
    .then((result)=>{
        resp.status(200).send(result);
    }).catch((err)=>{
       resp.status(500).send(err.message);
    });
});



instance.get('/api/departments/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({force:false}) // connect to db but do not overwrite the table
            .then(()=> modelDept.findOne({where:{DeptNo:id}})) // execute the method for readig data aynchronously 
            .then((data)=>{
                resp.status(200).send({message:'Read Operation is Successful', records: data}) // read data returns by the findAll() method
            })
            .catch((error)=>{
                resp.status(500).send({message:'Read Operation is Failed', error: error.message})
            }); // otherwsie error
});


instance.post('/api/departments',(req,resp)=>{
    
    let dept  = req.body;
    sequelize.sync({force:false}) // connect to db but do not overwrite the table
            .then(()=> {return modelDept.create(dept)}) // execute the method for creating a new record in table and return the newly created record  
            .then((data)=>{
                resp.status(201).send({message:'Write Operation is Successful', records: data}) // return the newly created record 
            })
            .catch((error)=>{
                resp.status(500).send({message:'Read Operation is Failed', error: error.message})
            }); // otherwsie error
});


instance.put('/api/departments/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    let dept  = req.body;
    sequelize.sync({force:false}) // connect to db but do not overwrite the table
            .then(()=>   modelDept.update({
                DeptName:dept.DeptName,
                Location:dept.Location,
                Capacity:dept.Capacity
            },{where:{DeptNo:id}})) // execute the method for creating a new record in table and return the newly created record  
            .then((data)=>{
                resp.status(201).send({message:'Update Operation is Successful', records: data}) 
            })
            .catch((error)=>{
                resp.status(500).send({message:'Read Operation is Failed', error: error.message})
            }); // otherwsie error
});



instance.delete('/api/departments/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({force:false}) // connect to db but do not overwrite the table
            .then(()=> modelDept.destroy({where:{DeptNo:id}})) // execute the method for readig data aynchronously 
            .then((data)=>{
                resp.status(200).send({message:'Delete Operation is Successful', records: data}) // read data returns by the findAll() method
            })
            .catch((error)=>{
                resp.status(500).send({message:'Delete Operation is Failed', error: error.message})
            }); // otherwsie error
});


instance.listen(9081,()=>{
    console.log('Staretd on port 9081');
});