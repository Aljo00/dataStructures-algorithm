// Write a function a to sort the given array in ascending order without any duplicates.

const bubbleSort = (arr) => {
  let uniArr = [...new Set(arr)];
  const n = uniArr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (uniArr[j] > uniArr[j + 1]) {
        [uniArr[j], uniArr[j + 1]] = [uniArr[j + 1], uniArr[j]];
      }
    }
  }

  console.log(uniArr);
};

bubbleSort([29, 10, 14, 37, 14]);
