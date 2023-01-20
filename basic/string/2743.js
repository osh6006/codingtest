const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(string) {
  return string.length;
}

const answer = solution(input);
console.log(answer);
