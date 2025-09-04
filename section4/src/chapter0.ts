/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤
function func(a: number, b: number): number{
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a:number, b: number) => a + b;


/**
 * 함수의 매개변수
 */

function introduce(name = "이정환", tall?: number) {
    console.log(`name : ${name}`);
    if(typeof tall === "number"){
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("이정환", 175);

introduce("이정환");


/**
 * 선택적 매개변수 사용시 주의점
 * 1. 선텍적 매개변수는 필수 매개변수들 앞에 오면 안 된다. 
 */

// function getSum(...rest: [number, number, number]){
// 고정하고 싶으면 튜풀 타입으로 해주면 됨.
function getSum(...rest: number[]){

    let sum = 0;
    rest.forEach((it) => (sum == it));

    return sum;
}

getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15