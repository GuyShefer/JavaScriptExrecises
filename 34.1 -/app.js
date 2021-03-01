(function () {

    const baseEndpoint = 'https://swapi.dev/api/people/';
    let charactersArr = [];

    async function getCharactersFromTheApi() {
        try {
            const response = await fetch(baseEndpoint);
            const data = await response.json();
            // data.results.forEach(element => {
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
            console.log(charactersArr);


        } catch (err) {

        }
    }


    // const main = document.createElement('main');
    // main.classList.add('main')
    // main.textContent = 'asd'
    // document.body.appendChild(main);

    // const table = document.createElement('table');
    // main.appendChild(table);

    // let title = document.createElement("tr");
    // title.textContent = 'Star Wars';

    // for (let i = 0; i < 10; i++) {
    //     let row = document.createElement("tr");
    //     var cell = document.createElement("td");
    //     cell.textContent = charactersArr[i];
    //     row.appendChild(cell);
    //     table.appendChild(row);
    // }














})();