//Find the non-repeating character from a string.
function nonRepeatingStr(str){
    let frequency = {};

    for(let char of str){
        frequency[char] = (frequency[char] || 0) + 1;
    };

    for(let char of str){
        if(frequency[char] === 1){
            return char;
        }
    }

    return null;
}

console.log(nonRepeatingStr("adesadesv"));

//reverse the string by using recursion
function revStr(str){
    if(str === "" )return "";
    else return revStr(str.substring(1)) + str.charAt(0);
}

console.log(revStr("Aljo"));
