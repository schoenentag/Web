//table.js
let data = [
    {sname:'Hong', age: 15},
    {sname:'Hwang', age: 20}
]

class Table{
    //생성자
    constructor(ary){
        this.aryData = ary; // aryData : ary의 속성
    }
    //메소드
    createTable(){
        this.tag = '';
        //헤더정보 <thead> ... </thead>
        //바디정보 <tbody>...</tbody>

        return this.tag;
    }

}

let table = new Table(data);
table.createTable(); // => 표형식으로 화면 출력
document.write(str);