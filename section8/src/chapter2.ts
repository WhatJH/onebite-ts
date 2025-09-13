/**
 * Keyof 연산자
 */

// 객체 타입에 적용하는 연산자

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof typeof person){
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 27,
};

getPropertyKey(person, "name"); // 이정환

// 객체 타입으로부터 이 person 객체 타입의 모든 프로퍼티의 키를 union 타입으로 추출한다
// 주의할점
// keyof 연산자는 무조건 타입에만 사용할 수 있는 연산자이다.

