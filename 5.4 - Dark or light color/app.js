(function () {

    let whichColor = color => {
        switch (color) {
            case 'yellow':
                return 'light color'
                break;
            case 'pink':
                return 'light color'
                break;
            case 'orange':
                return 'light color'
                break;
            case 'blue':
                return 'dark color'
                break;
            case 'purple':
                return 'dark color'
                break;
            case 'brown':
                return 'dark color'
                break;
            default:
                return 'Unknown color';
        }
    }

    console.log(whichColor('yellow'));
    console.log(whichColor('pink'));
    console.log(whichColor('orange'));
    console.log(whichColor('blue'));
    console.log(whichColor('purple'));
    console.log(whichColor('brown'));
    console.log(whichColor('black'));


})();