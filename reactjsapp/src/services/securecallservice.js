import axios from 'axios';

export class SecureCallsService{

    registerNewUser(user){
        let response = axios.post('http://localhost:8010/api/auth/createuser', user, {
          headers:{
           'Content-Type': 'application/json'
        }
        }); 
        return response;
    }

    authUser(user){
        let response = axios.post('http://localhost:8010/api/auth/authuser', user, {
            headers:{
                'Content-Type': 'application/json'
             }
        }); 
        return response;
    }
    getdata(token){
        let response = axios.get('http://localhost:8010/api/auth/get', {
            headers:{
                'AUTHORIZATION': `Bearer ${token}`
            }
        });
        return response;
    }
} 