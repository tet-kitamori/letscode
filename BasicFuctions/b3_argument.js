// パラメータと実引数の説明
// 関数定義の括弧中に記述した語がパラメータ(parameter)
function f1(p) {  // p is a parameter.
    console.log(p);
}

f1(16); // 関数呼び出しのために与えた値 16 が実引数(argument)
f1(158);

// 実引数の取得、実引数の個数
function func0(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[2]);
    console.log(arguments.length); // lengthは引数の個数を返すメソッド
}

func0(10, 20, 30);

// arguments.callee 呼び出された関数を取得するメソッド
function func1() {
    console.log(arguments.callee);
}

func1();

// デフォルト引数
function func2(a, b=22, c=33) {
    console.log(`function2  a:${a}, b:${b}, c:${c}`);
}

func2();
func2(11, 44);

// デフォルト値には、任意の式を書くことができる。左側の引数も使える。
function func3(a, b=22, c=a+b) {
    console.log(`function3  a:${a}, b:${b}, c:${c}`);
}

func3();
func3(11, 44);