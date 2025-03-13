// 変数の宣言は「let」、定数の宣言は「const」
// それぞれのスコープは、{ }の範囲内です。

{  // Start Block scope
    let num1 = 12345;
    const num2 = 6789;

    console.log(num1, num2);

    num1 = 6543;
    console.log(num1, num2);
}   // End of Block scope

// 変数には、数値でも、文字列でも、オブジェクトでもなんでも入れられる。
// 変数宣言に「var」があるが、こちらは古い宣言法でスコープが広く、
// 関数スコープ　function() { 関数スコープ } 内で有効です。
// この範囲内で再宣言可能です。

function f1() {  // Start function scope
    {   // Block scope
        var s1 = "abcd";
        console.log(s1);
    }   // End Block scope
    
    // var宣言の変数のスコープは関数スコープだからblock外でもOK
    console.log(s1);

    var s1 = 123;
    console.log(s1);
}   // End of function scope

f1();
