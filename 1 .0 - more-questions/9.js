(function () {

    let checkEmail = email => {
        const regex = new RegExp(/^\S+@\S+\.\S+$/);
        return regex.test(email);
    }

    console.log(checkEmail('guy@gmail.com'))
})();