(function () {

    const divs = document.querySelectorAll("div");
    let obj = {};
    let arr = ['myFirstDiv', 'mySecondDiv', 'myThirdDiv', 'myFourthDiv'];

    for (let i = 0; i < divs.length; i++) {
        obj[arr[i]] = divs[i];
    }

    Object.entries(obj).forEach(element => console.log(element));
})();
