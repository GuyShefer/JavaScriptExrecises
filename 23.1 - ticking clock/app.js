(function () {

    let hours = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');

    let tickingClock = () => {
        if (hours.textContent === '24') {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
        else if (parseFloat(minutes.textContent) == 60) {
            if (parseFloat(hours.textContent) < 9) {
                hours.textContent = `0${(parseFloat(hours.textContent) + 1)}`;
                minutes.textContent = '00';
            } else {
                hours.textContent = `${(parseFloat(hours.textContent) + 1)}`;
                minutes.textContent = '00';
            }
        }
        else if (parseFloat(seconds.textContent) == 60) {
            if (parseFloat(minutes.textContent) < 9) {
                minutes.textContent = `0${(parseFloat(minutes.textContent) + 1)}`;
                seconds.textContent = '00'
            } else {
                minutes.textContent = `${(parseFloat(minutes.textContent) + 1)}`;
                seconds.textContent = '00'
            }
        }
        else if (parseFloat(seconds.textContent) < 9) {
            seconds.textContent = `0${(parseFloat(seconds.textContent) + 1)}`;
        } else {
            seconds.textContent = (parseFloat(seconds.textContent) + 1);
        }
    }

    setInterval(tickingClock, 1000);

})();
