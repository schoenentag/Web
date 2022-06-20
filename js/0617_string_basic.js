//string_basic.js

let str = 'Hello'; //문자열
let str1 = new String('Hello'); //문자열 객체(object)

console.log(str == str1); // true 값
console.log(str === str1); // false 타입 &값
console.log(str === str1.valueOf()); 

let num = new Number(123); // number => object
let num1 = 123; //number
console.log(num.valueOf() ===num1); // 객체 => 기본데이터타입 변환

// 원시타입 : string, number, boolean,
// 객체타입 : 함수, Object({name:?, age:?}), 배열, null

"Hello ".substring(0,3);
console.log("  Hello  ");
console.log("  Hello   ".trim());
console.log("  Hello   ".trimStart());
console.log("  Hello   ".replace(/\s/g,''));// '문자열에 있는 모든 공백제거
console.log('This is the only story'.replace('the','THE')); // the를 THE로 변경
console.log('bad MORNING, GOOD AFTERNOON, goodevening and good night'.replace(/good\s/,'bad ')); //정규표현식객체 
let reg = /good/; //new RegExp() //정규 표현식 g : 글로벌 // i 대소문자 구분x \s :공백 
//문자열 자르기
console.log("This is the only one story".slice(10,15)); //10~14인덱스 위치의 문자열 반환
const str2 = 'This is the only one story.';
console.log(str2.slice(8,11)); // the 반환
console.log(str2.slice(-8,11)); 
console.log(str2.slice(10,4)); 
console.log(str2.slice(30));// 파라메터가 1개만 있을 경우에는 시작 인덱스 값이 됨
console.log(str2.slice(0,-10));//26-10 => 16개값 반환
console.log(str2.slice(8,100)); 


