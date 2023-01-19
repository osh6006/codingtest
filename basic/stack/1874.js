const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [length, ...numbers] = input;

function solution(length, array) {
  const stack = [];
  let answer = "";
  let count = 1;

  for (let i = 0; i < length; i++) {
    const number = array.shift();

    while (count <= number) {
      stack.push(count++);
      answer += "+ ";
    }

    const popedItem = stack.pop();
    if (popedItem !== number) {
      return "NO";
    }
    answer += "- ";
  }
  return answer.split(" ").join("\n");
}

const answer = solution(length, numbers);
console.log(answer);
