const express = require('express');
const cors = require('cors');
const authLogic = require('./dal/logic'); 

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());
 
const authObject = new authLogic();

instance.post('/api/auth/createuser', authObject.createUser);
instance.post('/api/auth/authuser', authObject.authUser);
instance.get('/api/auth/get', authObject.getData);


instance.listen(8010,()=>{
    console.log('Started on 8010');
});