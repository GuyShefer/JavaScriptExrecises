(function () {

    let greaterThen10 = num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                num > 10 ?
                    resolve('Greater then 10') :
                    reject('Less then 10');
            }, 300);
        })
    }

    async function checkNum(num) {
        try{
            console.log(await greaterThen10(num));
        } catch (err) {
            console.log(err);
        }
    }

    checkNum(20);
    checkNum(10);
    checkNum(8);

})();