(function () {

    let countABC = string => {
        const countLetters = new Map();
        for (let i = 0; i < string.length; i++) {
            if (countLetters.has(string[i])) {
                countLetters.set(string[i], (countLetters.get(string[i]))+1 );
            } else {
                countLetters.set(string[i], 1)
            }
        }
        return countLetters;
    }

    console.log(countABC('abcdeghijklmnopqrstuvwxyzabcdeghijklmnopqrstuvwxyz'));
})();