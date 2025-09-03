/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    tag: "ADMIN"; // string 리터럴 타입
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER"; 
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user:User) {
    switch(user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(
                `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }
    
// switch문으로 훨씬 더 직관적으로 나타낼 수 있음 (아래 조건문은 지우면 된다.)


//     if (user.tag === "ADMIN"){
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//     }else if(user.tag === "MEMBER"){
//         console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
//     }else{
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
//         }
}

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING";
}

type FaildTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type successTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
}

type AsyncTask = LoadingTask | FaildTask | successTask;

// 위 3가지로 나누면 아래의 AsyncTask는 더 이상 선택적 프로퍼티를 만들 필요가 없음.

// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error? : {
//         message: string;
//     };
//     response?: { //선택적 프로퍼티
//         data: string;
//     };    
// };

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러 메시지 출력
// 성공 -> 성공: 데이터 출력
function processResult(task:AsyncTask) {
    switch(task.state){
        case "LOADING": {
            console.log('로딩중');
            break;
        }
        case "FAILED": {
            console.log(`에러 발생: ${task.error?.message}`);
            break;
        }
        case "SUCCESS": {
            console.log(`성공: ${task.response?.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~",
    },
};