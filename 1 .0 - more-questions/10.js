(function () {

    let checkEmail = email => {
        const regex = new RegExp(/\d{3,}[A-Z]{2,}[a-z]{1,}/);

        return regex.test(email);
    }

    console.log(checkEmail('123ASa'))
})();