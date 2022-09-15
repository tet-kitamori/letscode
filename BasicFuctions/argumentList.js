const f1 = function(a, b, c) {
    console.log(`a:${a}, b:${b}, c:${c}`);
}

f1(1, 2, 3);

const array = [4, 5, 6];
f1(...array);
// スプレッド構文を使うと配列を展開する

const f2 = function(...paramlist) {
    console.log(paramlist);
}

const arglist = [1, 2, 3, 4];
f2(...arglist);
