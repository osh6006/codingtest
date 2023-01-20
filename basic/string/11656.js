// 백준 11656 접미사 배열

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    for (let k = i; k < string.length; k++) {
      const element = string[k];
      result += element;
    }
    result += "\n";
  }

  return result.trim().split("\n").sort().join("\n");
}

const answer = solution(input);
console.log(answer);
