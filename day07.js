//1. 특정 문자 제거하기
function solution(my_string, letter) {
    var answer = my_string
        .split("")
        .filter((char) => char !== letter)
        .join("");

    //다른사람 방법 1
    //배열로 나눌필요없이 letter 기준으로 나눠서 합치기..
    answer = my_string.split(letter).join("");
    // 방법 2 replaceAll
    answer = my_string.replaceAll(letter, "");
    return answer;
}

//2.각도기
function solution(angle) {
    //비교는 한번에 X... ===
    var answer =
        angle < 90 && angle > 0
            ? 1 //예각
            : angle === 90
            ? 2 //직각
            : angle < 180
            ? 3 //둔각
            : 4;

    return answer;
}
//다른 사람 풀이 -출력값이 1 2 3 4 인걸 이용해서 length를 출력
function solution(angle) {
    return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

//3. 양꼬치
//Math.floor의 대체 기능 1. ~~ / 2. parshInt
function solution(n, k) {
    var answer = n * 12000 + (k - Math.floor(n / 10)) * 2000;
    return answer;
}

//4. 짝수의 합
function solution(n) {
    var answer = 0;
    
    //n의 홀수면 짝수로 만들기
    if (n % 2) {
        n -= 1;
    }

    for (let i = n; i > 0; i -= 2) {
        answer += i;
    }

    return answer;
}
solution(23);

//다른사람 1
function solution(n) {
    var answer = 0;

    //그냥 2부터해서 n 이하를 조건으로해서 올라오기 
    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}

//다른사람 2. 수열공식..
//예를들어, n이 6이면 half는 3이 되고, 3*4 = 12가 반환된다.
//n이 7이어도 3.5를 내림하면 3으로 똑같은 결과
function solution(n) {
    var half = Math.floor(n/2);
    return half*(half+1);
}
