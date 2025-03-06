function revStr(str){
  if( str === "") return "";
  return revStr(str.substring(1))+str.charAt(0)
}

console.log(revStr("Aljo"));

function revArr(arr) {
  if(arr.length === 0) return [];
  return revArr(arr.slice(1)).concat(arr[0])
}

console.log(revArr([1,2,3,4,5]));

function sumArr(arr){
  if(arr.length === 0) return 0;
  return arr[arr.length - 1] + sumArr(arr.slice(0,arr.length-1));
}

console.log(sumArr([1,2,3,4,5]));

function fib(n){
  if(n <= 1) return n;
  return fib(n-1) + fib(n - 2);
}

console.log(fib(2));

for(let i = 0; i < 10; i++){
  console.log(fib(i));
}

function removeChar(str,target){
  if(str === "") return "";
  let char = str[0] === target ? "" : str[0];
  return char + removeChar(str.slice(1),target);
}

console.log(removeChar("banana","n"));

function isPrime(n , i = 2){
  if( n <= 1) return false;
  if(n === 2) return true;
  if(n % i === 0) return false;
  if(i * i > n) return true;

  return isPrime(n , i + 1)
}

console.log(isPrime(15));

function palindrome(str,left = 0, right = str.length - 1){
  if(left >= right) return true;

  if(str[left] !== str[right]) return false;

  return palindrome(str, left+1, right-1);
}

console.log(palindrome("malayalame"));
