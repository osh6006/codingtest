// 백준 10430 나머지
/**
 * *첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.
 */

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

function solution(stringArr) {
  let result = "";
  const A = stringArr[0];
  const B = stringArr[1];
  const C = stringArr[2];

  result += `${(A + B) % C}\n`;
  result += `${((A % C) + (B % C)) % C}\n`;
  result += `${(A * B) % C}\n`;
  result += `${((A % C) * (B % C)) % C}\n`;

  return result.trim();
}

const answer = solution(input);
console.log(answer);
