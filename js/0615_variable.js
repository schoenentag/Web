// variable.js

console.log('Hello,world');
// consol : 자바의 인스턴스같은 개념 .메소드명(); "",'' :문자입력할때 둘중아무거나 사용가능
document.write('<h3>Hello,world!!</h3>');
// write:태그도 같이 화면에 출력가능

let num = 0; //number type //let 변수선언
num = 'Hello'; // string type
num = true; //bollean type
num = null; // object type => instance of class
let num1; // undefined type // 변수가 선언은 되어있지만 값이 할당되어 있지 않을 때
console.log(typeof num); // 숫자가 들어가면 타입이 number, 문자가 들어가면 String 타입이 됨
// 자바의 int num=0; 처럼 변수를 선언할때 데이터타입x, let을 입력하면 됨
// 어떤 값이 할당되느냐에 따라 데이터 타입이 달라짐(스크립트타입이라 유연함)

num1 = 100;
num2 = 200; // 변수의 선언이 없이 사용 : 전역(window) 객체의 선언
console.log(num1 + num2); //300이 출력
console.log(window);

//====================== 자바의 경우
// class student {
//     int sno; //field
//     String snaum; //field
//     void showInfo(){
//         return this.son + this.CSSNamespaceRule;
//     } //method
// }
// Student student = new Student(); // instance 호출
// student.sno;
// student.showInf();

//====================== js의 경우 : window 오브젝트에도 method가 있다.
//window.alert('Hello,world'); // 팝업창 생성
// 이처럼 num2 선언하지 않고 쓰면 window 오브젝트에 num2 method가 생성된다.

// 변수 : 학생이름, 학생번호, 영어, 수학
let student = new Object(); // object 선언
student.sno = '22-0123'; //field add , js는 속성이라고 표현
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 80;
console.log(student); //console에 출력

// 이런식으로 사용가능
let person = {
    fname: '김민수', //(js) property == (java,html) attribute == 속성
    age: 20,
    height: 175.5,
    showInfo: function () {
        return this.fname + ', ' + this.age + ', ' + this.height; //this==person
    } //기능(method)을 담을 수 있다
};
person.weight = '68.5'; // property add(object 밖에서도 가능)
console.log('weight 타입 : ', typeof person.weight);
console.log(person);
console.log(person.fname); // 이름만 출력
console.log(person.showInfo()); // person 오브젝트의 메소드 출력
console.log(person['age']); //동적인 표현이 가능해서 유용...
let field = 'height';
console.log(person[field]);

// 전체 속성 loop ... in
//debugger; // 디버깅모드
for (let field in person) { //field for문의 지역변수
    console.log(field, ' => ', person[field]);
}
console.log(field);
let x = 10;
let y = 10;

// 변수: me => 이름, 취미, 연락처, 주소, 소개:이름, 취미, 연락처 반환
let me = {
    myname: 'khe',
    hobby: '독서',
    hp: '010-1234-5678',
    addres: '대구광역시 어딘가',
    info: function(){
        return this.myname + ', ' + this.hobby + ', ' + this.hp;
    }
}
console.log(me.info());
