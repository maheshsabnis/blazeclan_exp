var StringOperations = function(){
    function private(){
        console.log('I am Provatre Function');
    }
    this.getLength = function(str){
        return str.length;
    };
    this.reverse = function(str){
        var result;
        for(var i=str.length-1;i>=0;i--){
            result+=str[i];
        }
        return result;
    }
}