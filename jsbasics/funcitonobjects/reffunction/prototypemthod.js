// extending the StringOperations by adding new method in it using Prototype
StringOperations.prototype.changeCase = function(str,c){
    if(c == "U" || c == "u") return str.toUpperCase();
    if(c == "L" || c == "l") return str.toLowerCase();
    return str;
}