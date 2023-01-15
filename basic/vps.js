const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let temp = [];
let length = input.shift();

for (let i = 0; i < length; i++) {
  let cnt = 0;

  for (let s of input[i]) {
    cnt += s === "(" ? 1 : -1;

    if (cnt < 0) break;
  }

  temp.push(cnt === 0 ? "YES" : "NO");
}

console.log(temp.join("\n"));
