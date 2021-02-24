(function () {

    let rndLetterDisplay = document.querySelector('.rndLetterDisplay');
    let enterAValid = document.querySelector('#enterAValid');
    let hasBeenGuessedTxt = document.querySelector('#hasBeenGuessed');
    let RightLetterTxt = document.querySelector('#RightLetter');
    let wrongLetterTxt = document.querySelector('#wrongLetterTxt');
    let guessList = document.querySelector('.guess-list');
    let userGuess = '';
    let userGuessesArr = [];
    let isWonDiv = document.querySelector('.isWonDiv');
    let button = document.querySelector('.btn');
    let rndLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));

    button.addEventListener('click', (e) => {
        rndLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        userGuessesArr = [];
        guessList.textContent = '';
        rndLetterDisplay.textContent = '?'
        disapearTheText();
    })


    document.onkeypress = function (e) {
        e = e || window.event;
        let userGuessAsciiNumber = e.keyCode;
        disapearTheText();

        if (!isValidGuess(userGuessAsciiNumber)) {
            enterAValid.style.display = "block";
        }
        userGuess = (String.fromCharCode(userGuessAsciiNumber)).toLowerCase();
        if (isExistInTheArr(userGuess)) {
            hasBeenGuessedTxt.style.display = "block";
            return;
        }
        if (rndLetter === userGuess) {
            RightLetterTxt.style.display = "block"
            rndLetterDisplay.textContent = rndLetter;
            isWonDiv.style.display = "block";
        } else {
            wrongLetterTxt.style.display = "block"
        }
        userGuessesArr.push(userGuess);
        guessList.textContent += `${userGuess} ,`
    };

    let disapearTheText = () => {
        enterAValid.style.display = "none";
        hasBeenGuessedTxt.style.display = "none";
        RightLetterTxt.style.display = "none";
        wrongLetterTxt.style.display = "none";
        isWonDiv.style.display = "none";
    }

    let isExistInTheArr = guess => {
        for (let i = 0; i < userGuessesArr.length; i++) {
            if (userGuessesArr[i] === guess) {
                return true;
            }
        }
        return false;
    }

    let isValidGuess = guess => {
        return guess < 123 && guess > 96 ? true : false;
    }

})();
