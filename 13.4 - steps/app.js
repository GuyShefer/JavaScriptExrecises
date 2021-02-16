(function () {

    const printSteps = num => {
        for (let i = 1; i <= num; i++) {
            console.log('#'.repeat(i) + ' '.repeat(num - i))
        }
    }

    printSteps(8);

    console.log("---------------------");

    const printSteps2 = num => {
        for (let i = 1; i <= num; i++) {
            let string = [];
            let j = 0;
            while(j <= num){
                if(j < i) {
                    string.push("#");
                } else {
                    string.push(' ');
                }
                j++;
                
            } 
            console.log(string.join(''));
            string = [];
        }
    
    }

    printSteps2(8);

})();