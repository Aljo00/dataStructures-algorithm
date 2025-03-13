function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charCount = new Map();
  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!charCount.has(char) || charCount.get(char) === 0) return false;

    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
