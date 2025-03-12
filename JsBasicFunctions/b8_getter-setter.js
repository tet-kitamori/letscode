// ゲッターとセッターは、オブジェクトのプロパティへのアクセスの
// カスタマイズをするもので、安全性を高める。

// この例では、円の面積あるいはその半径を求めるのにmethodを作らずに
// area というプロパティを作り、そのゲッター、セッターを記述している。
class Circle {
    constructor(rad) {
        this.rad = rad;
    }
    // getter
    get area() { // 面積を表すプロパティ
        return this.rad * this.rad * Math.PI;
    }
    // setter
    set area(value) { // 面積を表すプロパティ
        if(value < 0) {throw new Error("面積の値が範囲外");}
        this.rad = Math.sqrt(value / Math.PI);
    }
}

const c1 = new Circle(50);  // Create Object C1
console.log(c1.area);       // use getter

c1.area = 100;              // use setter
console.log(c1.rad);