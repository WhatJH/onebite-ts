/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "이정환",
    age:  27,
    position: "developer",
    work()  {
        console.log("일함");
    },
}

// 오류 발생 이유: 추론할 수 있는 정보가 없을 때. -> 암시적으로 any type 할당됨. 
// any type: 치트키 타입, 안전하지 않음 -> 오류 발생
class Employee  {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string)  {
            this.name = name;
            this.age = age;
            this.position = position;
    }

    // 메서드
    work()  {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee{
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number)  {
        super(name, age, position); // 생략시 오류 발생.
        this.officeNumber = officeNumber;
    }    
}

const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},

}

// TypeScript의 클래스는 타입으로도 활용할 수 있다. 
// TypeScript는 구조적으로 타입을 결정하는 구조적 타입 시스템을 따름