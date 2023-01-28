// 프로그래머스 개미 군단

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/programers/test.txt";
const input = require("fs").readFileSync(filePath).toString();

let inputTemp = input;
let answer = 0;
while (inputTemp !== 0) {
  if (inputTemp >= 5) {
    answer += Math.floor(inputTemp / 5);
    inputTemp %= 5;
  } else if (inputTemp >= 3) {
    console.log(inputTemp);
    answer += Math.floor(inputTemp / 3);
    inputTemp %= 3;
  } else {
    answer += Math.floor(inputTemp / 1);
    inputTemp %= 1;
  }
}

console.log(answer);
