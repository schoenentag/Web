// table.js,

//테이블 만들기
let data = [
    {sname: 'Hong', age: 15, height: 167.3, weight: 64.5},
    {sname : 'Hwang', age: 20, height: 175.7, weight: 72.3}
];

class Table{
    //생성자
    constructor(ary){
        this.aryData = ary;
    }
    //메소드
    createTable(){
        //this.tag에 계속 데이터를 담아줌..
        this.tag = '<table border = 1><tr>';
        
        //헤더정보 ㅣ <thead>...</thead>
        for(let field in this.aryData[0]){ //sname과 age를 가져옴(필드명)
            this.tag += '<th>' + field +'</th>'
        }
        //this.tag += '<th>이름</th><th>나이</th>';
        this.tag+='</tr>';

        //바디정보 <tbody>...</tbody>
        this.aryData.forEach((val, idx) =>{
            this.tag += '<tr>';
            for(let field in val){
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });

        return this.tag;
    }
}

let table = new Table(data); //생성자의 ary = data
let str = table.createTable();
document.write(str);


//----------------

console.log('Hongkildong'.length); //11(문자열의 길이를 반환)

let names = ['Hong', 'Hwang', 'Kim', 'Park'];

//find 메소드 : 매개값을 함수로 받음
let searchName = names.find(function(val){
    //return val == 'Hwang'; //val = '값' 이 true : 값을 searchName에 담아서 반환 | 없으면(false) undefined 반환
    return val.length == 4; //val 길이가 4인 값을 반환(조건에 만족하는 즉시 반환이라 뒤에 있는 park는 반환하지 않는다)
}); 

console.log(searchName);

