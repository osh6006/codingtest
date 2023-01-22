// 백준 2609 최대공약수와 최소공배수

/**
 * ? 유클리드 호재법 이란?
 * 2개의 자연수  a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단 a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
 * 이 성질에 따라, b를 r로 나눈 나머지 r0를 구하고,
 * 다시 r을 r0로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
 */

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./basic/math/test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const answer = solution(input);
console.log(answer[0]);
console.log(answer[1]);

function solution(numArr) {
  const [firstNum, secondNum] = numArr;
  const GCD = calGCD(firstNum, secondNum);
  const LCM = calLCM(firstNum, secondNum, GCD);
  return [GCD, LCM];
}

function calGCD(num1, num2) {
  if (num2 === 0) {
    return num1;
  } else {
    return calGCD(num2, num1 % num2);
  }
}

function calLCM(num1, num2, gcd) {
  return (num1 * num2) / gcd;
}
