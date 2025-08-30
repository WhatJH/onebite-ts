/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string){ 
    value;
    
    
    if(typeof value === 'number'){
        console.log(value.toFixed());
    }
    else if(typeof value === "string"){
        console.log(value.toUpperCase());
    }
}