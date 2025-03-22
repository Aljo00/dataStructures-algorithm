function findKthlargest(arr, k) {
  heapSort(arr);
  return arr[arr.length - k];
}

function deleteElem(arr, index) {
  let n = arr.length;

  if (index >= n) {
    console.log("Invalid Index");
    return;
  }

  arr[index] = arr.pop();
  return heapSort(arr, n - 1, index);
}

function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];

    heapify(arr, n, largest);
  }
}

let arr = [5, 12, 11, 7, 6, 13];
// let k = 3
deleteElem(arr,0)
console.log(arr);
