(function () {

    const listOfNeighbours = [
        ["Canada", "Mexico"],
        ["Spain"],
        ["Norway", "Sweden", "Russia"],
    ];

    let i = 0;
    let j = 0;
    while (i < listOfNeighbours.length) {
        while(j < listOfNeighbours[i].length) {
            console.log(listOfNeighbours[i][j]);
            j++
        }
        j = 0
        i++;
    }

    console.log("-----------")

    let arr = ["boo", "doooo", "hoo","ro"] ;
    let index = 0;
    while(index < arr.length){
        console.log(arr[index]);
        index++
    }


})();