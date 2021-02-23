(function () {

    let li = document.querySelector('.start-here');
    li.textContent = "main title"; //1

    let subTitle4 = document.createElement('li');
    subTitle4.textContent = 'sub title 4';
    li.nextElementSibling.firstElementChild.appendChild(subTitle4); //2

    li.parentElement.lastElementChild.remove(); //3

    li.parentElement.parentElement.parentElement.firstElementChild.children[2].textContent = 'Master Of The Dom'; //4

    li.parentElement.parentElement.children[1].firstElementChild.textContent = 'Become a web developer'; //5
    

    
})();
