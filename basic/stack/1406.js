// 백준 1406 에디터

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [string, length, ...command] = input;

const realString = string.trim();
const realLength = +length;

function solution(string, length, command) {
  let leftStack = string.split("");
  let rightStack = [];

  for (let i = 0; i < length; i++) {
    let word = command[i].split("").filter(e => {
      if (e !== "\r" && e !== " ") return true;
    });
    let [cmd, data] = word;

    switch (cmd) {
      case "L":
        if (leftStack.length !== 0) rightStack.push(leftStack.pop());
        break;
      case "D":
        if (rightStack.length !== 0) leftStack.push(rightStack.pop());
        break;
      case "B":
        if (leftStack.length !== 0) leftStack.pop();
        break;
      case "P":
        leftStack.push(data);
    }
  }
  return [...leftStack, ...rightStack.reverse()].join("");
}

const answer = solution(realString, realLength, command);
console.log(answer);
