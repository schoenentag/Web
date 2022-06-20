//function3.js

function sumNumber() {
    console.log(arguments); // 함수가 호출되면 arguments 객체
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sumNumber(1, 2, 3, 4, 5);

// 나머지 파라미터
// ... : 파라미터 갯수가 몇 개인지는 모르겠지만 가변적으로 처리, 배열 

function sumParam(...args) {
    let result = 0;
    args.forEach((val) => {
        result += val;
    }); //callback
    return result;
}
console.log(sumParam(1, 2, 3, 4, 5, 6, ));

let args = [1, 3, 5];

function anyFuc(...args /*펼친 연산자*/ ) {}
let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2];
console.log(otherArgs);
console.log(args.concat(another)); // concat : args + another의 배열을 합침

let obj1 = {
    name: 'Hong',
    age: 20,
    weight: 64.7
}
let newObj = {
    name: 'Choi',
    age: 16,
    height: 165.5
};
let obj3 = {
    sno: '12345'
}
let obj2 = {
    ...newObj,
    ...obj1,
    ...obj3
}; // new Object();
console.log(obj1, obj2); // 있는 속성값은 그대로 ... 없는 값만 업로드

let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{
        cname: '야옹이',
        age: 2
    }, {
        dname: '멍멍이',
        age: 3
    }]
}

comObj.sname; //이름
comObj.hobby[0]; //reading
comObj.pet[0].age; //2
console.log(comObj.pet[1].dname);

function restparams(...args) { //파라메터를 args 변수(배열)에 담아 함수 내부로 넘김
    console.log(args);
}
restparams(1, 2, 3, 4);

const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//나머지 파라메터로 합계 구하기 
function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    args.forEach(function (arg) {
        result += arg;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));
// 나머지 파라메터로 합계 구하기 개선
const sum2 = (a, b, ...args) => {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    result += args.length > 0 ? args.reduce((subsum, arg) => subsum += arg) : 0;
    //reduce() 콜백 함수(리듀서 함수로 칭함)로 배열 요소들의 누적 계산 결과 값을 얻는 메서드
    return result;
}
console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2));
console.log(sum2(1));


// 커링 (Currying)함수 : 함수 return 가능

function orderSet(burger, beverage) {
    console.log('버거 : ' + burger + ', 음료 : ' + beverage)
}
orderSet('치즈버거', '콜라');

function orderSet_currying(burger) {
    return function (beverage) {
        console.log('버거 : ' + burger + ', 음료 : ' + beverage);
    } //js는 함수를 반환할 수 있다 (커링으로 2개의 파라메터를 가지는 함수를 해제)
}
let beverageFnc = orderSet_currying('불고기버거');
beverageFnc('사이다'); // ()함수 실행
beverageFnc('환타');
// console.log(orderSet_currying('불고기버거')('콜라'));

function orderset2(burger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetcup(yn) {
                return function orderChicken(count) {
                    console.log('세트 : ' + burger + ', ' + beverage + ', ' + side + ', 케첩(' + yn + '), 조각치킨(' + count + '개)')
                }
            }
        }
    }
}
let order = orderset2('와퍼')('콜라');
order('프렌치후라이')('y')('2');

var a = 1;
var b = 5;

function outerFunc() {
    // var b; //<- var b가 밑에 선언되어있어도 제일 위에 선언된 것과 같음(호이스팅)
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a); //2
    var b = 2; // var는 호이스팅 됨
}
outerFunc();
console.log(b); //5