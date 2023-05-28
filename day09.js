//1. 개미군단
/* 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1 */
function solution(hp) {
    var answer = 0;

    answer += ~~(hp / 5);
    if (hp % 5 > 0) {
        let left = hp % 5; //5로 나누고 남은거
        answer += ~~(left / 3); //3으로 나눈 몫 (병정개미의 수)
        answer += left % 3; //3으로 나눈 나머지 (0이어도 더해지면되고 아니면 일개미 1을 의미)
    }
    return answer;
}

//다른사람1
function solution(hp) {
    //5의 몫(장군개미) + 남은값의 3의 몫(병정개미) + 남은거의 남은거
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

//2. 모스부호2
function solution(letter) {
    morse = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
    };
    var answer = letter
        .split(" ")
        .map((v) => morse[v])
        .join("");
    //다른사람1 reduce쓰기!!
    answer = letter.split(" ").reduce((prev, curr) => prev + morse[curr], "");
    return answer;
}

//3. 가위 바위 보 - 가위는 2 바위는 0 보는 5
function solution(rsp) {
    const win = { 2: "0", 0: "5", 5: "2" };
    var answer = rsp.split("").reduce((prev, curr) => prev + win[curr], "");
    return answer;
}

//4. 구슬을 나누는 경우의 수
//서로 다른 n개 중 m개를 뽑는 경우의 수 공식 balls 중 share
function solution(balls, share) {
    function facto(n) {
        let fac = BigInt(1); //방법2. BigInt형식을 사용해야 balls, share의 범위를 감당할 수 있어졌기 때문
        for (let i = 1; i <= n; i++) {
            fac = fac * BigInt(i);
        }
        return fac
    }
    var answer = facto(balls) / (facto(balls-share) * facto(share));
    return answer;
}
solution(3, 2)
/*
https://everyhahaha.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-JS-%EB%A0%88%EB%B2%A8-0-%EA%B5%AC%EC%8A%AC%EC%9D%84-%EB%82%98%EB%88%84%EB%8A%94-%EA%B2%BD%EC%9A%B0%EC%9D%98-%EC%88%98-feat-%EC%86%8C%EC%88%98%EC%A0%90-%EA%B3%84%EC%82%B0-%EC%98%A4%EB%A5%98

자바스크립트에서는 소수점 오류가 생기는 이유는 실수를 이진수로 변환(부동소수점)해서 연산하기 때문이다.
2진수로 정확하게 표현할 수 없는 일부 10진수 값들은 정확한 값이 아닌 근사값으로 저장돼 반올림 오차가 생기기 때문이다.

방법1. 반올림 Math.round() 
*/

//다른사람 추가 공식 재귀
const facto = (num) => num === 0 ? 1 : num * facto(num - 1);