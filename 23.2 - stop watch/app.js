(function () {

    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let millseconds = document.querySelector('#millseconds');
    let btnStop = document.querySelector('.stop');
    let btnContinue = document.querySelector('.continue');


    let tickingClock = () => {
        if (minutes.textContent === '24') {
            minutes.textContent = '00';
            seconds.textContent = '00';
            millseconds.textContent = '00';
        }
        else if (parseFloat(seconds.textContent) == 60) {
            if (parseFloat(minutes.textContent) < 9) {
                minutes.textContent = `0${(parseFloat(minutes.textContent) + 1)}`;
                seconds.textContent = '00';
            } else {
                minutes.textContent = `${(parseFloat(minutes.textContent) + 1)}`;
                seconds.textContent = '00';
            }
        }
        else if (parseFloat(millseconds.textContent) == 99) {
            if (parseFloat(seconds.textContent) < 9) {
                seconds.textContent = `0${(parseFloat(seconds.textContent) + 1)}`;
                millseconds.textContent = '00'
            } else {
                seconds.textContent = `${(parseFloat(seconds.textContent) + 1)}`;
                millseconds.textContent = '00'
            }
        }
        else if (parseFloat(millseconds.textContent) < 9) {
            millseconds.textContent = `0${(parseFloat(millseconds.textContent) + 1)}`;
        } else {
            millseconds.textContent = (parseFloat(millseconds.textContent) + 1);
        }
    }

    let timer = setInterval(tickingClock, 1000/99);

    btnStop.addEventListener('click', ()=>{
        clearInterval(timer);
    });
    btnContinue.addEventListener('click', ()=>{
        timer = setInterval(tickingClock, 1000/99);
    });

})();
