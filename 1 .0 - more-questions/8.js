(function () {

    let toUpper = string => {
        let newString = '';
        for (let i of string) {
            i === ' ' ? newString += ' ' : newString += (String.fromCharCode(i.charCodeAt(0) - 32));
        }
        return newString;
    }

    console.log(toUpper("hello world !"));
})();