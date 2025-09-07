/**
 * 인터페이스 확장
 */

type Animal = {
    name: string
    color: string;
}

// 서브 타입 
interface  Dog extends Animal{
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true
}
interface Cat extends Animal{
    inScratch: boolean;
}

interface Chicken extends Animal{
    ifFly: boolean;
}


/**
 * 상속을 받는 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있다.
 * 규칙1. 다시 정의하려고 하는 타입이 원본 타입의 서브 타입이어야만 한다.
 * 
 * 만약 animal이 타입 별칭이었다고 해도 확장할 수가 있다.
 * 
 * 인터페이스는 객체 타입이면 확장 가능하다.
 */

interface DogCat extends Dog, Cat{
    name: "",
    color: "",
    inBark: true,
    isScratch: true,
};

// 인터페이스는 여러가지 인터페이스를 또 확장하는 다중 확장이 가능하다.
