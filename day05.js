//1.옷가게 할인 받기 - 이상! 제한사항 자세히확인
function solution(price) {
    var answer = price >= 500000 ? price * 0.8 : price >= 300000 ? price * 0.9 : price >= 100000 ? price * 0.95 : price;
    return parseInt(answer);
}

//2. 아아메
function solution(money) {
    const count = Math.floor(money / 5500);
    const charge = money - 5500 * count;
    var answer = [count, charge];
    return answer;
}

//다른사람 풀이
function solution(money) {
    // ~~하면 내림이랑 같은 역할
    // Math.floor() 대신 사용될 수 있다.
    // 숫자에 ~연산을 하게되면서 소수점들은 버려지게된다. 즉, ~~를 활용하면 Math.floor() 처럼 활용할 수 있다.
    // % 하면 나머지 구할 수 있음 한번에!
    return [~~(money / 5500), money % 5500];
}

//3. 나이 출력 2022년기준
function solution(age) {
    var answer = 2023  - age;
    return answer;
}

//해당년도 기준 !
function solution(age) {
    return new Date().getFullYear() - age + 1;
}

//4. 배열 뒤집기 
function solution(num_list) {
    // var answer = num_list.toReversed();
    var answer = num_list.reverse();
    return answer;
}
