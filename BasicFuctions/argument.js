// パラメータ実引数の説明
// argument and parameter
function f1(p) {  // p is a parameter.
    console.log(p);
}

f1(16); // 16 is the argument.
f1(158);

// 実引数の取得、実引数の個数
function func0(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[2]);
    console.log(arguments.length);
}

func0(10, 20, 30);

// arguments.callee 呼び出された関数の取得
function func1() {
    console.log(arguments.callee);
}

func1();
