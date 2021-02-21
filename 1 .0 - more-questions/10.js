(function () {

    let checkEmail = password => {
        const regex = new RegExp(/\d{3,}[A-Z]{2,}[a-z]{1,}/);

        return regex.test(password);
    }

    console.log(checkEmail('123ASa'))
    console.log(checkEmail('123AS'))
    console.log(checkEmail('123'))
})();