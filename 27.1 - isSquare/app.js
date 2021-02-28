(function () {

    function Square(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    Square.prototype.isSquare = function () {
        return (this.a === this.b && this.a === this.c && this.a === this.d) ? true : false;

    }

    let square1 = new Square(1, 1, 1, 1);
    let square2 = new Square(2, 1, 1, 1);

    console.log(square1.isSquare());
    console.log(square2.isSquare());
})();