// 백준 1463 1로 만들기

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/math/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const answer = solution(+input);
console.log(answer);

function solution(num) {
  const DP = new Array(num + 1).fill(0);

  for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;

    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }

    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
  }
  return DP[num];
}