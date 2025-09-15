/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age" ]?: User[key];
};
// 맵드 타입이 정의하는 모든 프로퍼티가 선택적 프로퍼티가 되는 것.

type BooleanUser= {
    [key in keyof User]: boolean;
}

// 모든 유저에게 읽기 속성이 부여가 됨.
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    // ... 기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}


// const user = fetchUser();
// user.id = 1;
// 수정할 수 없게됨


// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ... 수정하는 기능
}

updateUser({
    // id: 1,
    // name: "이정환",
    age: 25,
});


/**
 * 주의점
 *  맵드 타입은 인터페이스에서 사용할 수 없다.
 *  무조건 타입 별칭으로만 사용해야 한다.
 */