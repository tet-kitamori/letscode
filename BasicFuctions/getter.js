class Circle {
    constructor(rad) {
        this.rad = rad;
    }

    get area() { // 面積を表すプロパティ
        return this.rad * this.rad * Math.PI;
    }
}

const c1 = new Circle(50);
console.log(c1.area);
