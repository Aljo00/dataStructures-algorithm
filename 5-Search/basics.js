//Find the index of target element from an sorted array.

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) return middle;
    else if (arr[middle] < target) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));

//Find a word from a dictionary.

function findAWord(words, target) {
  let start = 0;
  let end = words.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (words[middle] === target) return middle;
    else if (words[middle] < target) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
}

console.log(findAWord(["apple", "banana", "cherry", "fish"],"banana"));
