// 1. 가까운 수
/*
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
 */

// 시도1 -indexof를 쓸필요가없음..
function solution(array, n) {
    const absArr = [];
    for (item of array) {
        absArr.push(Math.abs(item - n));
    }
    console.log("absarr", absArr);

    const idxArr = [];
    var idx = absArr.indexOf(Math.min(...absArr));
    console.log("idx", idx);
    while (idx != -1) {
        idxArr.push(idx);
        idx = array.indexOf(Math.min(...absArr), idx + 1);
        console.log("idx", idx);
    }
    console.log("idxarr", idxArr);
    console.log("idx", idx);

    const answerArr = [];
    for (item of idxArr) {
        answerArr.push(array[item]);
    }
    console.log("answerArr", answerArr);
    answerArr.sort((a, b) => a - b);

    return answerArr[0];
}

// 참고 후 제출 답
function solution(array, n) {
    const absArr = [];
    for (item of array) {
        absArr.push(Math.abs(item - n));
    }

    const answerArr = [];
    for (let index = 0; index < absArr.length; index++) {
        if (absArr[index] === Math.min(...absArr)) {
            // 제일작은 절댓값이 같으면 같은 인덱스의 array의 값을 배열에 넣기
            answerArr.push(array[index]);
        }
    }

    // 리턴을 그중에 작은 거로!! 하면됨!
    return Math.min(...answerArr);
}

solution([1, 4, 2, 1], 3);

//다른 사람 풀이
function solution(array, n) {
    return array.reduce((a, c) => (Math.abs(a - n) < Math.abs(c - n) ? a : Math.abs(a - n) === Math.abs(c - n) ? Math.min(a, c) : c));
}
// 차의 절댓값이 a가 c보다 작으면 a / 같으면 a나 c중에 작은거 /  절댓값이 c가 작으면 c

//reduce와 삼항연산자 활용법

//2. 369게임

function solution(order) {
    const result = String(order).match(/[369]/g) ?? [];
    return result.length;
}
solution(29423);
// 스트링화해서 3 6 9 중에 하나만 매치한것만 남겨두기!! 없으면 빈 배열

// 3. 암호해독
/*
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(cipher, code) {
    var answer = [];
    for (let i = code - 1; i < cipher.length; i += code) {
        answer.push(cipher[i]);
    }
    return answer.join("");
}

// 다른 사람 풀이
function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
        // 이렇게 하면 배열로 할 필요없이 answer 그냥 반환!
    }
    return answer;
}
solution("dfjardstddetckdaccccdegk", 4);

//4. 대문자와 소문자
function solution(my_string) {
    var answer = "";
    for (letter of my_string) {
        if (letter.match(/[A-Z]/g)) {
            answer += letter.toLowerCase();
        } else {
            answer += letter.toUpperCase();
        }
    }
    return answer;
}

solution("cccCCC");

//다른 사람 풀이 - toUpperCase 써서 그게 원래 꺼랑 같으면 그게 대문자인것!!

function solution(my_string) {
    var answer = "";
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}

/*
정규표현식 - /[A-Z]/g 대문자!
reduce와 삼항연산자 활용법
*/
