//function_table.js
//debugger;

//테이블 생성함수
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHead(fields); //<thead><tr><th>...</th></tr></thead>
    tag += head;

    let body = createBody(aryData); //<tbody><tr><td>값</td>...</tr></tbody>
    tag += body;

    tag += '</table>';
    //<table> ....</table>
    return tag;
}

//헤더부분 함수
function createHead(ary) {
    let tag = '<thead><tr>';
    for (let field in ary) { //sname과 age를 가져옴(필드명)
        tag += '<th>' + ary[field] + '</th>' 
        console.log('ary[field]= >', ary[field]);
        console.log('field=>',field);
    }
    tag += '</tr> </thead>';
    return tag;
}
//바디부분 함수
function createBody(bodyData) { //[{sname:?},{age:?},{height:?}]
    let str = '<tbody>'; 
    
    bodyData.forEach((elem)=>{ //for(let elem of bodyData){} 형식으로도 사용가능
        str +='<tr>';
        for(let field in elem){ // for in 오브젝트의 속성(sname)만큼 읽음
            
            str +='<td>' + elem[field] + '</td>' // elem.name, elem.age ...
        }
        str +='</tr>'
    });
    str +='</tbody>'
    return str;
}

    
let data = [{
        sname: '홍길동', age: 15, height: 167.8, weight: 64.5
    },
    {
        sname: ' 이찬희', age: 20, height: 175.3, weight: 72.3
    },
    {
        sname: '김민수', age: 24, height: 182.3, weight: 79.3
    }
]

let str = createTable(data);
document.write(str);