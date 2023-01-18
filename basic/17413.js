// 17413 단어뒤집기 2

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(string) {
  let result = "";
  let stack = [];
  let temp = [];
  let isTag = false;

  for (let i = 0; i < string.length; i++) {
    const word = string[i];

    if (word === "<") {
      if (!isTag) {
        while (stack.length > 0) {
          result += stack.pop();
        }
      }
      isTag = true;
    }
    if (word === ">") {
      isTag = false;
      stack.push(word);
      while (stack.length > 0) {
        result += stack.shift();
      }
      continue;
    }
    if (isTag) {
      stack.push(word);
    }
    if (!isTag) {
      if (word === " ") {
        while (stack.length > 0) {
          result += stack.pop();
        }
        result += " ";
      } else {
        stack.push(word);
      }
    }
  }
  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
}

const answer = solution(input);
console.log(answer);
