//array_method.js
//some : 조건들 중 하나만 만족해도 rue, false
//every : 조건을 다 만족   true, false
//find : 찾기, findIndex : 인덱스 값
//indexOf: 배열요소 =>인덱스 값 반환
//sort() : 정렬
//split(구분자) : 문자열 => 나눈 요소를 배열
//join() : 배열 => 문자열



let idx = "This is a story".indexOf("is");
idx = [1,2,3,4,5].indexOf(38);
console.log(idx); //-1은 없는 값

let str =`The satisfaction of contributing to a project that is much bigger than myself as an individual drove me back then, as it does now. To know that the work I am doing positively impacts so many brings me great joy.`;
let strAry= str.split(' '); //공백을 기준으로 단어를 나눔 => 반환타입 배열
idx = strAry.indexOf('project'); //lastIndexOf() : 뒤에서부터 처리
let names = ['박은지','윤정은','박지혜','김나희'];
idx = names.indexOf('김나희');

//find
let result = names.find(function(elem,idx,ary){
    return elem == '김나희';
});
result = [6,4,3,21,14].find(elem => {
    return elem % 7 ==0;
});
console.log('7의 배수', result); //조건을 만족하는 요소 중 배열 첫번째 값만 출력

//some
result = [6,4,3,21,14].some(function(elem,idx,ary) {
    return elem > 200; // 만족하는 조건이 하나라도 있으면 true
});
console.log('some ', result); //false : 만족하는 것이 하나도 없다

//every
result = [6,4,3,21,14].every((elem,idx,ary)=> {
    return elem %2 == 0; // 배열 요소 전체가 조건값을 전부 만족해야한다.
});
console.log('every ', result); //false

let tempAry = [];
for (let i = 0; i < 5; i++){
    let temp = parseInt(Math.random() *10)+1; // (0 <= x < 1)*10+1 , 1~10
    // console.log(temp);
    tempAry.push(temp);
}
console.log(tempAry);
// 1. tempAry 배열의 값이 다 짝수인지 체크
let tempAry2 = tempAry.every(elem => elem % 2 ==0);
console.log('모든 배열의 요소가 짝수 : ', tempAry2);
// 2. tempAry 배열의 값 중 3의 배수의 존재 확인
tempAry2 = tempAry.some(elem => elem % 3 == 0);
console.log('3의 배수 유무 : ', tempAry2);
// 3. 5보다 큰 값이 있으면 그 값을 반환
tempAry2 = tempAry.find(elem => elem > 5)
tempAry2 = tempAry.filter(elem => elem > 5);
console.log('5보다 큰 값 : ', tempAry2);

//sort
result = [6,4,3,21,14].sort(); //가나다 순으로 정렬
console.log(result);
// number 오름차순으로 정렬하고 싶으면..? => 비교 함수를 만들어야 함
result = [6,4,3,21,14].sort(function(a,b){ //a,b비교대상
    return a - b; // (양의 값은 내림차순)(음의 값은 오름차순)
    // if (a<b){
        //     return -1 // 오름차순
        // } else{
            //     return 1; // 내림차순
            // }
        }); 
        let objAry = [
            {name:'홍길동',age:18},
            {name:'심청', age:17},
    {name:'김자스', age:20}]
    
console.log('홍' < '박'); //a b c 순 비교 
objAry.sort(function(a,b){
    // if(a.name < b.name){
        //     return -1;
        // }
        // else{
            //     return 1;
    // }
    return a.name < b.name ? -10:10; // 이름 오름차순
    // return a.age < b.age ? -1 : 1; // 나이 오름차순
});
console.log(objAry);
console.clear();

//join
result = ['홍길동','심청','김자스'].join('-')
console.log('join', result); //홍길동-심청-김자스

names = '권소정, 김하은,유선희,     김가윤'; // 오름차순으로 정렬하여 문자열로 출력
// names.replace(" ","");
let nmobj = names.split(/,\s*/); //','기준으로 배열만들기 (공백제거)
console.log(nmobj);
nmobj.sort(function(a,b){ // 오름차순
    return a < b ? -1 : 1 
})
let namesj = nmobj.join(', '); // 배열을 문자열로 만들기 요소마다 ','삽입
console.log(namesj);



//split
strAry = 'Littering'.split(''); //문자단위 하나하나 배열요소로...
let cnt = 0;
strAry.forEach(elem => {
    cnt += elem == 't' ? 1 : 0;
    console.log(cnt);
})
cnt = strAry.reduce((accum, curr)=>{
    accum += curr == 't' ? 1 : 0;
    return accum;
},0);
console.log('cnt : ', cnt);

