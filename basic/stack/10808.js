// 백준 10808 알파벳의 개수
// 시간 복잡도 O(N)

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/stack/test.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

function countAlphabet(string) {
  const alphaMap = new Map();
  let result = "";

  for (let i = 97; i <= 122; i++) {
    alphaMap.set(String.fromCharCode(i), 0);
  }

  for (let i = 0; i < string.length; i++) {
    const word = string[i];
    if (alphaMap.has(word)) {
      alphaMap.set(word, alphaMap.get(word) + 1);
    }
  }
  for (const [key, value] of alphaMap) {
    result += value + " ";
  }
  return result;
}

const answer = countAlphabet(input);
console.log(answer);
