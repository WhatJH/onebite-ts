/**
 * 제네릭 클래스
 */

class List<T> {
    constructor(private list: T[]){
        // this.list = list; -> private 접근 제어자가 달려있으면 자동으로 되는거라 생략 가능.
    }

    push(data: T){
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList  = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();


const stringList = new List (["1", "2"]);
stringList.push("hello");

// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 클래스의 생성자를 호출할 때
// 이 생성자의 인수로 전달하는 값을 기준으로 타입 변수에 타입을 추론한다.
// 제네릭 인터페이스와 제네릭 타입 변수와는 다르게 반드시 타입을 명시해 주지 않아도 된다.