(function () {

    const box = document.querySelector('.input-numbers-box');
    const firstInput = document.querySelector('.input');
    const allInputs = document.querySelectorAll('.input');
    const submitBtn = document.querySelector('.btn');
    const textToCopy = document.querySelector('h4')

    for (let i of box.children) {
        i.onkeyup = function () {
            if (i.nextElementSibling) {
                i.nextElementSibling.focus();
            }
        }
    }

    firstInput.addEventListener('paste', event => {
        let paste = (event.clipboardData || window.clipboardData).getData('text');
        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].value = paste[i];
        }
    });

    submitBtn.addEventListener('click', () => {
        validateUserInput();
    });

    submitBtn.addEventListener('focus', () => {
        validateUserInput();
    })

    let validateUserInput = () => {
        let userInputText = Object.values(allInputs).map(x => x.value).join('');
        textToCopy.textContent === userInputText ?
            console.log('submitted') :
            console.log('the text do not match');
    }







})();
