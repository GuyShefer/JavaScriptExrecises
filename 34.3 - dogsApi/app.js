(function () {

    const dogUrl = 'https://dog.ceo/api/breeds/image/random';
    const container = document.querySelector('.container');
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Get new Dog'
    container.appendChild(button);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('dog');
    container.appendChild(imgContainer);
    
    button.addEventListener('click', getNewDog);

    async function getNewDog() {
        try {
            const data = await (await fetch(dogUrl)).json();
            imgContainer.style.background = `url(${data.message}) no-repeat center center/cover`;

        } catch (err) {
            console.log(err);
        }
    }








})();