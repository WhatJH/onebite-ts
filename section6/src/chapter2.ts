/**
 * 접근 제어자
 * access modifier
 * => public privatte protected
 */

class Employee  {
    // 필드 -> 생략해도 오류 발생하지 않음, 자동으로 값들이 할당 됨.


    // 생성자 -> 접근 제어자 달기 가능, 중복 선언 불가
    constructor(private name: string, protected age: number, public position: string)  {
           
    }

    // 메서드
    work()  {
        console.log(`${this.name}일함`);
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
    // 메서드
    func(){
        this.age;
        // this.name; -> 파생클래스에서도 접근 불가 (private)
    }
}



const employee = new Employee("이정환", 27, "developer");
// employee.name =  "홍길동"
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);

// public(기본 값): 공공의, 오픈되어 있다.
// private: 클레스 내부에서만 접근 가능. 메서드에서만 이 값을 쓸 때 사용. 파생클래스에서도 접근 불가.
// protected: 외부에서는 접근 불가, 파생클래스 메서드 안에서는 접근 허용