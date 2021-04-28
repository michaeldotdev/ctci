// Sorting - Time O(N Log N) | Space - O(1)

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let sortedStr1 = str1.split('').sort().join('');
  let sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}


// Using Hash Map - Time O(N) | Space - O(N)

const checkPermutation2 = (str1, str2) => {
  let obj = {};
  if (str1.length !== str2.length) return false;

  for (const char of str1) {
    obj[char] ? obj[char] = + 1 : obj[char] = 1;
  };

  for (const char of str2) {
    if (obj[char] && obj[char] !== 0) {
      obj[char]--;
    } else return false;
  }
  return true;
}

console.log(checkPermutation2('ABCDS', 'CBRDA'))