const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;

function solution(n, k) {
  let result = "";
  return result;
}

const answer = solution(N, K);
console.log(answer);
