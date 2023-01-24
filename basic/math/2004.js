// 백준 2004 조합 0의 개수

/**
 * ? 조합이란?
 * 서로 다른 n개중에 r개를 선택하는 경우의 수를 의미합니다. (순서 상관 없음)
 * 조합의 공식 nCr = n!/(n-r)!r!
 *
 */

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
  calCombination(numArr[0], numArr[1]);
  return result;
}

function calCombination(n, r) {
  return factorial(n) / (factorial(n - r) * factorial(r));
}

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
