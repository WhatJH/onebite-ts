/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends [number] ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string> 
// 한번은 number, 한번은 string으로 유니온 타입의 멤버 타입들이 분리가 된다.
//  이 분리된 결과들을 각각 유니온으로 다 묶어준다.

let d: StringNumberSwitch<boolean | string | number>;
// 1 단계
// StringNumberSwitch<boolean> | 
// StringNumberSwitch<number> | 
// StringNumberSwitch<string>

// 2 단계
// number 
// string
// number

// 결과
// number | string 


/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2 단계
// never |
// string |
// never

// 최종 결과
// string