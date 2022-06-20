//string_literal.js
let str = 'Hello'; // "Hello";
str = `Hello`; // 문자열 표현

let person = {
    name: "hong",
    age: 20,
    showInfo: function () {
        // == return '이름은 ' + this.name + ', 나이는 ' + this.age;
        return `이름은 ${this. name}, 나이는 ${this.age}`; //표현식
    }
}
console.log(person.showInfo());
console.log(`내 이름은 ${person.name}`);
console.log(`${person.age >= 20 ? '성인' : '청소년'}`); // 표현식에 삼항연산자 가능
//여러 라인에 걸쳐서 선언
let strings = 'This\nis\na\ngirl.';
strings = `This
is
a
boy` // \n 생략가능
console.log(strings);

"This is an aplle".indexOf('apple'); //apple의 인덱스 값을 불러옴
"This is an apple".charAt(10);
//debugger;
let jm = '950101-1234567';

function checkGender(num) { //8번째 번호가 1,3 => 남자 2,4 여자
    let gender_num = num.replace('-','') // 숫자 추출
    jnum = num.substr(-7,1);
    console.log(gender_num);
    
    switch (gender_num.charAt(6)) {
        case '1':
        case '3':
            return '남자';
        case '2':
        case '4':
            return '여자';
    }
}
let result = checkGender(jm);
console.log(result);