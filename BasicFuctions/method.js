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

// メソッドは、オブジェクト定義中に定義しても良い
obj2 = {
    prop1: 99,
    method1: function() {
        return this === obj2;
    },
    method2: function() {
        return this.prop1;
    }
}

console.log(obj2.method1());
console.log(obj2.method2());