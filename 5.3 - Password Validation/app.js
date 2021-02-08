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
        for (let i = 0; i < password.length; i++) {
            if (isNaN(password[i])) {
                if (password[i] == password[i].toUpperCase()) {
                    return true;
                }
            }
        }
        return false;
    }

    console.log(passwordValditonWithIfElse("1234567"));
    console.log(passwordValditonWithIfElse("12345678"));

    console.log("-----------")

    console.log(passwordValditonWithTernary("1234567"));
    console.log(passwordValditonWithTernary("1234567A8"));

    console.log("-----------")

    console.log(advPasswordValidation("1234G5678"));
    console.log(advPasswordValidation("12345678"));
    console.log(advPasswordValidation("123456"));
    console.log(advPasswordValidation("123456asad"));

})();