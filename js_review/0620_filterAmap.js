// filter : 함수의 반환값을 true로 만드는 단 하나의 요소를 찾는 것
// filter는 조건에 맞는 요소 전체를 담은 배열을 반환

// let result= arr.filter(function(item, index, array){
//   // 조건을 충족하는 요소는 results에 순차적으로 더해짐  
// });

let users = [
    {id : 1, name :'John'},
    {id : 2, name :'peter'},
    {id : 3, name :'Mary'}
];

let someUsers = users.filter(item => item.id <3);
console.log(someUsers);

// map : 배열 요소 전체를 대상으로 함수를 호출, 결과는 배열로...
// let result = arr.map(function(item, index, array){
//     //요소를 대신 새로운 값을 반환
// });

// sort(fn) : 배열의 요소를 정렬, 배열 자체가 변경

let arr = [1,2,15];
arr.sort();
console.log('재정렬 된 arr => ', arr); //[1, 15, 2]

function compare(a,b){
    if (a > b) return 1; // 첫번째값이 두번째 값보다 큰 경우
    if (a == b) return 0; // 두 값이 같은 경우
    if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

console.log(arr.sort(compare)); //오름차순 [1, 2, 15]

//reverse : 역순으로 정렬(내림차순)
console.log(arr.reverse()); // 내림차순 [15, 2, 1]

//reduce : forEach, for, for...of => 새로운 배열 형태 map과 유사한 방식
//let value = arr.reduce(function(accumulator, item, index, array){
//},[initial]);
//accumulator(누적) - 이전 함수 호출의 결과, 최초 호출시 inital 값 나타냄
//item - 현재 배열 요소
//index - 요소의 위치
//array - 배열
// arr = [1,2,3,4,5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);


let data = `
[{"id":1,"first_name":"Tiffany","last_name":"Sauvain","email":"tsauvain0@free.fr","gender":"Female","salary":2150},
{"id":2,"first_name":"Victoir","last_name":"Vennart","email":"vvennart1@ibm.com","gender":"Male","salary":1587},
{"id":3,"first_name":"Mateo","last_name":"McGriele","email":"mmcgriele2@opera.com","gender":"Male","salary":2581},
{"id":4,"first_name":"Anson","last_name":"Manterfield","email":"amanterfield3@shinystat.com","gender":"Male","salary":4066},
{"id":5,"first_name":"Dita","last_name":"Standon","email":"dstandon4@virginia.edu","gender":"Female","salary":4808},
{"id":6,"first_name":"Iorgos","last_name":"Hollingsbee","email":"ihollingsbee5@huffingtonpost.com","gender":"Male","salary":3557},
{"id":7,"first_name":"Sonnnie","last_name":"MacCostigan","email":"smaccostigan6@diigo.com","gender":"Female","salary":3553},
{"id":8,"first_name":"Stacy","last_name":"Esterbrook","email":"sesterbrook7@google.ru","gender":"Female","salary":2809},
{"id":9,"first_name":"Travus","last_name":"Stebbin","email":"tstebbin8@tiny.cc","gender":"Male","salary":4080},
{"id":10,"first_name":"Marie-jeanne","last_name":"Cantu","email":"mcantu9@sciencedaily.com","gender":"Female","salary":4517},
{"id":11,"first_name":"Lemmie","last_name":"Gergher","email":"lgerghera@mtv.com","gender":"Male","salary":2210},
{"id":12,"first_name":"Dylan","last_name":"Moxham","email":"dmoxhamb@parallels.com","gender":"Male","salary":3109},
{"id":13,"first_name":"Lorry","last_name":"Deeves","email":"ldeevesc@opera.com","gender":"Male","salary":3657},
{"id":14,"first_name":"Chickie","last_name":"Hazelgreave","email":"chazelgreaved@answers.com","gender":"Male","salary":4348},
{"id":15,"first_name":"Kalil","last_name":"Kordt","email":"kkordte@harvard.edu","gender":"Male","salary":4516}]`;
let user_gender = prompt('Male of Female을 입력');
console.log(user_gender);

let objAry = JSON.parse(data);

let result = objAry.reduce((accum, curr, currIdx)=>{
    if(currIdx == 0){ // 시작 할 때 테이블 생성
        accum+= '<table border = 1>';
    }
    if (curr.gender == user_gender){ //만약 curr.gender(data의 gender값이 user_gender값과 동일하면)
        accum += '<tr>';
        for(let field in curr){
            accum += `<td>${curr[field]}</td>`
        }
        accum += '</tr>';
    }
    if(currIdx == objAry.length -1){
        accum += '</table>';
    }
    return accum; 
}, '');
document.write(result);

