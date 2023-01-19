// 백준 10845 큐

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [length, ...commands] = input;
const realLength = +length;
const realCommands = commands.map(e => e.trim());

function solution(length, commands) {
  const queue = [];
  let answer = "";
  for (let i = 0; i < length; i++) {
    const [cmd, data] = commands[i].split(" ");
    switch (cmd) {
      case "push":
        queue.push(data);
        break;
      case "pop":
        const pop = queue.shift();
        pop ? (answer += `${pop}\n`) : (answer += `${-1}\n`);
        break;
      case "front":
        const front = queue[0];
        front ? (answer += `${queue[0]}\n`) : (answer += `${-1}\n`);
        break;
      case "back":
        queue[queue.length - 1]
          ? (answer += `${queue[queue.length - 1]}\n`)
          : (answer += `${-1}\n`);
        break;
      case "size":
        answer += `${queue.length}\n`;
        break;
      case "empty":
        queue.length > 0 ? (answer += `${0}\n`) : (answer += `${1}\n`);
        break;

      default:
        break;
    }
  }
  return answer;
}

const result = solution(realLength, realCommands);
console.log(result.trim());
