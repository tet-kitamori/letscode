// 関数オブジェクト
// JavaScriptでは、関数の実体は関数オブジェクトと呼ぶオブジェクト
// 関数は、function で定義する

function func1() {}
console.log(typeof func1); // typeof 演算子で関数 func1()の型を得る

// 通常のオブジェクト
const obj1 = {};
console.log(typeof obj1); // 通常のオブジェクトの型

// 関数オブジェクトは、Functionオブジェクトのインスタンス（実体）になっている
console.log(func1 instanceof Function);

// 従って、func1()のプロトタイプは、Function.prptotype。　気にしなくてもOK。
console.log(Object.getPrototypeOf(func1) === Function.prototype);

// FunctionオブジェクトはObjectを継承している
console.log(func1 instanceof Object);
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
