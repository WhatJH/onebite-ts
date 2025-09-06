/**
 * 함수 오버로팅
 * 하나의 함수를 매개변수의 개수나 타입에 따라 
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 * 
 */ 

// 버전들  -> 오버로드 시그니처(선언식만 써놓은 것)
function func(a: number): void; 
function func(a: number, b: number, c: number): void;

// 이 오버로드 시그니처는 함수를 오버로딩 하기 위해서 각각 매개변수 별로 다른 버전을 명시해주기 위해 사용한다.

// 실제 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number){
    if(typeof b === 'number' && typeof c === 'number'){
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}


func(1);
func(1, 2, 3);

//  선택적 프로퍼티로 매개변수들을 정의 해서 모든 오버로드 시그니처들이 의미가 있도록 만들어줘야 한다.