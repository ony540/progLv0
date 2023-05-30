//1. 점의 위치 구하기
function solution(dot) {
    var answer = 0;
    if (dot[0] > 0) {
        if (dot[1] > 0) {
            answer = 1;
        } else {
            answer = 4;
        }
    } else {
        if (dot[1] > 0) {
            answer = 2;
        } else {
            answer = 3;
        }
    }
    return answer;
}

//다른 사람 풀이
function solution(dot) {
    const [num, num2] = dot;
    //곱이 +면 1분면 3분면 / -면 2분면 4분면
    const check = num * num2 > 0;
    //x좌표가 0보다크면 1,4 0보다작으면 2,3
    return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
console.log(solution([2, 3]));

//2. 2차원으로 만들기
function solution(num_list, n) {
    var answer = [];
    for (i = 0; i < num_list.length; i += n) {
        answer.push(num_list.slice(i, i + n));
    }
    return answer;
}
console.log(solution([1, 2, 3], 2));

//다른 사람 풀이 while과 splice사용 (거기서 삭제되고 return하기!!)
function solution(num_list, n) {
    var answer = [];
    while (num_list.length) {
        answer.push(num_list.splice(0, n));
    }
    return answer;
}

//3. 공던지기
function solution(numbers, k) {
    let num = 0;
    if ((k * 2) % numbers.length == 0) {
        num = numbers.length - 2;
    } else if ((k * 2) % numbers.length == 1) {
        num = numbers.length - 1;
    } else {
        num = ((k * 2) % numbers.length) - 2;
    }

    console.log(num);
    return numbers[num];
}
//다른 사람 풀이
function solution(numbers, k) {
    //따로 2 뺄필요없이 k에 1빼기!! 바부
    return numbers[(2 * (k - 1)) % numbers.length];
}

console.log(solution([1, 2, 3, 4], 2));

//4. 배열 회전시키기
function solution(numbers, direction) {
    if (direction == "right") {
        let last = numbers.pop();
        numbers.unshift(last);
        // numbers.unshift(numbers.pop()); 이렇게 한번에 해도된다!
    } else {
        let first = numbers.shift();
        numbers.push(first);
    }
    return numbers;
}
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
