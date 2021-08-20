// str is like constructor parameter
// whatever is written out-sidem of return statement is  private to the function
function StringOperations(str){
    // closure in JavaScript
     function changeCase(c){
        if(c == "U" || c == "u") return str.toUpperCase();
        if(c == "L" || c == "l") return str.toLowerCase();
        return str;
    }
    return {
        getLength:function(){
            return str.length;
        },
        reverse:function(){
            var result;
            for(var i=str.length-1;i>=0;i--){
                result+=str[i];
            }
            return result;
        },
        // passing the 'changeCase' function Name to 'updateCase' key
        updateCase: changeCase
    }
};