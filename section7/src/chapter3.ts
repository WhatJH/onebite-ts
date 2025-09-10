/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V>{
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

// 제네릭 인터페이스를 사용할 때 반드시 타입으로 정의할 때, 타입 변수에 할당할 타입을 <>와 함께 반드시 사용해야 한다.

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1'],
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap: NumberMap = {
    key: -1231,
    key2: 123123,
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
};

let stringMap2: Map2<string> = {
    key: "hello",
}

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저/ 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
    // profile: Student | Developer;
}

function goToSchool(user: User<Student>){
    // if(user.profile.type != 'student'){
    //     console.log("잘 못 오셨습니다");
    //     return;
    // }
    // 주석친 부분들이 필요가 없어지게 됨.

    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser); 사용불가

const developerUser: User<Developer> = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};

const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "가톨릭대학교",
    },
};