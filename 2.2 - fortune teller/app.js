(function () {


    function tellFortune(jobTitle, location, partnerName, numberOfChildren){
        return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children`;
    }

    console.log(tellFortune("Biochemist", "Tel-Aviv" , "Dana", 3));
    console.log(tellFortune("Programmer", "Haifa" , "Gal", 2));
    console.log(tellFortune("Zoologist", "Eilat" , "Noa", 1));

})();