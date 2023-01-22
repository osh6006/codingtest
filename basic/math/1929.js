// 백준 1929 소수 구하기

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/math/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = solution(input);
console.log(answer);

function solution(numArr) {
  let result = "";
  for (let i = numArr[0]; i <= numArr[1]; i++) {
    if (calPrimeNumber(i)) result += `${i}\n`;
  }
  return result.trim();
}

function calPrimeNumber(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
