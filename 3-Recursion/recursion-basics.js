//Find the product of an array.
function multiply(arr) {
  if (arr.length <= 0) return 1;// base case
  else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1)); 
}

// console.log(multiply([1,2,3,4]));

//find the factorial of a number.
function factorial(n) {
  if (n === 0) return 1; //base case
  else return n * factorial(n - 1);
}

// console.log(factorial(5));

//create a array with a custom start and end range.
function arr(start, end) {
  if (end < start) return [];
  else {
    const numbers = arr(start, end - 1);
    numbers.push(end);
    return numbers;
  }
}

// console.log(arr(0,5));

//check that if it a number palidrome or not.
function palindrome(num, rev = 0, temp = num) {
  if (temp === 0) return num === rev;
  else {
    let n = temp % 10;
    rev = rev * 10 + n;
    return palindrome(num, rev, Math.floor(temp / 10));
  }
}

// console.log(palindrome(1223221))

//fibnoci Number
function fib(n) {
  if (n <= 1) return n;
  else return fib(n - 1) + fib(n - 2);
}

// console.log(fib(10))

//Reverse an string
function reverseStr(str) {
  if (str.length === 0) return "";
  else return reverseStr(str.substring(1)) + str[0];
}

console.log(reverseStr("aljo"));
