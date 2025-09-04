/** 
 * 함수 타입 표현식 
 */

// 타입을 함수의 선억식에 직접 정의해주지 않아도 타입 정의 가능.

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b)  => a + b;
const sub: Operation = (a,b) => a - b;
const multiply: Operation = (a,b) => a * b;
const divide: Operation = (a,b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
    (a: number, b: number): number;
}

function func(a: number): void{}

const add2: Operation2 = (a, b)  => a + b;
const sub2: Operation2 = (a,b) => a - b;
const multiply2: Operation2 = (a,b) => a * b;
const divide2: Operation2 = (a,b) => a / b;


// 하이브리드 타입
// add2()
// add2.name