//object.js
// 객체 == 인스턴스(클래스의 구조를 실체 하나 만든것)
const student = {
    sno: '22-0123',
    sname: '홍길동',
    mathScore: 80,
    engScore: 90,
    age: 20,
    showInfo: function(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
} // 오브젝트 생성

const student2 = {
    sno: '22-0123',
    sname: '김길동',
    mathScore: 88,
    engScore: 99,
    age: 21,
    showInfo: function(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
} 

// 클래스로 오브젝트를 만들 수 있음
class Student{
    //생성자
    constructor(sno, sname, age) { 
        this.sno = sno;
        this.sname = sname;
        this.age = age;
    }
    //메소드
    setMathScore(mathScore){
        this.mathScore = mathScore;
    }
    setEngScore(engScore){
        this.engScore = engScore;
    }
    showInfo(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

const student3 = new Student('22-0111','김자스',23);
student3.setMathScore(70);
student3.setEngScore(60);
console.log(student2.showInfo());
console.log(student3.showInfo());