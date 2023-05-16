//2. 배열 중 중앙값 찾기
function solution(array) {
    array.sort((a, b) => a - b); //오름차순 정렬

    var answer = array[Math.floor(array.length / 2)]; //중앙에서 내림 (index는 0부터 시작하니까! - 따지고보면 올림한것)
    return answer;
}

solution([6, 3, 2, 5]); //5 출력됨
solution([3, 2, 5]); //3 출력됨

//2. 최빈값 출력
function solution(array) {
    let ex = {};
    for (item of array) {
        if (!ex[item]) {
            ex[item] = 1;
        } else {
            ex[item] += 1;
        }
    }

    // 값과 그 값의 갯수를 정의해 둔 obj를 array에 넣어준다.
    // ex) [[1, 1], [2, 1], [3, 3], [4, 1]]
    for (let key in obj) {
        answer.push([key, obj[key]]);
    }

    // 여기서 위에 처럼 처리하면 좋았을듯!
    for (key in ex) {
    }

    Object.keys(ex).find((key) => {
        Math.max(ex[key]);
    });

    var answer = Object.keys(ex).find((key) => Math.max(ex[key]));
    console.log(answer);
    return answer;
}

solution([1, 3, 3, 4, 5, 3, 3]);

//어떤사람1
function solution(array) {
    // array의 최댓값만큼의 길이를 가진 새로운 배열 생성
    let newArray = new Array(Math.max(...array) + 1).fill(0);
    // array 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] += 1;
    }
    // newArray의 최댓값에 해당 하는 index 출력
    // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
    if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
        return -1;
    } else {
        return newArray.indexOf(Math.max(...newArray));
    }
}

//어떤사람2 - Map 객체 사용
function solution(array) {
    let m = new Map();
    array.forEach((e) => m.set(e, m.get(e) + 1 || 1));
    console.log(m);
    
    //값을 기준으로 내림차순 정렬
    m = [...m].sort((a, b) => b[1] - a[1]);
    //최빈값의 value
    let max = m[0][1];
    //value가 맥스 인것들의 key값 반환
    m = m.filter((e) => e[1] === max).map((e) => e[0]);
    console.log(m); //e[0]의 값이 [3] 배열의 첫번째 아이템 형태로 들어가있음 - 그 수만 빼주려면 m[0]으로 출력

    //최빈값이 2개면 -1반환 아니면 그거의 key반환
    return m.length > 1 ? -1 : m[0];
}
solution([1, 3, 3, 4, 5, 3, 3]);


//4. n 이하의 홀수가 오름차순으로 담긴 배열 i+= 2 가 더하는거,, 바부
function solution(n) {
    let answer =[]
    for(let i = 1; i <= n; i += 2){
        answer.push(i);
    }
    return answer;
}

solution(19);