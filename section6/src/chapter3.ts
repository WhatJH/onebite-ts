/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Chacracter implements CharacterInterface {
    constructor(
        public name: string, 
        public moveSpeed: number,
        private extra: string
    ) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}

// implements: 구현하다

/**
 * 주의점!
 * 인터페이스로 정의하는 필드들은 무조건 public
 * 인터페이스는 무조건 public 필드만 정의할 수 있기 때문이다.
 * 
 * private가 필요한 경우 interface에 정의하지 말고 따로 정의를 해줘야한다.
 */