const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/stack/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
const infix = input;

// A*(B+C) => ABC+*
function infixToPostfix(infixStr) {
  let postfix = "";
  let stack = [];

  for (let i = 0; i < infixStr.length; i++) {
    let ch = infixStr[i];

    if (ch >= "A" && ch <= "Z") postfix += ch;
    else if (ch === "(") stack.push(ch);
    else if (ch === ")") {
      while (stack.length && stack[stack.length - 1] !== "(")
        postfix += stack.pop();
      stack.pop();
    } else if (ch === "+" || ch === "-") {
      while (stack.length && stack[stack.length - 1] !== "(")
        postfix += stack.pop();
      stack.push(ch);
    } else if (ch === "*" || ch === "/") {
      while (
        stack.length &&
        (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
      )
        postfix += stack.pop();
      stack.push(ch);
    }
  }
  while (stack.length) postfix += stack.pop();

  return postfix;
}

const answer = infixToPostfix(infix);
console.log(answer);
