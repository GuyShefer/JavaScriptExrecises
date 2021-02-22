(function () {

    const textArea = document.querySelector('#textAre');
    const button = document.querySelector(".btn");
    const span = document.querySelector("#error");

    button.addEventListener("click", textVlidation);
 
    function textVlidation() {
        textArea.value.length < 101 ?
        span.style.display = 'block' :
        span.style.display = 'none'
    }


})();
