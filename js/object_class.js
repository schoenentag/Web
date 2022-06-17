// object_class.js
// 클래스 예제(p.99 ~ 101)
class Estimate {
    // 생성자
    constructor(param) {
        this.unit = param;
    }    
    // 메소드(견적가 얻기)
    getEstimate(unitType, width, height) {
        let priceInfo = this.unit.find(item => item.type == unitType);
        return priceInfo.price * width * height;
    }
    // 메소드(배열에 요소 추가)
    addUnit(unit) {
        this.unit.push(unit); // push : 배열에 새로운 요소 추가
    }
}
let unitInfo = [{type : 'wood', price : 100},
                {type : 'iron', price : 300},
                {type : 'plastic', price : 200}];
const estimator = new Estimate(unitInfo);
estimator.addUnit({type:'glass', price : 500});

let result = estimator.getEstimate('wood', 20, 20);
console.log('wood 가격 : ' + result); // 40000 = price(100)*width(20)*height(20)

let amt = estimator.getEstimate('glass', 20, 20);
console.log('glass 가격 : ' + amt); // 200000

console.log(unitInfo); // 추가된 항목까지 현재 리스트 조회


// object 타입으로 가능
// let obj = {
//     unit: unitInfo,
//     getEstimate: function() {},
//     addUnit: function() {}
// };
let obj = {};
obj.unit = unitInfo;
obj.getEstimate = function(unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit =  function(unit) {
    this.unit.push(unit);
}
let result2 =  obj.getEstimate('wood', 20, 20);
console.log(result2);