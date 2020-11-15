function isIsogram(str){
    var storage = new Set();
    for(const c of str.toLowerCase()){
        if(storage.has(c)){
            return false;
        }
        storage.add(c);
    }
    
    return true;

    // or could compare length of set to string length, would be more elegant..
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram(""));