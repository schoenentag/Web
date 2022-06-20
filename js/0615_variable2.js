// variable2.js

let ary = new Array(); // 배열 생성
ary[0] = 10;

ary = [20, 30, 15, 27]; // 선언 & 초기화 
ary[ary.length] = 50; //length(4), ary[4] = 50 대입
ary[ary.length] = 60; //length(5), ary[5] = 60 대입
ary[10] = 100; // 6~9번째 : undefined

console.log(ary); // [20, 30, 15, 27, 50, 60, empty × 4, 100]

// for문을 이용하여 ary값 출력
for(let i = 0; i<ary.length; i++){
    console.log(i+'번째 : '+ary[i]);
}

console.clear(); //console창 백지화(log 지우기)

ary = ['사과', '바나나', '고구마', '수박',32]; // 다른 데이터타입도 호환가능하나 권장하지 않음

document.write('<ul>');
// for of 이용하여 ary값 출력 ★★ js에서 많이 쓰임
for(let val of ary){
    console.log(val); // 콘솔에 출력
    document.write('<li>' + val +'</li>'); // 화면에 출력
}
document.write('</ul>');

ary = [
    {name:'홍길동', age:20, phone:'010-1111-2222'},
    {name:'김민수', age:25, phone:'010-1111-2345'}, 
    {name:'심청', age:22, phone:'010-4324-2121'}, 
    {name:'갑님', age:12, phone:'010-7777-2224'}, 
];

// 방법1
// document.write('<ul>');
// for(let person of ary){
    //     document.write('<li>'+ person['name']+' , '+person['phone']+'</li>');
    // }
    // document.write('</ul>');
    
// 방법2
// let str = '';
// str +='<ul>';
// for(let person of ary){
    //     str += '<li>'+'이름 : '+ person['name']+', 연락처 : '+person['phone']+'</li>';}
// str +='</ul>';

//for ...in VS for ...of 헷갈림!!!!!!!!!!!!!!!!!!!!!!!!!! 
//for ...in : 객체의 속성을 반복하여 작업
//for ...of : 오브젝트를 반복({},{})

str='<table>';
str='<table border=1>';
for(let person of ary){
    str+='<tr>';
        for(let field in person){
            str += '<td>' + person[field] + '</td>';
    }
    str+='</tr>';
}
str+='</table>';
console.log(str);
document.write(str);

//const(상수) : ES6부터 추가된 기능 

const v1 = 'hello';
//v1='new';
//원시타입 vs 참조타입
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2); // 출력값 : 20, 10

let o1 = {name:'one'};
let o2 = o1; // 오브젝트(instance)의 주소의 값을 참조
o2.name = 'two';
console.log(o1,o2); // 출력값 : {name: 'two'} {name: 'two'}

const obj = {
    sno:'22-12345',
    sname:'Hong'
}
// obj = ''; //새로운 값을 할당 => 오류 (obj가 상수값이므로 안 됨)
obj.sno = '22-22222'; // obj 상수 변수에 값을 새롭게 선언x, obj 참조하는 속성의 값을 변경o 

// var vs let : 변수 선언 ★★
// var 변수 선언 : 변수의 scope => 전역변수 / 지역변수 구분
var var1 = 'hello';

function localFnc(){
    var var2 = 'nice'; // 지역변수(local varialbe)
    console.log(var2);
    console.log(var1);
}
localFnc(); // method 호출
// console.log(var2); // Error! var2는 지역변수이므로 찾을 수 없음
console.log(var1);

//let
let let1 = 'hello';
{
    let let1 =' new hello';
    console.log(let1);
} // let은 블록 개념이 있으므로 사용가능함

function localFnc2(){
    let let2 = 'nice'; // 지역변수(local varialbe)
    console.log(let2);
    console.log(let1);
}
localFnc2(); // method 호출
//console.log(let2); // Error! var2는 지역변수이므로 찾을 수 없음
console.log(let1);

var l1; // hoisting 호이스팅

console.log(l1);
//js는 되도록 Error 없이 실행되도록 되어있음. 다만 함수가 초기화되어있지 않으므로 값 출력을 못함(undefined)

var l1 = 'hello l1';
var l1 = 'hello l1';

// var와 let의 차이
// for(var num of ary){
//     console.log(num);
// }
// console.log(num) // 지역변수로 선언한 num이 블록({})밖에서도 실행된다, 블록 개념이 없기때문에...
// for(let num of ary){
//     console.log(num);
// }
// console.log(num) //Error! num은 지역변수이므로 for문 밖에서 출력할 수 없다.
