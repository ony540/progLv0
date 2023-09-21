// 1. 모음제거
/*
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    var answer = my_string.replaceAll(/[aeiou]/g, "");
    return answer;
}
solution("bus");

//2. 문자열 정렬하기
/*
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/
function solution(my_string) {
    var answer = my_string
        .replace(/[\D]/g, "")
        .split("")
        .map((num) => parseInt(num))
        .sort((a, b) => a - b);
    return answer;
}

solution("hi12392");

// 다른 사람 풀이 - 숫자인것만 골라서 match하면 배열을 반환함!!
return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));

//3. 숨어있는 숫자의 덧셈 (1)
/*
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_string) {
    return my_string
        .match(/\d/g)
        .map((n) => Number(n))
        .reduce((acc, current) => acc + current);
}
solution("aAb1B2cC34oOp");

// 다른 사람 풀이 - 굳이 map Num할필요없이 한번에
function solution(my_string) {
    return my_string.match(/\d/g).reduce((acc, current) => acc + Number(current));
}

//4. 소인수분해
/*
소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
 */

// 안됨!!! for문 하면 그냥 2가 두번 곱해지는 경우 같은게 넘어가버림!
function solution(n) {
    let answer = [];
    for (i = 2; i <= n; i++) {
        // 이게 if가 아니라 while이여야 2가 여러번 있으면 여러번 나눈다 !!!
        if (n % i === 0) {
            answer.push(i);
            n /= i;
            console.log(n, "n");
            console.log(answer, "result");
        }
    }

    return [...new Set(answer)];
}
solution(252);

// 다른사람 풀이 정답!!!
function solution(n) {
    let result = [];
    let divisor = 2;

    // while을 사용해야
    while (n >= 2) {
        if (n % divisor === 0) {
            result.push(divisor);
            n = n / divisor;
            // 처음 n을 2로나누면 126인데 while문을 계속 실행하니까
            //(n % divisor === 0) 조건이 안맞는 동안에는 divisor++를 하지않아서 2가 있는 만큼 곱해짐!!
            console.log(n, "n");
            console.log(result, "result");
        } else divisor++;
    }

    return [...new Set(result)];
}

// 정규식
/*
''필요 없음 / / 사이에! 
[] 해당 문자중 하나
/g  대상 문자열내에 모든 패턴들을 검색하는 것을 의미
^ 아닌것
/[^0-9]/g - 숫자가 아닌것 
*/
