//분수의 덧셈

function solution(num1, denum1, num2, denum2) {
    // 분자
    let topNum = num1*denum2 + num2*denum1
    // 분모
    let botNum = denum1*denum2
    // 최대 공약수
    let maximum = 1

    // 약분 (분자보다 작은 수로 계속 나눠서 떨어지고, 분모랑도 나눠떨어지면 그게 최대공약수)
    for(let i = 1 ; i <= topNum ; i ++) {
        if(topNum%i === 0 && botNum%i === 0) {
            maximum = i
        }
    }
    //최대공약수로 나눈 값이 기약분수
    return [topNum/maximum, botNum/maximum]
}

//배열 두배 만들기
function solution(numbers) {
    var answer = numbers.map((num) => num*2);
    return answer;
}