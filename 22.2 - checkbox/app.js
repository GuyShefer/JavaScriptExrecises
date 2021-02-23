(function () {

    const checkbox = document.querySelector('#displayImg');

    checkbox.addEventListener('click', (e) => {
        const img = document.querySelector('.img');
        checkbox.checked ? img.style.display = "block" :
            img.style.display = "none";
    })
})();
