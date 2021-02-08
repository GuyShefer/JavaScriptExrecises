(function () {

    let passwordValditonWithIfElse = (password) => {
        if (password.length > 7) {
            return 'Strong';
        } else {
            return 'Weak';
        }
    }

    let passwordValditonWithTernary = (password) => {
        return (password.length > 7) ? 'Strong' : 'Weak';
    }

    let advPasswordValidation = (password) => {
        return (password.length > 7 && hasCapitalLetter(password)) ? 'Very Strong' : password.length > 7 ? 'Strong' : 'Weak';
    }

    let hasCapitalLetter = password => {
         return password == password.toUpperCase() && password != password.toLowerCase();
    }

    console.log(passwordValditonWithIfElse("1234567"));
    console.log(passwordValditonWithIfElse("12345678"));

    console.log("-----------")

    console.log(passwordValditonWithTernary("1234567"));
    console.log(passwordValditonWithTernary("12345678"));

    console.log("-----------")

    console.log(advPasswordValidation("A12345678"));
    console.log(advPasswordValidation("12345678"));
    console.log(advPasswordValidation("123456"));

})();