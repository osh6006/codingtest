// 백준 1978 소수 찾기

// const filePath =
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/math/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
input.shift();

const answer = solution(input[0].split(" ").map(Number));
console.log(answer);

function solution(numArr) {
  let count = 0;
  for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i];
    calPrimeNumber(element) && count++;
  }
  return count;
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
