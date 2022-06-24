//array_basic.js

let arr = []; // new Array();
arr[0] = 'Hello'; //string type
arr[1] = 100; // num type 
arr[2] = true; //boolean type 
// 배열에 다른 타입을 대입할 수 있지만, 하나의 타입으로 대입하도록 권장

delete arr[1];
console.log(arr);
console.log(arr.length);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//확장 for
for(let val of arr){
    console.log(val);
}
//forEach
arr.forEach((val,idx)=>{
    console.log(`${idx} => ${val}`); // 배열의 값 undefined이면 반복에서 제외
});
console.clear();
arr.push('Apple'); //추가 (제일 뒤쪽에 추가) ★
arr.unshift('Banana'); //제일 앞쪽에 추가
arr.pop(); //제일 마지막번째 삭제
arr.shift(); // 0번째 삭제
arr.splice(0,0,'Apple'); //추가, 수정, 삭제


arr.forEach((val,idx)=>{
    console.log(`${idx} => ${val}`); 
});