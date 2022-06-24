//function2.js

// 함수정의문
function sumAry(ary){ // 매개변수(parameter)
    let result = 0;
    for(let i=0; i<ary.length; i++){
        result += ary[i];
    }
    return result;
} //const sumAry = function(){...} 함수 표현식처럼 처리함

let args =[1,2,3,4,5]; // 매개값(argument)
console.log(sumAry(args)); // 실행문 호출
// sumAry([1,2,3,4,5]); // 이런 방식으로 한 줄로도 가능

let arrNum = [1,2,3];
console.log(sumAry(arrNum));

// 함수 표현식
const sum = function(num1, num2){
    if(!num1){ // undefined -> false(null, 0, '')
        num1 = 0
    } // num1값이 없으면 0값을 대입
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자
    return num1 +num2;
}
console.log(sum(10)); //함수정의문() // NaN : Not a Number

const sum2 = sum; //함수정의문 (sum2에 sum의 함수를 대입)
console.log(sum(10,20));

console.log(sumAry); // sumAry변수를 정의하지 않았음에도 콘솔창에 정의문이 표현된다.
                     //(sumAry는 함수로 만들었음)

// 함수 표현식
const sayHello = function(name){
    return 'Hello, ' + name;
}
console.log(sayHello('홍길동'));

const sayHello2 = name2 => 'Hello, ' + name2; // 화살표 함수 
// 메소드의 매개값(콜백함수)인경우 화살표 함수 사용가능
console.log(sayHello2('심청'));


let arr = ['김자바', '김영희', '김철수'];
arr.forEach(function(val/*, inx, ary*/){ // 값, 인덱스, 배열 순서
    sayHello(val);
});

let arr2 = ['김자바', '김영희', '김철수'];
arr2.forEach((val) => console.log(sayHello(val))); // 화살표 함수


arrNum = [ 29, 34, 12, 55, 29, 42 ];
// 1. 배열의 각 요소중에 짝수의 값만 더하도록 sumEven(args);
// 2. 배열의 홀수번째 요소의 합 sumOdd(args);

function sumEven(ary){
    let sum = 0;
    ary.forEach(function(val){
        if(val% 2 == 0){
            sum += val;
        }
    });
    return sum;
}

function sumOdd(ary){
    let sum = 0;
    ary.forEach(function(val, inx){
        if(inx% 2 == 0 ){
            sum += val;
        }
    });
    return sum
}

console.log('짝수의 값의 합 : ', sumEven(arrNum))
console.log('홀수번째 요소의 합 : ', sumOdd(arrNum))
