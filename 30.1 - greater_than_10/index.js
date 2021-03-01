(function () {

    let greaterThen10 = num => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                num > 10 ?
                resolve('Greater then 10') :
                reject('Less then 10');
            },300);
        }).then(
            function(value) { console.log(value)},
            function(error) { console.log(error)}
        )
    }

    greaterThen10(20);
    greaterThen10(10);
    greaterThen10(8);

})();