// 1. 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다.
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.
//  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine

function solution(numbers) {
  var answer = 0;
  const numbersArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  while (numbers !== '') {
    for (num in numbersArr) {
      if (numbers.startsWith(numbersArr[num])) {
        answer += num;
        numbers = numbers.replace(numbersArr[num], '');
      }
    }
  }

  return Number(answer);
}

//다른사람 풀이
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
    return obj[v];
  });
  //정규표현식에 있는 거 각각 9번 replace된다!! 한번에 2개도 바뀜
  return Number(num);
}

// const answer = solution('onetwothreefouronefivesixseveneightnine');
// console.log(answer);

//이렇게 하면 처음하나만되는데 정규표현식쓰면 2개다 바뀜
const what1 = 'onetwothreefouronefivesixseveneightnine'.replace('one', '1');
const what2 = 'onetwothreefouronefivesixseveneightnine'.replace(/one/g, '1');
// console.log(what2);

//-----------------------
//2. 인덱스 바꾸기
//https://school.programmers.co.kr/learn/courses/30/lessons/120895
/**
 * 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때,
 * my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
 */

function solution(my_string, num1, num2) {
  var answer = '';
  answer = my_string.substring(0, num1) + my_string[num2] + my_string.substring(num1 + 1);
  answer = answer.substring(0, num2) + my_string[num1] + my_string.substring(num2 + 1);
  // console.log(answer);
  return answer;
}

// const answer2 = solution('I love you', 3, 6);
// console.log(answer2);

//다른사람 풀이
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}

//3.한 번만 등장한 문자
//https://school.programmers.co.kr/learn/courses/30/lessons/120896
//문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

//문제 잘못읽은... 한번만 등장하는 문자!! --이게 진짜 정답
//아니면 라스트인덱스랑 그냥 인덱스랑 같으면 가능
function solution(s) {
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    if (s.split(s[i]).length === 2) temp += s[i];
  }
  return temp.split('').sort().join('');
}

var answer3 = solution('abcabcadc');
console.log(answer3);
// var answer3 = solution('abcd');

//착각한 문제
function solution(s) {
  var charCount = {};
  for (char of s) {
    // if (countObj[char]) {
    //   countObj[char] += 1;
    // } else {
    //   countObj[char] = 1;
    // }
    charCount[char] = (charCount[char] || 0) + 1; //이렇게 한문장으로 가능!!!
  }

  // 등장 횟수가 가장 많은 문자들을 찾기 맥스 메서드 써서 필터링하기
  const maxCount = Math.max(...Object.values(charCount));
  console.log(maxCount);
  const mostFrequentChars = Object.keys(charCount).filter((char) => charCount[char] === maxCount);
  console.log(mostFrequentChars);

  // 가장 많이 등장한 문자들을 사전 순으로 정렬
  const result = mostFrequentChars.sort().join('');
  console.log(result);

  // const mostnum = 0;
  // const some = Object.keys(countObj).reduce((acc, currentIndex) => {
  //   if (acc < countObj[currentIndex]) return currentIndex;
  // }, 0);

  return result;
}

//4.약수구하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120897
//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

console.log(solution(40));
//다른사람 풀이
function solution(n) {
  return Array(n)
    .fill(0)
    .map((v, index) => v + index + 1)
    .filter((v) => n % v === 0);
}