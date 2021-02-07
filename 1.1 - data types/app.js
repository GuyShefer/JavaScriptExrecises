(function () {

    let foo = "Guy";
    let foo2 = 123;
    let obj = {
        "Guy": 28,
        "Yuval": 21
    }
    let bool = false;
    let fizz = null;
    let fuzz = undefined;
    let symb = Symbol("id");

    console.log(foo + " " + foo2 + " " + obj +  " " +bool +  " " +fizz + " " + fuzz );
    console.log(symb);

})();