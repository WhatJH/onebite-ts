/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAniaml = `${Color}-${Animal}`;

// 문자열로 여러가지의 상황들을 표현해야 되는 경우에 사용된다.