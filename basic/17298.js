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

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] < a[i]) {
      const [value, idx] = stack.pop();
      bigO[idx] = a[i];
    }
    stack.push([a[i], i]);
  }

  return bigO.join(" ");
}

const answer = solution(+N.trim(), A.split(" ").map(Number));
console.log(answer);
