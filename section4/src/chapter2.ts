/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a:A = ()=>10; // number 타입 반환
let b:B = ()=>10; // number 리터럴 타입 반환

a = b;
// b = a;  하용이 안 된다. -> type A를 type B로 취급하겠다라는 말
// 반환 값끼리 다운 캐스팅 (number 타입이 더 크기 때문에 안되는 것.)

// 기준2.매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C =(value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

// 매개변수의 타입을 기준으로 함수 타입의 호환성을 판단할 때
// 1. 업캐스팅일 땐 안 된다.
// 2. 다운 캐스팅일 때는 된다

type Animal = {
    name: string; 
}

type Dog= {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; -> 호환이 안 된다. animalFunc의 매개변수의 타입이 더 큰 타입이다.
dogFunc = animalFunc; 

let testFunc = (animal: Animal)  => {
    console.log(animal.name);
    // console.log(animal.color); // 여기서 오류발생 -> animal 타입에는 color라는 프로퍼티가 없기 때문.
}

let testFunc2 = (dog: Dog)  => {
    console.log(dog.name);
}
// dog 타입은 animal 타입의 서브 타입이기 때문에 기본적으로 애니멀 타입의 객체들이 갖고 있는 모든 프로퍼티를 dog 타입은 이미 다 갖고 있음.


// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; 
/* 
* func2 = func1; -> type으로 보면 func2 타입을 func1 타입으로 취급하겠다는 것과 같음.
* func2의 매개변수 개수는 1개, func1의 매개변수는 개수는 2개
* func1의 매개변수의 개수가 더 많다. -> OK 
* 매개변수의 갯수가 다를 때에는 할당하려고 하는 쪽의 함수의 타입에 
* 매개변수의 갯수가 더 적을 때에만 호환이 된다!
**/ 