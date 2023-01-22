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

function solution(string) {
  let result = "";
  return result;
}

const answer = solution(input);
console.log(answer);
