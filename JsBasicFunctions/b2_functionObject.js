// function の実体は関数オブジェクト
function func1() {}
console.log(typeof func1);

// 通常のオブジェクト
const obj1 = {};
console.log(typeof obj1);

// 関数オブジェクトは、Functionオブジェクトのインスタンス
console.log(func1 instanceof Function);

console.log(Object.getPrototypeOf(func1) === Function.prototype);

// FunctionオブジェクトはObjectを継承している
console.log(func1 instanceof Object);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
