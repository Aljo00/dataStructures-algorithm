//reverse an string;
function revStr(str){
    if( str === "") return "";
    else return revStr(str.substring(1)) + str.charAt(0);
}

console.log(revStr("hello"));

//reverse an array one method.
function revArr(arr, left = 0, right = arr.length-1){

    if(left >= right) return;

    [ arr[left], arr[right] ] = [ arr[right], arr[left]];

    revArr(arr,left+1, right-1)
}
let arr = [1,2,3,4,5]

revArr(arr)

console.log(arr);

//Another method to reverse an array.
function revArray(arr){
    if(arr.length === 0) return [];
    else return revArray(arr.slice(1)).concat(arr[0]);
}

console.log(revArray([1,2,3,4,5]));
