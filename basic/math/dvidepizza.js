// 프로그래머스 피자 나눠 먹기 1, 2, 3,

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/math/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const answer = solution(input);
console.log(answer);

// 1

// function solution(num) {
//   let answer = 0;
//   num <= 7 ? (answer = 1) : (answer = Math.floor(num / 7 + (num % 7)));
//   return answer;
// }

// 2
// function solution(num) {
//   let result = 1;
//   let i = 6;
//   while (i % num !== 0) {
//     i = i + 6;
//     result++;
//   }
//   return result;
// }

// 3
function solution(num) {
  console.log(num);
  let slice = num[0];
  let n = num[1];

  return Math.ceil(n / slice);
}
