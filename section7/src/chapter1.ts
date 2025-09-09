/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

// 타입 변수를 여러 개 선언하는 것도 가능하다.


/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([1, 2, 3]); 
// 0

let str = returnFirstValue([1, "Hello", "mynameis"])
// "hello"

// 1을 추가했더니 number | string 유니온 타입이 추론이 된다 
// -> 매개변수의 type이 결국 number, string 매개변수의 배열 type으로 잡힘


/**
 * 세번째 사례
 */

interface InterfaceA {
    length: number;
}

interface InterfaceB extends InterfaceA {}

// length가 number인 프로퍼티를 갖고 있는 타입으로 정의가 된다
// interfaceB에 포함되는 객체들은 무조건 length는 number 프로퍼티를 가지고 있어야 한다. 


// T의 type을 제한하는 것. -> number type의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한.
// 그러므로 length라는 프로퍼티를 무조건 가지고 있는 타입이어야 한다.
function getLength<T extends {length: number}> (data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); //3

let var2  = getLength("12345"); //5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10); 
// 제너릭 타입으로 length가 존재하는 값을 전달하는 함수

// extends 키워드를 통해서 타입 변수의 조건을 달아서 제한할 수 있다.