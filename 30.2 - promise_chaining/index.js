(function () {

    let makeAllCaps = arr => {
        return new Promise((resolve, reject) => {
            let arrWithOutStr = arr.filter(word => {
                return typeof word !== 'string';
            })
            arrWithOutStr.length !== 0 ? reject('one item or more are not string') : resolve(arr.map(word => {
                return word.toUpperCase()
            }))
        })
    }

    let sortWords = arr => {
        return new Promise((resolve, reject) => {
            arr.length > 0 ?
                resolve(arr.sort()) :
                reject('the array is empty');
        }).then(result => { console.log(result) }).catch(error => { console.log(error) })
    }

    makeAllCaps(['bbb', 'ccc', 'aaa']).then(result => { sortWords(result) }).catch(error => { console.log(error) })


})();