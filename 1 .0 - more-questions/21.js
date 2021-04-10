function pigIt(str) {
    return str.split(' ').map(word => {
        let wordArr = word.split('');
      if(wordArr.length === 1 && !word[0].match(/[a-z]/i)){
        return wordArr.join('')
      }
        const firstChar = wordArr.shift();
        wordArr.push(firstChar);
        return wordArr.join('') + 'ay'
    }).join(' ');
}

pigIt('Pig latin is cool')