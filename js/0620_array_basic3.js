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
//prompt 사용자가 입력한값 저장
// debugger;
let gender = prompt('Male of Female을 입력 ');
console.log(gender);

let objAry = JSON.parse(data); // string -> object type parsing
// console.log(objAry);

//표 형태로 출력
// let result = objAry.reduce(function (accum, curr) {

//     let mArry = [];
//     let fArry = [];
//     for(let ary in objAry){

//     if (gender == 'Male') {
//         for(let val in objAry.gender){
//             if (val == 'Male') {
//                 mArry += curr;
//             }
//         }
//         // return mArry;
//     } else if (gender == 'Female') {
//         for(let val in objAry.gender){
//             if (val == 'Femal') {
//                 fArry += curr;
//             }
//         }
//         // return fArry;
//     }return fArry || mArry;
// }
// }); // 하다가 말음..

let result = objAry.reduce(function (accum, curr, currIdx) {
    if (currIdx == 0) {
        accum += '<table border = 1>';
    }
    if (curr.gender == gender) {
        accum += '<tr>';
        for (let field in curr) {
            accum += `<td>${curr[field]}</td>`
        }
        accum += '</tr>';
    }
    if (currIdx == objAry.length - 1) {
        accum += '</table>';
    }
    return accum;
}, '');

document.write(result);