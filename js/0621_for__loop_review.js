//for_loop.js
//배열관련 반복되는 메소드
//forEach: void, mp : [배열] A-> A', filter, reduce : 문자열, Number, [배열], {}

let ary = [3,5,8,9,12]; // 배열 객체 : new Array();
ary.push(5); // 제일 마지막 위치에 요소 추가 <-> pop() : 삭제
ary.unshift(7); // 제일 처음 위치에 요소 추가 <-> shift() : 삭제
// [7,3,5,8,9,12,5]
ary.splice(3, 1); // 3번째 위치의 1개의 값을 삭제 [7,3,5,9,12,5]

ary.forEach(elem => console.log(elem));

console.log('----');

//1. ForEach
let newAry = [];
let result = ary.forEach(firstCallBack); // forEach는 return값이 없음
function firstCallBack(elem){
    // console.log(elem);
    newAry.push(elem);
}
console.log(newAry);

//2.map
result = ary.map(elem => elem * 2); // A -> A'(A*2)
console.log(result);

//3.filter A -> a 조건에 만족하는 요소만 새로운 배열에 담는다
result = ary.filter(elem => elem %2 == 0); 
console.log(result);

//4.reduce A ->문자열, Number, [], {}
result = ary.reduce((accum,curr,currIdx,arry)=>{
    console.log(`누적값: ${accum}, 현재 값 : ${curr}, 현재 인덱스 : ${currIdx}`);
    return accum+curr; //리턴값에 따라 누적값이 달라진다.
},0);
result = ary.reduce((accum, curr)=>{
    console.log(`누적값: ${accum}, 현재 값 : ${curr}`);
    accum.push(curr*2);
    return accum;
},[]); //map과 같은 기능

result = ary.reduce((accum,curr,currIdx)=>{
    if (currIdx > 3){ 
        accum.push(curr*2);
    }
    return accum;
},[]); // filter, map
console.log(result);