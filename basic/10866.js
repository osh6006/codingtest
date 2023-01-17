// 10866 deck

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [length, ...commands] = input;
const realCommands = commands.map(e => e.trim());

function solution(length, commands) {
  const deck = [];
  let answer = "";

  for (const iterator of commands) {
    const [cmd, data] = iterator.split(" ");
    // console.log(cmd, data);
    switch (cmd) {
      case "push_front":
        deck.splice(0, 0, data);
        break;
      case "push_back":
        deck.push(data);
        break;
      case "pop_front":
        const pop_front = deck.shift();
        pop_front ? (answer += pop_front + "\n") : (answer += "-1" + "\n");
        break;
      case "pop_back":
        const pop_back = deck.pop();
        pop_back ? (answer += pop_back + "\n") : (answer += -1 + "\n");
        break;
      case "size":
        answer += deck.length + "\n";
        break;
      case "empty":
        deck.length === 0 ? (answer += "1" + "\n") : (answer += "0" + "\n");
        break;
      case "front":
        const front = deck[0];
        front ? (answer += +front + "\n") : (answer += -1 + "\n");
        break;
      case "back":
        const back = deck[deck.length - 1];
        back ? (answer += +back + "\n") : (answer += -1 + "\n");
        break;
      default:
        break;
    }
    // console.log(cmd, deck, answer);
  }
  return answer.trim();
}
const result = solution(+length, realCommands);
console.log(result);
