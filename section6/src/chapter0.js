/**
 * 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study(){
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};
 
class Student {
    // 필드: 클래스가 만들어낼 객체 프로퍼티 의미.
    name;
    grade;
    age;

    // 생성자: 실제로  객체를 생성하는 역할을 하는 함수(메서드).
    constructor(name, grade, age){
        this.name  = name;
        this.grade  = grade;
        this.age = age;
    }

    // 메서드
    study(){
        console.log("열심히 공부 함");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }
} 
/**
 * 이때, this는 이 클래스가 지금 만들고 있는 객체이다.
 * 클래스 안에서 메서드를 정의할 때는 클래스 안에서는 쉼포를  찍지 않는다.
 */


class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;

    // 생성자
    constructor(name, grade, age, favoriteSkill){
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }  

    // 메서드 
    programming(){
        console.log(`${this.favoriteSkill}로 프로그래밍을 함.`);
    }
}

const studentDeveloper = new  StudentDeveloper("이정환", "B+", 27, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
// 클래스 이름과 변수 이름이 겹치면 안된다. (유의)
// 상속을 받아도 매개변수는  지우면 안된다.
// 생성자에서 슈퍼라는 함술을 호출해주고 인수 전달 해줘야 한다.




// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// 클래스를 호출해서 객체를 생성할 때에는 new라는 키워드를 사용. /생성자가 호출된다.
// let studentB = new Student("이정환", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
