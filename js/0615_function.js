//function.js

//java의 경우
// public int sum(int a, int b){}

function sum(number1, number2){
    let result = number1 + number2;
    console.log(result); // undefined;
    return result;
}
sum(10,20);

function makeTd(val){
    return '<td>' + val + '</td>';
}
function makeTr(val){
    return '<tr>' + val + '</tr>';
}

let values = ['Hong', 'Hwang', 'Choi']; //배열 생성

let str ='<table border=1>';
for(let val of values){
    let td = makeTd(val); // <td> + Hong+ </td>
    str += makeTr(td); // <tr><td> + Hong+ </td></tr>
}
str += '</table>';
document.write(str);
