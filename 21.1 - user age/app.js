(function () {

    const input = document.querySelector('.age');
    const over18Txt = document.querySelector('.over-18');
    const under18Txt = document.querySelector('.under-18');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e)=> {
        Number(input.value) < 18 ?
        under18Txt.style.display = 'block':
        over18Txt.style.display = 'block';
    })

})();
