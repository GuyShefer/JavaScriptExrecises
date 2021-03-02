(function () {

    const rndUrl = 'https://api.chucknorris.io/jokes/random/';
    const container = document.querySelector('.container');
    const container2 = document.querySelector('.container');

    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Get Joke'
    container.appendChild(button);

    const p = document.createElement('p');
    button.addEventListener('click', getJoke);

    async function getJoke() {
        try {
            const response = await fetch(rndUrl);
            const data = await response.json();
            p.textContent = data.value;
            container.appendChild(p);

        } catch (err) {
            console.log(err);
        }
    }

    const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';

    async function getCategories() {
        const response = await fetch(categoriesUrl);
        return await response.json();

    }

    const select = document.querySelector('#selection');

    async function createSelector() {
        let categoriesArr = await getCategories();

        categoriesArr.forEach(category => {
            let option = document.createElement('option')
            option.innerHTML += `
            <option value="${category}">${category}</option> `;
            select.appendChild(option);
        })
    }

    const selectedJokeUrl = 'https://api.chucknorris.io/jokes/random?category='
    const button2 = document.createElement('button');
    button2.textContent = 'Get Selected Joke'
    container2.appendChild(button2);

    async function getJokeByCategory() {
        let option = select.options[select.selectedIndex].text;
        console.log(option);
        const response = await fetch(`${selectedJokeUrl}${option}`);
        const data = await response.json();
        p.textContent = data.value;
        container.appendChild(p);
    }

    button2.addEventListener('click',getJokeByCategory)

    createSelector();







})();