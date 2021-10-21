var grantAccess = function(username,password){
    this.username = username;
    this.password = password;
};
grantAccess.prototype = {
    // facade that encapsulated all complexities
    getAccess: function(){
        let result;
        if(! new CheckUSerExist().isUerExists()){
            result = 'USer Does Not Exist';
        } else if(! new CheckLoginStatus().isUserAuthenticated()){
            result = 'User Not Authenticated';
        } else if(! new CheckRoleForUser().IsUserHasRole()){
            result = 'User is not assigned to role';
        } else if(! new CheckIfRoleHasAccess().isRoleHasAccess()){
            result = 'Role does not have access';
        }

        result = `Login is Successful for user ${this.username} and with its role`;
        return result;
    }
};

var CheckUSerExist=function(){
    this.isUerExists = function(username){
        // Logic to Check user Exist
        return true;
    }
};

var CheckLoginStatus=function(){
    this.isUserAuthenticated = function(username){
        // Logic TO Varify UserName and Psssword
        return true;
    }
};

var CheckRoleForUser=function(){
    this.IsUserHasRole = function(username){
        // Logic to Check if the User HAs role
        return true;
    }
}
var CheckIfRoleHasAccess = function(){
    this.isRoleHasAccess = function(username){
        return true;
    }
}


var client = function(){
    var identity = new grantAccess("A","B");
    var gotAccess = identity.getAccess();
}