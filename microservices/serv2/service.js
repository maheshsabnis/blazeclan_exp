const express = require('express');
const instance = express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}));
// if the 9001 is blocked, let the node process environment set 
// a free port availoable for the service
// process: The current Node.js Process
// process.env: The Node.js environment where the execution is taking place
// process.env.PORT: The Free port or an immediately available port
let port  =process.env.PORT || 9002


let data = [
    {PersonId:1,PersonName:'A', Income:2000},
    {PersonId:2,PersonName:'B', Income:2100}
];
 

instance.get('/api/pers',(req,resp)=>{
    resp.status(200).send(JSON.stringify(data));
});

instance.get('/api/pers/:id',(req,resp)=>{
    let id = parseInt(req.params.id);
    if(id === 0) return resp.status(500).send('Parameter cannot be 0');
    let result = data.find((d,i)=> d.PersonId === id);
    resp.status(200).send(JSON.stringify(result));
});

instance.post('/api/pers',(req,resp)=>{
    data.push(req.body);
    resp.status(200).send(JSON.stringify(data));
});


instance.listen(port,()=>{
    console.log(`started oin port ${port}`);
});

 