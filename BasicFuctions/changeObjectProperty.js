function f1(o) {
    o.p1 = 2;
}

let obj1 = {p1: 1, p2: 3};
f1(obj1);
console.log(obj1);
