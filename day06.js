//1.문자열 뒤집기
function solution(my_string) {
    // return  my_string.split('').reverse().join('');
    return  [...my_string].reverse().join('');
}


//2. 직각삼각형 출력하기
//기본설정
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(Number(input[0]));
});
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    for(let i=1;i<= num; i++){
        console.log( '*'.repeat(i))
    }
});

//3. 짝수 홀수 개수
function solution(num_list) {
    let even=0,odd=0;
    for(el of num_list){
        if(el % 2 === 0){
            even++;
        } else{
            odd++;
        }
    }
    var answer = [even,odd];
    return answer;
}

//다른 사람 풀이 
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        //2의 나머지가 0 - 짝수 / 나머지가 1 - 홀수
        answer[a%2] += 1
    }

    return answer;
}

//4. 문자 반복 출력하기
function solution(my_string, n) {
    let answer=''
    for(let i =0; i < my_string.length; i++){
        answer = answer + [...my_string][i].repeat(n);
    }
    return answer;
}

//다른사람 풀이 map 메서드!! 연산해서 값 배열원소개수만큼 (각값을 배열로) 반환 그것들을 조인!

function solution(my_string, n) {

    let r = [...my_string].map(v => v.repeat(n))
    console.log(r) //['hhh', 'eee', 'lll', 'lll', 'ooo']
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
solution('hello',3)