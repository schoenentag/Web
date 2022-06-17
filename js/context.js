//context.js p.112

// 함수안에서 사용이 되면 전역객체(window)가 된다 ***중요***
let obj ={}; // new Object();

obj.act = function(){
    this.value = 'default value'; //obj의 this
    function innerAct(){
        this.value ='innerAct value';
        console.log('this.value : ' + this.value);
    }

//객체 참조를 넘기는 act() 메서드 안의 함수
function innerReact(caller){
    caller.value = 'innerReact';
    console.log('this.value : ' + this.value);
    console.log('caller.value : ' + caller.value)
}
innerAct();
console.log('obj 객체의 this.value : ' + this.value);

innerReact(this); //obj
console.log('obj 객체의 this.value : ' + this.value);
}
obj.act();