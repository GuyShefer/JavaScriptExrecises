function arrayDiff(a, b) {
    let array = a;
    for (let i = 0; i < b.length; i++) {
        array = array.filter((value)=> {
            return value !== b[i]
        })
    }
    return array
}

console.log(arrayDiff([1, 2, 3], [1, 2]));