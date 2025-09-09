/**
 * 제네릭
 * 
 * 뜻: 일반적인, 포괄적인
 * 
 * 제너럴 -> 종합병원
 * 제네릭 함수라고 하면 모든 타입의 두루두루 쓸 수 있는 범용적인 함수다.
 */

// 제네릭 함수
function func<T>(value: T): T{
    return value;
}
// T는 타입 변수
// 함수를 호출할 때 인수의 타입이 어떤 타입이 있느냐에 따라서 타입 변수에 저장되는 타입이 달라짐.

let num = func(10);
// num.toUppercase();

// 숫자처럼 사용하려면 조건문으로 타입을 좁혀서 사용해야함.
if (typeof num === "number") {
    num.toFixed();
}

let bool = func(true);

let str = func("string");

// 튜플 타입으로 취급하고 싶다면 뒤에 덧붙이기.(타입 단언/제네렉 방식)
let arr = func<[number, number, number]>([1, 2, 3]);

