// write the function to sort the given array in ascending order.

const selectionSort = (arr) => {
  const n = arr.length;
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
};

selectionSort([29, 10, 14, 37, 14]);
