/**
 * map 메서드
 */

import { it } from "node:test";

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U){
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it * 2); 
map(["hi", 'hello'], (it) => it.toUpperCase());

/**
 * map(["hi", 'hello'], (it) => parseInt(it));
 * 오류가 발생한다 -> parseInt는 자바스크립트의 내장함수이다. 내장함수 인수로 전달받은 값을 number type의 값으로 바꿔서 변환한 뒤 반환하는 함수이다.
 * 이런식으로 map 함수를 호출하면 callback 함수의 반환 값이 number type이 되어버리는 것이다.
 * 
 * 제네릭을 하나만 쓰면, 콜백 입력과 출력이 같은 타입이어야 해서 string -> number 같은 경우: 타입 불일치
 *  map<T, U>처럼 입력과 출력을 분리해야함.
 */




/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T> (arr: T[], callback: (item: T) => void){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed());
})

forEach(['123', '456'], (it) => {
    it;
} )