// function を使って関数を定義する記述には２つの方法がある
// 1.関数宣言(function declaration)
// 2.関数式(function expression)

// 関数宣言
function func1() {
    console.log("function declaration: func1");
}

// 関数式
const f2 = function func2() {
    console.log("function expression: func2");
} // 名前付き関数式

const f3 = function() {
    console.log("function expression: No name");
} // 名前なし関数式（こういう使い型が多い)

func1();
f2();
f3();

// JavaScript では、式をかける場所には関数式もかける
// 名前付き関数式で、変数名と関数名が違うと混乱の元になるので注意
// 最初から同じにするか、名前なしにするほうが良い。

// アロー関数は無名関数を簡単に記述するものである。
const f4 = (x) => { return x + 1; };
console.log(f4(123));

