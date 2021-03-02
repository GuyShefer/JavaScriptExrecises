(function () {

    const baseEndpoint = 'https://swapi.dev/api/people/';
    let charactersArr = [];
    const container = document.querySelector('.container')

    async function getCharactersFromTheApi() {
        try {
            const response = await fetch(baseEndpoint);
            const data = await response.json();

            for (let i = 0; i < data.results.length; i++) {
                const worldUrl = data.results[i].homeworld;
                const planetResponse = await fetch(worldUrl);
                const planetData = await planetResponse.json();
                let newObj = {};
                newObj['name'] = data.results[i].name;
                newObj['height'] = data.results[i].height;
                newObj['hair'] = data.results[i].hair_color;
                newObj['planet'] = { 'name': planetData.name, 'population': planetData.population }
                charactersArr.push(newObj);
            }
            return charactersArr;


        } catch (err) {

        }
    }

    createTable();

    async function createTable() {
        let users = await getCharactersFromTheApi();
        let table = document.createElement('table');
        users.forEach(u => {
            console.log(u);
            table.innerHTML += `<tr>
            <td>${u.name}</td>
            <td>${u.hair}</td>
            <td>${u.height}</td>
            <td>${u.planet.name}</td>
            <td>${u.planet.population}</td>
            </tr>`
        })
        container.appendChild(table);
    }















})();