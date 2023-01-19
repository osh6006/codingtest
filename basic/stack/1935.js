// 백준 후위표기식 2

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/stack/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [length, exp, ...nums] = input;

function solution(length, exp, array) {
  exp.pop();
  let eng = {};
  for (let i = 0; i < length; i++) {
    eng[String.fromCharCode(i + 65)] = array[i];
  }
  const operators = ["+", "-", "/", "*"];
  let stack = [];
  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const numWithStr = exp.map(item =>
    operators.includes(item) ? item : eng[item]
  );

  for (let i = 0; i < numWithStr.length; i++) {
    let temp = numWithStr[i];
    if (operators.includes(temp)) {
      let first = stack.pop();
      let second = stack.pop();
      let calFun = calculator[temp];
      temp = calFun(second, first);
    }
    stack.push(temp);
  }

  return stack[0].toFixed(2);
}

const answer = solution(+length.trim(), exp.split(""), nums.map(Number));
console.log(answer);
