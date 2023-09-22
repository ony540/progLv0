// 1. 컨트롤 제트
/*
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
*/
function solution(s) {
    var array = s.split(" ").map((item) => Number(item));

    var result = 0;
    for (i = 1; i < array.length; i++) {
        if (!isNaN(array[i]) && !isNaN(array[i - 1])) {
            //다음도 본인도 NaN아닐때
            result += array[i - 1];
        }
    }
    if (!isNaN(array[array.length - 1])) result += array[array.length - 1]; //마지막 본인이 NaN아닐때
    return result;
}
solution("1 2 Z 3");

// 다른사람 풀이
function solution(s) {
    const stack = [];

    s.split(" ").forEach((target) => {
        if (target === "Z") stack.pop(); //스택처럼 지금이 z면 이전 것 빼기
        else stack.push(+target); //아니면 target 숫자화해서 넣기
    });

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0; //누적합
}

//다른 풀이
function solution(s) {
    let arr = s.split(" ");

    while (arr.indexOf("Z") > -1) {
        // z 앞부터 두개 삭제하기
        arr.splice(arr.indexOf("Z") - 1, 2);
    }

    return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

//2.배열 원소의 길이
/*
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
 */
function solution(strlist) {
    var answer = strlist.map((item) => item.length);
    return answer;
}

//3. 중복된 문자 제거
/*
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
*/
function solution(my_string) {
    var set = new Set(my_string.split(""));
    var answer = [...set].join("");
    return answer;

    //  return [...new Set(my_string)].join(''); // 문자열 자체에도 Set이 된다.
}

//4. 삼각형의 완성조건(1)

/*
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/
function solution(sides) {
    sides.sort((a, b) => a - b);
    var answer = 0;
    if (sides[2] < sides[0] + sides[1]) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}

//다른 사람 풀이 - 간결
function solution(sides) {
    sides = sides.sort((a, b) => a - b);
    return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

/*
arr.indexOf('Z') - z의 인덱스번호, 없을 경우 -1
arr.splice( arr.indexOf('Z')-1, 2); - z 앞부터 두개 삭제하기

 if(target === 'Z') stack.pop(); //스택처럼 지금이 z면 이전 것 빼기 pop -배열에서 마지막꺼 빼기
        else stack.push(+target) // 앞에 +붙이면 숫자화


new Set(my_string) -> 문자열 자체에도 Set이 된다.
*/
