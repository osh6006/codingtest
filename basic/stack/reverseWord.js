const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach(element => {
  let answer = "";
  element.split(" ").forEach(data => {
    // console.log(data.split("").reverse().join("").trim());
    answer += data.split("").reverse().join("").trim() + " ";
  });
  console.log(answer);
});
