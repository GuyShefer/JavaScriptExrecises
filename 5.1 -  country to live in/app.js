(function () {

let countryToLiveIn = (language, isIsland, population ,country) => {
    if(language === 'English' && isIsland === false && population < 50){
        console.log('You should live in Finland !');
    } else {
        console.log('Finland does not meet your criteria.');
    }
}

countryToLiveIn('English', false , 55, 'Egypt');

})();