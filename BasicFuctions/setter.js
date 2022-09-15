class Circle {
    constructor(rad) {
        this.rad = rad;
    }

    set area(value) { // 面積を表すプロパティ
        if(value < 0) {throw new Error("面積の値が範囲外");}
        this.rad = Math.sqrt(value / Math.PI);
    }
}

const c1 = new Circle(50);
c1.area = 100;
console.log(c1.rad);
