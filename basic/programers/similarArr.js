// 프로그래머스 배열의 유사도
// HashTable을 사용해서 해보자.
const s1 = ["a", "b", "c"];
const s2 = ["com", "b", "d", "p", "c"];

console.log(solution(s1, s2));

function solution(s1, s2) {
  const answer = new Map();
  const s1s2 = s1.concat(s2);
  let count = 0;

  s1s2.forEach(el => {
    if (answer.has(el)) {
      answer.set(el, answer.get(el) + 1);
    } else {
      answer.set(el, 0);
    }
  });

  for (const el of answer) {
    if (el[1] > 0) count += el[1];
  }

  return count;
}
