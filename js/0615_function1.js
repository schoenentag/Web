//function1.js

function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20)); //number type 30
console.log(sum('10', '20')); //string type 1020
function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus(20, 10)); //number type 10
console.log(minus('20', '10')); //(number)string type 10 자동 형변환이 일어남(곱하기, 나누기도...)

let result = 0;;

let numAry = [20, 27, 33, 19, 44];
sumAry(numAry);

function sumAry(ary) {
    for(let num of ary){
        result += num;
    }
}
console.log('배열의 합 : ' + result);

result = 0;

numAry.forEach(function (val, idx, ary) {
    //console.log(val, idx, ary);
    if(val %2 == 1)
    result += val;

}); // 메소드의 매개값으로 익명함수 : 콜백함수

console.log('홀수 배열의 합 : ' + result);
