// 10799 쇠막대기

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

function solution(cmd) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < cmd.length; i++) {
    const word = cmd[i];
    if (word === "(" && cmd[i + 1] === ")") {
      answer += stack.length;
      i++;
    } else if (word === "(") {
      stack.push(word);
    } else if (word === ")") {
      stack.pop();
      answer += 1;
    }
  }
  return answer;
}

const answer = solution(input);
console.log(answer);
