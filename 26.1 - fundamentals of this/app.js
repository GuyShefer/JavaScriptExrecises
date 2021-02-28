
console.log(this);
//1: Empty Object > Because NodeJS runs your code in a module, and this references the object it creates.

const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//2-a: its print undefines beacuse the problem with the arror function.
//2-b: just change the arror function to an normal function.

const myFuncDec = function () {
    console.log(this);
};
//3: its depends who call this function, in this case if we call it now its will print the window obj

const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
//4: again print the nodejs module

document.querySelector(".element").addEventListener('click',() => {
    console.log(this);
});

//5-a: the addEventListener function has to get 2 parameters, the type and the listener. in that case there isnt type.
//5-b: if you add click 'this' will refers to the element that received the event.