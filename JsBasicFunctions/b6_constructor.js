// コンストラクタ
// new をつけて関数呼び出しを行うと、新しいオブジェクトが作成され
// コンストラクタが実行される。

function myClass1(param) {
    this.prop1 = param;
}

const obj1 = new myClass1("myObject1");
const obj2 = new myClass1("myObject2");
console.log(obj1.prop1);
console.log(obj2);
console.log(typeof(obj1));

// コンストラクタを明示すると、newなしでインスタンスを生成できなく
// なるので、newのつけ忘れによるバグの発生を防止できて安全
class myClass2 {
    constructor(param) {
        this.prop1 = param;
        console.log("myClass2: constructor activated");
    }
}

const obj3 = new myClass2("myObject3");
console.log(obj3);
console.log(typeof(obj3));
