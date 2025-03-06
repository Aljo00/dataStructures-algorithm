//reverse an string;
function revStr(str){
    if( str === "") return "";
    else return revStr(str.substring(1)) + str.charAt(0);
}

// console.log(revStr("hello"));

//reverse an array one method.
function revArr(arr, left = 0, right = arr.length-1){

    if(left >= right) return;

    [ arr[left], arr[right] ] = [ arr[right], arr[left]];

    revArr(arr,left+1, right-1)
}
let arr = [1,2,3,4,5]

revArr(arr)

// console.log(arr);

//Another method to reverse an array.
function revArray(arr){
    if(arr.length === 0) return [];
    else return revArray(arr.slice(1)).concat(arr[0]);
}

// console.log(revArray([1,2,3,4,5]));

//sum of an array
function sum(arr){
    if(arr.length === 0) return 0;
    else return arr[arr.length - 1] + sum(arr.slice(0,arr.length -1));
}

// console.log(sum([1,2,3,4,5]));

//Print the first n fibnocci numbers.
function fibnocci(n){
    if(n <= 1) return n;
    return fibnocci(n-1) + fibnocci(n-2)
}

console.log(fibnocci(2));


// for (let i = 0; i < 10; i++) {
//     console.log(fibnocci(i));
// }

//remove a char from the string.
function removeChar(str,target){
    if(str === "") return "";

    let char = str[0] === target ? "" : str[0];
    return char + removeChar(str.slice(1), target)
}

console.log(removeChar("Banana","a"));
