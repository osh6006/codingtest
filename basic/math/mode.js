// 프로그래머스 최빈값 구하기

/**
 * ? 최빈값이란?
 * 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
 * TODO  정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.
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
  //   const modeMap = new Map();
  //   let count = 0;
  //   let result = 0;

  //   for (let i = 0; i < numArr.length; i++) {
  //     if (modeMap.has(numArr[i])) {
  //       modeMap.set(numArr[i], modeMap.get(numArr[i]) + 1);
  //     } else {
  //       modeMap.set(numArr[i], 1);
  //     }
  //   }

  //   const max = [...modeMap.entries()].reduce((accumulator, element) => {
  //     return element[1] > accumulator[1] ? element : accumulator;
  //   });

  //   for (const element of modeMap) {
  //     if (max[1] === element[1]) {
  //       count++;
  //     }
  //   }

  //   count >= 2 ? (result = -1) : (result = max[0]);

  //   console.log(result);

  //   return result;

  let m = new Map();
  for (let n of numArr) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);

  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
