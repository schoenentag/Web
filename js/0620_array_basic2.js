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
// 파싱(Parsing) : 어떤 페이지(문서, html 등)에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출해 가공
let objAry = JSON.parse(data); //JSON.parse() 문자열 => 오브젝트타입으로 변경
console.log(data);
console.log(objAry);

let over3000 = objAry.filter((val,idx)=>{ //{id:?, fname:?, lname:?,salary:?,...}
    return val.salary >= 3000;
}).map((val,idx)=>{
    let obj = {}; // A->B Mapping
    obj.name = `${val.last_name} ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);
// debugger;
//Female 값 평균값 기능 구현
let sum = 0;
let fcount = 0;

let avg = objAry.filter((val)=>{
    if(val.gender == 'Female') {
        sum += val.salary;
        fcount++;
    }
    return sum;
})
avg = sum/fcount;

// objAry.filter(val => val.gender =='Female')
// .forEach(val => {
//     sum +=val.salary;
//     fcount++;
// });
// avg = sum /fcount;
console.log(`여자 사원의 급여 평균 : ${avg}`)
let salaries=[];
salaries = objAry.map(val => val.salary);
console.log(salaries);

function getMaxValue(ary){
    //배열 요소에서 제일 큰값을 반환하는 함수
    let max = 0;
    for(let num of ary){
        if(num >= max )
        max = num;
    }
    return max;
}
function getMinValue(ary = []){
    let min = Number.MAX_SAFE_INTEGER;
    ary.forEach(val => {
        if(min > val){
            min = val
        }
    })
    return min;
}
function sortAscend(ary = []){
    //오름차순 정렬하는 함수
    let numAry = ary;
    let newAry = [];
    ary.forEach(val => {
        let minVal = getMinValue(numAry);
        newAry.push(minVal);
        let idx = numAry.indexOf(maxVal);
        numAry.splice(idx,1,12345);
    });
    return newAry;
}

let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);
console.log(sortAscend(salaries));
// console.clear();

//reduce 메소드 : 배열의 요소들을 순회하면서 반복적인 연산을 하는 메서드
// (초기값(이후 그다음 순번의 초기값),인덱스의 값,인덱스,배열 그자체)

// result=[1,2,3,4].reduce(function(accum,curr,curIdx,ary){
//     console.log(`누적값 : ${accum}, current 값 ${curr} => 두 수의 합 ${accum+curr}`);
//     return curr+accum;
// }, 0);
// console.log(`최종결과 : ${result}`);

result = salaries.reduce(function(accum,curr,curIdx,ary){
    console.log(`누적값 : ${accum}, current 값 ${curr} => 두 수의 합 ${accum+curr}`);
    return curr+accum;
}, 0);
console.log(`최종결과 : ${result}`);

result = [1,2,3,4].reduce(function(accum, curr){
    accum.push(curr); //배열에 추가
    return accum;
},[]);
//result = [1,2,3,4].map(val => val); //reduce가 맵핑처럼 사용가능 

//result = [1,2,3,4].filter(val =>{
//     if(val%2 == 0){
//         return val;
//     }
// }) //reduce가 필터처럼 사용가능
// console.clear();
//<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
result = ['Apple', 'Banana','Cherry'].reduce((accum, curr,currIdx,ary)=>{
    if(currIdx == 0){
        accum ='<ul>';
    }
    accum +=`<li>${curr}</li>`;
    if(currIdx == ary.length-1){
        accum += '<ul>';
    }
    console.log(accum);
    return accum;
},'');
console.log(result);
document.write(result);

result = [3,2,4,1,5].reduce(function(accum,curr){
    if (accum > curr)
        return accum;
    else return curr;
},0); 
console.log('최대값 : ', result);

//문제) 합 구하기
result = [3,2,4,1,5].reduce(function(accum,curr){
    return accum + curr;
},0); 
console.log('합 : ', result);

//문제) 평균 구하기
result = [3,2,4,1,5,7].reduce(function(accum,curr,currIdx,ary){
    if(currIdx == ary.length - 1){ // 마지막 순번일 경우
        return (accum + curr)/ary.length;
    }
    return accum + curr;

},0); 

console.log('평균 : ',result);
