// obuject のプロパティを変更する

function f1(o, val) {
    o.p1 = val;
}

let obj1 = {p1: 1, p2: 3};
console.log(obj1);

// プロパティ変更
f1(obj1, 99);
console.log(obj1);
