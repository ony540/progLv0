//1. 피자 7조각 나눠먹는데 필요한 피자
function solution(n) {
    var answer = Math.ceil(n / 7);
    return answer;
}

//2. 피자 6조각 나눠먹는데 n명이 모두 같은 수의 피자조각을 먹어야함
function solution(n) {
    // i는 인당 피자조각수
    let i = 1;

    while (true) {
        if ((n * i) % 6 === 0) {
            var answer = (n * i) / 6;
            return answer; //값을 찾으면 탈출
        }
        i++;
    }
}

solution(6);
solution(10);
solution(5);

// var answer = n % 6 == 0 && n / 6 ;
// 만약에 7명이면 1.떙땡 그러면 2장씩 먹어야하니까 올림한거 곱하기 n
// 만약에 10명이면 1.떙땡  그러면 2장씩 먹어야하니까 올림한거2 곱하기 n 나누기 6
//6*x피자개수 = 100*y개 (y는 1이상)
// 피자개수 = 7*y개 /6 (for문 돌려?)
// 25* 1 = 딱떨어지는 피자개수 1 (근데 6*피자개수 > 100보다 커아함)

//기존 내가 제출한것 100으로 제한하는 for문을 좋지않다!!
function solution(n) {
    // i는 인당 피자조각수
    for (let i = 1; i < 100; i++) {
        if ((n * i) % 6 === 0) {
            var answer = (n * i) / 6;
            return answer; //값을 찾으면 탈출
        }
    }
}



//3. 2~10 피자 조각 원하는 수 n명이 최소 한조각이상 먹으려면 최소 몇판

//내가 제출
function solution(slice, n) {
    let pizza = 1;

    while (true) {
        if ( n <= slice * pizza) {
            return pizza; //값을 찾으면 탈출
        }
        pizza++;
    }
}

//다른사람
//n <= slice * pizza
// pizza >= n / slice (따라서 올림..)
function solution(slice, n) {
    return Math.ceil(n / slice)
}

//4. 배열의 평균값
function solution(numbers) {
    //reduce로 합구하고 개수로 나누기
    const sum = numbers.reduce((sum,current) => sum + current)
    var answer = sum / numbers.length;
    return answer;
}