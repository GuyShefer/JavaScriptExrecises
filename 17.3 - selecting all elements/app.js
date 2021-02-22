(function () {

    let obj = {};
    let arr = ['myFirstDiv', 'mySecondDiv', 'myThirdDiv', 'myFourthDiv'];
    const divs = document.querySelectorAll("div");
    for(let i = 0; i < divs.length; i++){
        obj[arr[i]] = divs[i];
    }

    Object.entries(obj).forEach(element => console.log(element));
})();
