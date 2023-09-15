//1. 주사위의 개수
/**
 * 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(box, n) {
    var answer = 1;
    for (length of box) {
        answer *= Math.floor(length / n);
    }
    return answer;
}
solution([10, 8, 6.333], 3);

//다른 사람 풀이
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

//2. 합성수 찾기
/**
 * 약수의 개수가 세 개 이상인 수를 합성수라고 합니다.
 *  자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
    let compositeCount = 0;
    for (i = n; i > 3; i--) {
        let divisorCount = 0;
        for (j = i; j > 0; j--) {
            if (i % j == 0) {
                divisorCount++;
            }
        }
        if (divisorCount > 2) {
            compositeCount++;
        }
    }
    return compositeCount;
}
solution(10);

//다른사람풀이
function solution(n) {
    let base = Array.from(Array(n), (v, i) => i + 1);
    console.log(Array(n));
    console.log(base);
    console.log(parseInt(Math.sqrt(n)));
    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        //나머지가 0이 아니거나 i보다 작은거만 남기기 (이게 합성수가 아닌 것임)
        base = base.filter((el) => el % i != 0 || el <= i);
        console.log(base);
    }
    return n - base.length;
}
solution(10);

//제곱 ** 나머지 %  루트값 Math.sqrt(n)
/**
 * 
 *Math.sqrt(4);		// 2
Math.sqrt(16);		// 4
Math.sqrt(100);		// 10
 */

//3. 최댓값 만들기 (1)
/*
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
*/
function solution(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}
solution([0, 31, 24, 10, 1, 9]);

//4.팩토리얼
/*
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 
예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
*/
const facto = (n) => (n === 0 ? 1 : n * facto(n - 1));
// i! ≤ n
function solution(n) {
    for (i = 1; i <= 100; i++) {
        const facto = (num) => (num === 0 ? 1 : num * facto(num - 1));
        if (facto(i) <= n) {
            answer = i;
        } else {
            return answer;
        }
    }
}
solution(3628800);
