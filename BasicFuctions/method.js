// メソッド
// メソッドはオブジェクトに付随した関数

// クラス内部で定義されたメソッドは、new でインスタンスが
// 生成された後、使用することができる。
class MyClass {
    method1() {
        return "method1";
    }
}

const obj1 = new MyClass();
console.log(obj1.method1());

// メソッドは、オブジェクト定義中に定義指定も良い
obj2 = {
    prop1: 99,
    method1: function() {
        return this === obj2;
    },
    method2: function() {
        return prop1;
    }
}

console.log(obj1.method1());
console.log(obj1.method2());

