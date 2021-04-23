// Time - O(N^2) | Space - O(1)

const isUnique2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}

// Time - O(N) | Space - O(N)

const isUnique = (str) => {
  let object = {};

  for (let i = 0; i < str.length; i++) {
    const char  = str[i];
    
    if (!object[char]) {
      object[char] = 1;
    } else {
      object[char] += 1;
    }
  }

  for (const key in object) {
    if (object[key] > 1) {
      return false;
    }
  }
  return true;
}

console.log(isUnique2('abcgdefg'));