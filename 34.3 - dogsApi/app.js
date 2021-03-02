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

    const input = document.createElement('input');
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "please enter a number");
    const secondContainer = document.querySelector('.second-container');
    const getAmountOfDogsBtn = document.createElement('button');
    getAmountOfDogsBtn.classList.add('btn');
    getAmountOfDogsBtn.textContent = 'Get Amount Of Dogs';
    secondContainer.appendChild(input);
    secondContainer.appendChild(getAmountOfDogsBtn);


    getAmountOfDogsBtn.addEventListener('click', () => {
        try {
            if (input.value < 0 || input.value > 50) {
                throw new Error("not a valid number");
            } else {
                showAmountOfDogs(input.value);
            }
        } catch (err) {
            console.log(err, err.message);
        }

    })

    async function showAmountOfDogs(num) {
        const data = await (await fetch(dogUrl + '/' + num)).json();
        console.log(data.message);
        for (let i = 0; i < data.message.length; i++) {
            let img = document.createElement('div');
            img.classList.add('img');
            img.style.background = `url(${data.message[i]}) no-repeat center center/cover`;
            secondContainer.appendChild(img);
        }
    }





})();