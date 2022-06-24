//object_class.js

//----교재 99쪽~101쪽

//unit : param

class Estimate{
    constructor(param){
        //생성자
        this.unit = param;
    }
    //견적가 얻기 메소드
    //getEstimate = unittype, width, height를 인자로 가짐
    getEstimate(unittype, width, height){ 
        // let priceInfo = this.unit.find(function(val, idx, ary){ //배열 function은 가져오는 인자값이 고정되어있음 | 첫번째 val, 두번째 인덱스, 세번째 배열값
        //     return val.type == unittype; 
        // })
        let priceInfo = this.unit.find(item => item.type == unittype); //화살표 함수로 간소화
        return priceInfo.price*width*height; //find 로 찾은 값의 price, width, height를 곱해서 반환
    }
    //배열에 요소 추가 메소드
    addUnit(unit){ 
        this.unit.push(unit); //push : 배열에 새로운 요소를 추가할 때 사용
    }
}

let unitinfo = [{type: "wood", price: 100}, {type: "iron", price: 300}, {type: "plastic", price: 200}];
const estimator = new Estimate(unitinfo); //생성자의 매개값 param 에 unitinfo 가 초기값으로 대입
estimator.addUnit({type:'glass', price: 500}); //glass 요소 추가
let result = estimator.getEstimate('glass', 20, 20); //estimator 의 getEstimate 메소드 : glass, 20, 20의 값을 받아서 
console.log(result);


// ++ object 타입으로 기능
let obj = {
    // unit: unitinfo,
    // getEstimate: function() {},
    // addUnit: function() {}
    //obj안에 바로 선언해도 됨
}; 

obj.unit = unitinfo; //unit 에 unitinfo를 담아준다

obj.getEstimate = function(unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}

obj.addUnit = function(unit){
    this.unit.push(unit);
}

let result1 = obj.getEstimate('iron', 20, 20);
console.log(result1);