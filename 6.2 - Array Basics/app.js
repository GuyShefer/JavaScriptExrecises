(function () {

    let people = ["Greg", "Mary", "Devon", "James"];

    let printArr = () => {
        for (let i = 0; i < people.length; i++) {
            console.log(people[i]);
        }
    }

    printArr();

    people.shift();
    people.pop();
    people.unshift('Matt');
    people.push('Guy');


    console.log('----------------------------');

    console.log(people.slice(2)); // 7
    console.log("The index of Mary is: "+ people.indexOf('Mary')); //8
    console.log("The index of Foo is: "+ people.indexOf('Foo')); //9

    console.log('----------------------------');

    people = ["Greg", "Mary", "Devon", "James"];
    people.splice(2, 1, 'Elizabeth', 'Artie'); // 10
    console.log(people);
    
    console.log('----------------------------');

    let withBob = ['Bob'];
    people = ["Greg", "Mary", "Devon", "James"];
    let arr3 = people.concat(withBob); //11
    console.log(arr3);

    console.log('----------------------------');

    // 6
    for (let i = 0; i < people.length; i++) {
        console.log(people[i]);
        if (people[i] === 'Mary') {
            return;
        }
    }


})();