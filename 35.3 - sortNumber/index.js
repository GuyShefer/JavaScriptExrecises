(function () {

    class SortNumber {
        constructor() {
            this.arr = new Set();
        }

        addNum(num) {
            return this.arr.add(num);
        }

        removeNum(num) {
            return this.arr.delete(num);
        }

        getAll() {
            return this.arr;
        }

        print() {
            this.arr.forEach(el => {
                console.log(el);
            })
        }

        share(sortNumber) {
            let amountOfSharedNum = 0;
            sortNumber.getAll().forEach(elementFromInputObj => {
                this.getAll().forEach(elemnt => {
                    if (elementFromInputObj === elemnt) {
                        amountOfSharedNum++
                    }
                })
            })
            return amountOfSharedNum;
        }

        union(sortNumber) {
            let clonedSet = new Set(this.arr);
            sortNumber.getAll().forEach(element => {
                clonedSet.add(element);
            })
            return clonedSet;
        }

    }


    let sortNumber = new SortNumber();
    sortNumber.addNum(1);
    sortNumber.addNum(4);
    sortNumber.addNum(3);
    sortNumber.addNum(2);

    sortNumber.print();

    let sortNumber2 = new SortNumber();
    sortNumber2.addNum(1);
    sortNumber2.addNum(4);
    sortNumber2.addNum(7);

    console.log("Amount of Share numbers is: ", sortNumber.share(sortNumber2));

    console.log(sortNumber.union(sortNumber2));





})();