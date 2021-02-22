(function () {

    const p = document.querySelector('p');

    document.querySelector(".btn-increase").addEventListener("click", increase);
    document.querySelector(".btn-decrease").addEventListener("click", decrease);


    function increase() {
        let style = window.getComputedStyle(p).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        currentSize < 20 ? p.style.fontSize = (currentSize + 3) + 'px' : p.style.fontSize = '16px';

    }

    function decrease() {
        let style = window.getComputedStyle(p).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        currentSize > 5 ? p.style.fontSize = (currentSize - 3) + 'px' : p.style.fontSize = '16px';
    }

})();
