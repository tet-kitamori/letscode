// 関数内のthisの値は、呼び出し時の呼び出し方によって決まる。

const obj1 = {prop: "obj1"};
obj1.f = function() {console.log(this.prop);};

obj1.f();
obj1["f"]();

// 関数内のthisの値は、call/applyメソッドを呼び出すことで変更できる
// 関数を呼び出した時の第一引数が関数内でのthisになる

const obj2 = {
    prop: "obj1",
    f: function() { console.log(this.prop); }
};

const obj3 = {prop: "obj3"};

obj1.f.call(obj3);
obj1.f.apply(obj3);

