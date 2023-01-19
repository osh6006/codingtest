// 백준 10809 알파벳 찾기

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function solution(string) {
  const alphaMap = new Map();
  let result = "";

  for (let i = 97; i <= 122; i++) {
    alphaMap.set(String.fromCharCode(i), -1);
  }

  for (let i = 0; i < string.length; i++) {
    const word = string[i];
    if (alphaMap.has(word) && alphaMap.get(word) === -1) {
      alphaMap.set(word, i);
    }
  }

  for (const [key, value] of alphaMap) {
    result += value + " ";
  }

  return result;
}

const answer = solution(input);
console.log(answer);
