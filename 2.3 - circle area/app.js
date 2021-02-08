(function () {

    function calcCircleArea(radius){
        let circleArea = Math.PI * radius * radius;
        console.log(circleArea);
        console.log(circleArea.toFixed(2));
    }

    calcCircleArea(3);
    calcCircleArea(5);
    calcCircleArea(10);

})();