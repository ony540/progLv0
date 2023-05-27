//1.배열자르기
function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}

//2. 외계행성의 나이
function solution(age) {
    let alpha = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
    };

    var answer = [...age.toString()].map((num) => alpha[num]).join("");
    return answer;
}

//다른 사람풀이
function solution(age) {
    return age
        .toString()
        .split("")
        .map((v) => "abcdefghij"[v]) //문자열 자체도 인덱스가 있으니 저렇게 바로 [v] 가능
        .join("");
}

//3. 진료순서 정하기
function solution(emergency) {
    let answer = [];
    let sorted = [...emergency].sort((a, b) => b - a);

    //아쉬운점은 이중포문에 push한것 map을 사용하면 손쉽게 가능..
    for (el of emergency) {
        //기존순서
        for (sel of sorted) {
            if (el === sel) {
                answer.push(sorted.indexOf(sel) + 1); //Of 대문자..
                break;
            }
        }
    }

    return answer;
}
solution([3, 76, 24]);

//다른사람1  push 말고 map 사용하기!!
function solution(emergency) {
    let sorted = emergency.slice().sort((a, b) => b - a);
    return emergency.map((v) => sorted.indexOf(v) + 1);
}

//다른사람2 findIndex 사용!!
function solution(emergency) {
    let sort = [...emergency].sort((a, b) => b - a);
    return emergency.map((k) => {
        const queue = sort.findIndex((v) => v === k);

        return queue + 1;
    });
}

//4. 순서쌍의 개수

function solution(n) {
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if(n % i == 0){
            answer++;
        }
    }
    
    return answer;
}
