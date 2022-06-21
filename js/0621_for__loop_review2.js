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

let ary = JSON.parse(data);
// console.log(ary);
//forEach
ary.forEach(elem => {
    if(elem.gender == 'Female'){
        console.log(elem)
    }
});

console.log('성별이 여성인 오브젝트만 출력...')
let femaleAry = ary.filter(elem => elem.gender == 'Female'); // gender =='Female
console.log(femaleAry);

let newCompany = ary.map(elem =>{
    let newElem = {}; // 새로운 객체에 요소 담기
    newElem.nId = elem.id;
    newElem.name = elem.first_name +' '+elem.last_name;
    newElem.salary = elem.salary *1.5;
    newElem.isNew = elem.salary > 4000 ? false : true;
    return newElem;
})
.filter(elem =>elem.isNew) // true 값만 담김
// .forEach(elem => console.log(elem));
console.log(newCompany);

// debugger;
let result = newCompany.reduce((acc, curr)=>{
    console.log(curr.salary);// newCompany.salary가 아니라 curr.salary임
    return acc+curr.salary;
},0); 
console.log('새로운 회사 직업 급여 합 : ', result);