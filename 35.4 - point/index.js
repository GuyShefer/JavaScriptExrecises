(function () {

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        getX() {
            return this.x;
        }

        getY() {
            return this.y;
        }

        addToX(x) {
            this.x += x;
        }

        addToY(y) {
            this.y += y;
        }

        setX(x) {
            this.x = x;
        }

        setY(y) {
            this.y = y;
        }

        addPoint(point) {
            this.x += point.getX();
            this.y += point.getY();
        }

        isSame(point) {
            return (this.x === point.getX() && this.y === point.getY()) ? true : false;
        }

        print() {
            console.log(`point x : ${this.x}, point y : ${this.y}`);
        }

    }

    // let point1 = new Point(1, 2);
    // let point2 = new Point(2, 2);
    // point1.print();
    // console.log(point1.isSame(point2));

    class PointWorld {
        constructor() {
            this.points = [];
        }

        addPoint(point) {
            this.points.push(point);
        }

        print() {
            this.points.forEach(element => { console.log(element); })
        }

        sortPointsByY() {
            return this.points.sort((a, b) => b.getY() - a.getY());
        }

        filterDuplicatePoints() {
            let arrReg = this.points.map(item => Object.assign({}, item));

            return arrReg.reduce((filtered, item) => {
                if (!filtered.some(filteredItem => JSON.stringify(filteredItem) == JSON.stringify(item)))
                    filtered.push(item)
                return filtered
            }, []);
        }

        someOfx() {
            return this.points.reduce((sum, item) => {
                return sum += item.getX();
            }, 0)
        }

        isExist(point) {
            for (let i = 0; i < this.points.length; i++) {
                if (JSON.stringify(this.points[i]) === JSON.stringify(point)) {
                    return true;
                }
            }
            return false;
        }


    }

    let pointWorld = new PointWorld();
    pointWorld.addPoint(new Point(1, 2));
    pointWorld.addPoint(new Point(1, 1));
    pointWorld.addPoint(new Point(3, 4));
    pointWorld.addPoint(new Point(3, 4));

    pointWorld.print();

    console.log(pointWorld.sortPointsByY());
    console.log('---------');
    console.log(pointWorld.filterDuplicatePoints());
    console.log('---------');
    console.log(pointWorld.someOfx());
    console.log('---------');
    let point = new Point(2, 4);
    console.log(pointWorld.isExist(point));

})();