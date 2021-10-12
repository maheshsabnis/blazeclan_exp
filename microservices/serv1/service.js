const express = require('express');
const instance = express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// if the 9001 is blocked, let the node process environment set 
// a free port availoable for the service
// process: The current Node.js Process
// process.env: The Node.js environment where the execution is taking place
// process.env.PORT: The Free port or an immediately available port
let port  =process.env.PORT || 9001


let data = [
    {EmpNo:1,EmpName:'A', Salary:2000},
    {EmpNo:2,EmpName:'B', Salary:2100}
];
 

instance.get('/api/emps',(req,resp)=>{
    resp.status(200).send(JSON.stringify(data));
});

instance.get('/api/emps/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter cannot be 0');
    let result = data.find((d,i)=> d.EmpNo === id);
    resp.status(200).send(JSON.stringify(result));
});

instance.post('/api/emps',(req,resp)=>{
    data.push(req.body);
    resp.status(200).send(JSON.stringify(data));
});


instance.listen(port,()=>{
    console.log(`started oin port ${port}`);
});

 