// 配列の引数
const f1 = function([a, b, c]) {
    console.log(`a:${a}, b:${b}, c:${c}`); // この記法に注意
}

const arr1 = [11, 22, 33];
f1(arr1);

// 残余引数構文(...varname)を使うと複数の引数を配列として受け取れる
const f2 = function(a, b, ...paramlist) {
    console.log(paramlist);
}

f2(1, 2, 3, 4, 5, 6, 7);
f2();

const arglist = [1, 2, 3, 4];
f2(...arglist);

// オブジェクトの引数
function f3({a, b, c}) {
    console.log(`a:${a}, b:${b}, c:${c}`);
}

const obj1 = {a:12, b:23, c:34, d:45};
f3(obj1);
