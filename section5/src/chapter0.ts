/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    // sayHi: () => void;
    sayHi(): void; //호출 시그니처
    sayHi(a: number, b: number): void; 
}

// type Type1 = number | string |  Person;
// type Type2 = number & string;

const person: Person = {
    name: "이정환",
    sayHi: function () {
        console.log("Hi");
    },
};

// 메서드도 인터페이스에서 타입 정의가 가능하다.

person.sayHi();
person.sayHi(1, 2);