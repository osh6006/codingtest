// 11655 ROT13

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/string/test.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
let words = input[0];

const answer = solution(words);
console.log(answer);

function solution(stringArr) {
  result = "";
  for (let i = 0; i < stringArr.length; i++) {
    const element = stringArr[i];
    result += makeROT13(element);
  }
  return result;
}

function makeROT13(word) {
  if ((word >= "0" && word <= "9") || word === " ") {
    return word;
  } else if (word >= "A" && word <= "Z") {
    if (word.charCodeAt(0) + 13 > 90) {
      return String.fromCharCode(word.charCodeAt(0) + 13 - 26);
    } else {
      return String.fromCharCode(word.charCodeAt(0) + 13);
    }
  } else {
    if (word.charCodeAt(0) + 13 > 122) {
      return String.fromCharCode(word.charCodeAt(0) + 13 - 26);
    } else {
      return String.fromCharCode(word.charCodeAt(0) + 13);
    }
  }
}
