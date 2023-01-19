// 백준 17298 오큰수

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, A] = input;

function solution(n, a) {
  const stack = [];
  const bigO = new Array(n).fill(-1);
  const temp = new Map();

  for (let i = 0; i < n; i++) {
    if (!temp.has(a[i])) {
      temp.set(a[i], 0);
    }
    temp.set(a[i], temp.get(a[i]) + 1);
  }
  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temp.get(a[stack[stack.length - 1]]) < temp.get(a[i])
    ) {
      bigO[stack.pop()] = a[i];
    }
    stack.push(i);
  }
  return bigO.join(" ");
}

const answer = solution(+N.trim(), A.split(" ").map(Number));
console.log(answer);
