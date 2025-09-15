/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}; 

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;
// 조건부 타입을 사용하면 type을 가변적으로 쓰면서도 논리의 흐름에 따라서 타입을 바꿔줄 수 있다.

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any){
    if (typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

// replaceAll 매서드는 첫번째 인수에 해당하는 모든 문자들을 찾아서 두번째 인수로 바꿔주는 것이다.
 
let result = removeSpaces("hi im winterlood");
result.toLocaleLowerCase();

let result2 = removeSpaces(undefined);

// 조건에 따라 타입이 잘 바뀐다.