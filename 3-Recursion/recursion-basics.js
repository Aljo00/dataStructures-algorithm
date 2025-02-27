function multiply(arr) {
    if(arr.length <= 0) return 1;// base case
    else return arr[arr.length - 1] * multiply(arr.slice(0,arr.length - 1))
    
}

console.log(multiply([1,2,3,4]));

//find the factorial of a number.
function factorial(n){
    if(n === 0) return 1; //base case
    else return n * factorial(n-1)
}

console.log(factorial(5));

//create a array with a custom start and end range.
function arr(start, end) {
    if(end < start) return [];
    else {
        const numbers = arr(start,end - 1);
        numbers.push(end);
        return numbers;
    }
    
}

console.log(arr(0,5));