const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const answer = solution(input);
console.log(answer);

function solution(stringArr) {
  let result = "";
  result =
    Number(stringArr[0] + "" + stringArr[1]) +
    Number(stringArr[2] + "" + stringArr[3]);
  return result;
}
