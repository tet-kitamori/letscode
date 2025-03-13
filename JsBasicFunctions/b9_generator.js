// ジェネレータ関数は、next()メソッドを呼び出すと yield で設定した
// 値を順番に返す。　最後までいったら、あとは undefined。

function* gen1() {
    yield 1;
    yield 2;
    return 3;
}

const genobj1 = gen1();  // Create generator

console.log(genobj1.next());
console.log(genobj1.next());
console.log(genobj1.next());
console.log(genobj1.next());

function* gen2() {
    const ret = yield 1;
    console.log(ret);
}

const genobj2 = gen2();

genobj2.next();
genobj2.next(2);

function* gen3() {
    yield 1;
    yield 2;
    yield 3;
}

const genobj3 = gen3();

// return メソッドを呼び出すと実行後に終わる。
console.log(genobj3.next());
console.log(genobj3.return(10));
console.log(genobj3.next());
console.log(genobj3.next(6));
