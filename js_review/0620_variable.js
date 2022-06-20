//오브젝트 만들기
let chr = {
    fname: '라이언',
    age: 5,
    height: 100,
    showInfo: function(){
        return this.fname + ', ' + this.age+'살';
    }
}
console.log(chr);
console.log(chr['fname']);

// 배열(li 형태 출력)
let ary = ['사과', '바나나', '고구마', '수박'];
document.write('<ul>');
for(let val of ary){
    
    document.write('<li>' + val +'</li>');
}
document.write('</ul>');

// 테이블 만들기 
ary = [
    {name:'홍길동', age:20, phone:'010-1111-2222'},
    {name:'김민수', age:25, phone:'010-1111-2345'}, 
    {name:'심청', age:22, phone:'010-4324-2121'}, 
    {name:'갑님', age:12, phone:'010-7777-2224'}, 
];

let str ='<table border =1>';
for (let person of ary){
    str+='<tr>';
    for(let field in person){
        str += '<td>'+person[field]+'</td>';
    }
    str+='</tr>';
}
str += '</table>';
document.write(str);

