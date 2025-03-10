// Write a function to sort the given array in ascending order.

function qs(arr){
  if(arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }

  return [...qs(left), pivot, ...qs(right)]
}

console.log(qs([5, 2, 9, 36, 1, 8, 7]));
