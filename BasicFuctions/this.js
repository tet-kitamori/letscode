// 関数内のthisの値は、呼び出し時の呼び出し方によって決まる。

const obj1 = {prop: "obj1"};
obj1.f = function() {console.log(this.prop);};

obj1.f();
obj1["f"]();

const obj2 = {
    f: function() { console.log(this); }
};
const func2 = obj2.f;
func2();  // global object

// 関数内のthisの値は、call/applyメソッドを呼び出すことで変更できる
// 関数を呼び出した時の第一引数が関数内でのthisになる
// call と apply の違いは引数を引数リストで渡すか配列を使うかの違い

const obj3 = {prop: "obj3"};

obj1.f.call(obj3);
obj1.f.apply(obj3);

// function で定義された関数とアロー関数では this が異なる
// アロー関数内の this は関数定義時の this
const obj4 = {
    method1: function() {
        return this === obj4;
    },
    method2: () => {
        return this === obj4;
    }
};
console.log(obj4.method1());
console.log(obj4.method2());
