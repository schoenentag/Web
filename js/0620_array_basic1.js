// array_basic1.js

let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현'); //['박소현', '이희수', '인은지']

names.splice(1, 0, '오지민'); // 2번째 매개값 : 0 : 추가, 1: 대체
//['박소현', '오지민', '이희수', '인은지']
names.splice(2, 0, '김가윤', '박경아');
//['박소현', '오지민', '김가윤', '박경아', '이희수', '인은지']

let newNames = [];
names.forEach(function (val, idx) {
    if (idx % 2 == 0) // 홀수번째 값만 담기
        newNames.push(val);
});

console.log('names[] => '+names);
console.log('newNames[] =>' +newNames);

// map : 새로운 배열을 만들어주는 기능
let mapAry = names.map(function(val, idx, ary) {
    if (idx % 2 == 0){
        return val;
    }
}); //mapping A -> B
console.log('mapAry[] =>' , mapAry);

let filAry = mapAry.filter(function(val,idx){
    return val;
}); // 조건을 만족하는 값들만 새로운 배열 요소
console.log('filAry[] =>' , filAry);

let resultAry = names.map((val,idx)=>{
    if(idx % 2 ==0){
        return val;
    }
}).filter((val,idx)=>{
    return val;
});
console.log('resultAry[] =>' + resultAry);
