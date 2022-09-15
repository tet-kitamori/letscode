// ジェネレータ関数内で例外を発生させる例
function* gen1() {
    try {
        yield 1;
        yield 2;
        yield 3;
    }
    catch (e) {
        console.log(e.message);
    }
}

const genobj1 = gen1();

console.log(genobj1.next());
console.log(genobj1.throw(new Error("Error!")));
console.log(genobj1.next());
