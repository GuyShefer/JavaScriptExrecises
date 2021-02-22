(function () {

    const input = document.querySelector("#smiley");
    const button = document.querySelector(".btn");
    const span = document.querySelector("#error");
    let divItems = document.querySelector(".flex-items");
    const mainDiv = document.querySelector(".main-div");

    button.addEventListener("click", setSmilies);


    function setSmilies() {
        deleteAllSmilies();
        

        Number(input.value) <= 0 || isNaN(Number(input.value)) ?
            span.style.display = 'block' :
            span.style.display = 'none';
        const smileyDiv = document.createElement('div');

        for (let i = 0; i < Number(input.value); i++) {
            const smiley = document.createElement('img');
            smiley.src = "https://lh3.googleusercontent.com/proxy/7ZqSOjWfNsxO9fX2PLHjXAZzzaTO3e0dV4jySldlmTHpJbsszVhY49oJoZ0Re4g87bIo6ZY16MJ7gLbgtdnN53tESvM9OnQ";
            smiley.style.width = '50px'
            smiley.style.height = '50px'
            smileyDiv.appendChild(smiley);
        }
        divItems.appendChild(smileyDiv);
    }

    let deleteAllSmilies = () => {
        divItems.remove();
        divItems = document.createElement("div");
        divItems.className= ".flex-items"
        mainDiv.appendChild(divItems);
    }

})();
