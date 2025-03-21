// You are given two strings, and you need to check if they are anagrams of each other.

// Anagram Definition: Two strings are anagrams if they contain the same characters in the same frequency, but their order can be different.
// Example:
// "listen" and "silent" → ✅ (Anagrams) -> return true
// "hello" and "world" → ❌ (Not Anagrams) -> return false

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) return false;

    charCount[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "olleh")); // Output: false

// console.log(validAnagram("listen", "sileet"));

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;

      let top = stack.pop();
      if (
        (char === ")" && top !== "(") ||
        (char === "}" && top !== "{") ||
        (char === "]" && top !== "[")
      )
        return fasle;
    }
  }

  return stack.length === 0;
}

// console.log(isValid("(){}[]{"));

//Write a program to sort a string by using merge sort.

function mergeString(str) {
  if (str.length <= 1) return str;

  let mid = Math.floor(str.length / 2);
  let left = mergeString(str.slice(0, mid));
  let right = mergeString(str.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortStr = "";
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortStr += left[i];
      i++;
    } else {
      sortStr += right[j];
      j++;
    }
  }

  return sortStr + left.slice(i) + right.slice(j);
}

// console.log(mergeString("nmlkjihgfedcba"));

function nonRepeatingChars(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = [];
  for (let char in charCount) {
    if (charCount[char] > 1) result.push(char);
  }

  console.log(result);
}

nonRepeatingChars("Aljo")