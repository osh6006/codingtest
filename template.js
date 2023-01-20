const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic//test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(string) {
  let result = "";
  return result;
}

const answer = solution(input);
console.log(answer);
