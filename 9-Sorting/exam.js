//Bubble Sort
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log(arr);
}

bubbleSort([29, 10, 14, 37, 14]);

//Insertion Sort
function insertionSort(arr) {
  let n = arr.length;
  for (i = 0; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j <= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
}

insertionSort([29, 10, 14, 37, 14]);

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minVal = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minVal]) {
        minVal = j;
      }
    }

    if (minVal !== i) {
      [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
    }
  }
  console.log(arr);
}

selectionSort([29, 10, 14, 37, 14]);

//Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let n = arr.length;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < n; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([29, 10, 14, 37, 14]));

//Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([29, 10, 14, 37, 14]));
