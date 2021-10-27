const express = require('express');
const bcrypt = require('bcrypt');

const cors = require('cors') 
const instance =express();
instance.use(express.json());
instance.use(express.urlencoded({extended:false}))
instance.use(cors())

let users = [];

instance.post('/api/users',(req,resp)=>{
    
    var salt = bcrypt.genSaltSync();
    var hashPwd = bcrypt.hashSync(req.body.Password,salt);
    console.log(`Users ${JSON.stringify(users)}`);
    let user = {
        UserId: req.body.UserId,
        UserName: req.body.UserName,
        Password: hashPwd
    }; 
    users.push(user);
    resp.json(users);
});


instance.post('/api/auth',(req,resp)=>{
    
    // search user from array based on UserName
    let usr = users.filter((u,i)=>{
        return u.UserName === req.body.UserName
    });
    console.log(`Array = ${JSON.stringify(usr)}`);
    if(usr.length ===0 || usr === undefined) resp.status(500).send({message: 'USer is not present'});
    // Parameter 1: The Data Received from the CLient. This will ne encrypted
    // Parameter 2: The Encrypted value against which the data is compared
    if(bcrypt.compareSync(req.body.Password,usr[0].Password)) {
        resp.status(200).send({message: 'Done'});
    }
     
});




instance.listen(7081,()=>{
    console.log('Staretd on port 7081');
});