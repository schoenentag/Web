//object_constructor.js // constructor  : 생성자 

//객체생성
// function Student(sno, sname, age){
//     this.sno = sno; 
//     this.sname = sname;
//     this.age = age;
//     this.showInfo = function(){
//         return '이름은 ' + this.sname + ', 나이는 ' + this.age + '살 입니다.';
//     }
// }

// let s1 = new Student('22-1111', '홍길동', 19); // new 생성자를 만들지 않으면 윈도우에 값이 올라감
// let s2 = s1; // s1의 주소값을 s2가 가짐
// s2.sno = '22-2222';
// console.log(s1); // 같은 주소값인 s2를 수정했다면 s1도 수정된다.
// console.log(s1.showInfo());
// debugger;

//function() {this => window} / new 함수 => this : 객체(object),
// 이벤트 => this: 이벤트 대상

function Table(param) {

    this.data = param; // this => let data
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () {
        this.tag = '<table border=1>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function () {
        this.tag += '<thead><tr>';
        // let str = this.tag;
        this.fields.forEach((elem) => {
            this.tag += '<th>' + elem + '</th>';
            console.log(window);
        });
        this.tag += '</tr></thead>';
    }

    this.createBody = function () {
        this.tag += '<tbody>';
        this.data.forEach(val => {
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>'
            }
            this.tag += '</tr> ';
        });
        this.tag += '</tbody>';
        console.log(this.tag);
    }
}

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.8,
        weight: 64.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.3,
        weight: 72.3
    },
    {
        sname: '김민수',
        age: 24,
        height: 182.3,
        weight: 79.3
    }
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);