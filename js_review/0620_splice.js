//배열과 메서드
//요소 추가, 제거 메서드
// arr.push() : 맨 끝에 요소 추가
// arr.pop() : 맨 끝 요소 제거
// arr.shift() : 맨 앞 요소제거
// arr.unshift() : 맨 앞에 요소 추가

//splice : 배열에서 요소 하나만 지우고 싶을때...

let arr = ["I", "go", "home"];
delete arr[1]; // go를 삭제, 값만 비어있고 공간은 존재한다.
console.log(arr); // 출력값 :  ['I', empty, 'home'] 

// splice 는 추가, 삭제 교체 가능
// 구문 : arr.splice(컨트롤할 요소를 가리키는 index[,deleteCount, elem1, ...,elemN])
arr = ["I", "study","JavaScript"];
arr.splice(1,1); // 인덱스 1부터 요소 한 개를 제거
console.log(arr); // study 삭제

arr = ["I", "study","JavaScript","right", "now"];
arr.splice(0,3,"Let's","dance")// 0번째 요소부터 3개 지우고 대체
console.log(arr); // 출력 : ["Let's", 'dance', 'right', 'now']

// splice의 deleteCount를 0으로 설정하면 제거하지 않으면서 새로운 요소 추가가능
arr = ["I", "study","JavaScript"];
arr.splice(2,0,"complex", "language");
console.log(arr); // 출력 : ['I', 'study', 'complex', 'language', 'JavaScript']
                  //2번째 인덱스값에 삽입된다

// arr.slice 
// 구문 : arr.slice([start],[end])
// start인덱스부터 end-1 인덱스요소까지 복사하여 새로운 배열 반환

arr = ['t','e','s','t'];
console.log(arr.slice(1,3)); // 출력 : [e,s]
console.log(arr.slice(-2)); // 인덱스 -2에서 끝까지 


