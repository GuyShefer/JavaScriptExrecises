const array = [1, 2, 3, 4, 4, 5];

const findDuplicateNumber = (arr) => {
    const obj = {};
    let result = -1;
    arr.forEach(element => {
        if(obj[element]){
            result = element;
        }
        obj[element] = 1
    })
    return result
}

console.log(findDuplicateNumber(array));