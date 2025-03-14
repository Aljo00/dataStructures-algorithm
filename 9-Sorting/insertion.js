// Write the function to sort the given array in ascending order.

const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

console.log(insertionSort([29, 10, 14, 37.14, 33, 8, 11]));
