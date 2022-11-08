/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const charObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const charOpen = Object.keys(charObj);

  const stack = [];

  for (const char of s) {
    if (charOpen.includes(char)) {
      stack.push(char);
    } else {
      if (charObj[stack[stack.length - 1]] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};


/* 
var isValid = function (s) {
  const stack = [];

  for (const char of s) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      const lastChar = stack.pop();
      if (
        (char === "}" && lastChar !== "{") ||
        (char === "]" && lastChar !== "[") ||
        (char === ")" && lastChar !== "(")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
 */