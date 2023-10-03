// コンストラクタ
// new をつけて関数呼び出しを行うと、新しいオブジェクトが作成され
// コンストラクタが実行される。
class MyClass {
    constructor(param) {
        this.prop1 = param;
        console.log("MyClass: constructor activated");
    }
}

const obj1 = new MyClass("obj1");
console.log(obj1);
