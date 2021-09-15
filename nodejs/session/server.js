const express = require('express');
const session = require('express-session');
const authLogic = require('./dal/logic'); 

const instance = express();
instance.use(express.urlencoded({extended:false}));
instance.use(express.json());

// configure the session middleware
// a key to store the session secrets in cookie in encrypted
// note, you can use crypto package for the same
instance.use(session({
     secret: 'abcd007700dcba',
     saveUninitialized:true, // save the new session and assign an id to it
     resave:false, // please do not save each request again and again in the store
     cookie:{
         maxAge:3600000 // 1 hour (Cookie will be generated with maxz time of 1 Hour)
                    // the cookie will be removed when the session is destroyed
     }
})); 

const authObject = new authLogic();

instance.post('/api/auth/createuser', authObject.createUser);
instance.post('/api/auth/authuser', authObject.authUser);
instance.get('/api/auth/get', authObject.getData);
instance.post('/api/auth/logoff', authObject.logoff);

instance.listen(8010,()=>{
    console.log('Started on 8010');
});