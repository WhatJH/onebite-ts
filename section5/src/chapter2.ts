/**
 * 선언 합침
 */

interface Person {
    name: string;
};

interface Person {
    name: string;
    age: number
}
// 인터페이스는 별칭과 달리 동일한 이름으로 두 개의 인터페이스를 선언해도 문제가 되지 않는다.
// -> 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐지기 때문이다.

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 27,
};

// 충돌: 동일한 프로퍼티를 중복 정의하는데 타입을 다르게 정의하는 경우
// 인터페이스의 선언 합침에서는 충돌은 허용되지 않는다.


/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib { 
    c: string;
}
// c를 추가하기 위해 모듈의 타입을 보강 해줌.

const lib = {
    a: 1,
    b: 2,
    c: "hello",
}
