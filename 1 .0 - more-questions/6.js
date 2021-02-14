(function () {

    let quadratic = (a,b,c) => {
        let firstQuadratic = Math.abs(Math.pow(b,2) -4 * a * c);
        let calcX = (-b + Math.sqrt(firstQuadratic))/(2 * a);
        let calcY = (-b - Math.sqrt(firstQuadratic))/(2 * a);
        console.log(calcX);
        console.log(calcY);
    }

   quadratic(1,8,12);

})();