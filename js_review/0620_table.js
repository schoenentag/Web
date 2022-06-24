//테이블 만들기 함수
debugger;
let data = [
{ sname: '홍길동', age: 15, height: 167.8, weight: 64.5},
{ sname: ' 이찬희', age: 20, height: 175.3, weight: 72.3 },
{sname: '김민수', age: 24, height: 182.3, weight: 79.3}]

function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHead(fields);
    tag += head;

    let body = createBody(aryData);
    tag += body;

    tag += '</table>';
    return tag;
}

//헤더부분 함수
function createHead(ary){
    let tag = '<thead><tr>';
    for(let field in ary){ // field가 인덱스 같은 느낌...
        tag +='<th>' + ary[field]+'</th>' //이렇게 처리해야 sname과 age를 가져옴
    }
    tag += '</tr></thead>';
    return tag;
}

//바디부분 함수
function createBody(bodyData){
    let str ='<tbody>';
    bodyData.forEach(elem=>{
        str +='<tr>';
        for(let field in elem){
            str +='<td>'+elem[field]+'</td>'
        }
        str+='<tr>'
    });
    str+='</tbody>'
    return str;
}
let str = createTable(data);
document.write(str);

