// 1158 요세푸스

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
  const array = [];
  let count = 1;
  let answer = [];

  for (let i = 1; i <= n; i++) {
    array[i - 1] = i;
  }

  while (array.length) {
    const shiftItem = array.shift();
    if (count % k === 0) {
      answer.push(shiftItem);
    } else {
      array.push(shiftItem);
    }
    count++;
  }
  return answer.join(", ");
}

answer = solution(N, K);
console.log(`<${answer}>`);
