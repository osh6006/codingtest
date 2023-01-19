const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(stringArr) {
  let result = "";

  for (let i = 0; i < stringArr.length; i++) {
    const element = stringArr[i].split("");
    const strOptMap = new Map();
    let temp = [];
    strOptMap.set("lower", 0);
    strOptMap.set("upper", 0);
    strOptMap.set("number", 0);
    strOptMap.set("space", 0);
    if (input[i] === "") continue;

    for (let k = 0; k < element.length; k++) {
      const word = element[k];
      if (word >= "0" && word <= "9") {
        strOptMap.set("number", strOptMap.get("number") + 1);
      } else if (word >= "A" && word <= "Z") {
        strOptMap.set("upper", strOptMap.get("upper") + 1);
      } else if (word >= "a" && word <= "z") {
        strOptMap.set("lower", strOptMap.get("lower") + 1);
      } else if (word === " ") {
        strOptMap.set("space", strOptMap.get("space") + 1);
      }
    }
    for (const [key, value] of strOptMap) {
      temp.push(value);
    }
    result += temp.join(" ") + "\n";
  }
  return result.trim();
}

const answer = solution(input);
console.log(answer);
