(function () {

    const name = document.querySelector('.name');
    const age = document.querySelector('.age');
    const email = document.querySelector('.email');
    const button = document.querySelector('.btn');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        let result = confirm(`Your details: \n name: ${name.value}, age: ${age.value}, email: ${email.value}`);
        if (result) {
            alert('congratulations you successfully sent this form');
        } else {

        }
    });

})();
