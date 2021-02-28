(function () {

    const person = {
        name: 'Guy',
        printName: function () {
            console.log(this.name);
        },
        dealyPrintName: function () {
            setTimeout(() => {
                console.log(this.name);
            }, 1000);
            
        },
    }

    person.printName();
    person.dealyPrintName();

})();