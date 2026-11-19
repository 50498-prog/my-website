
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "Switch Theme 🌙";
    } else {
        themeButton.textContent = "Switch Theme ☀️";
    }

});




const infoButton = document.getElementById("infoButton");
const extraInfo = document.getElementById("extraInfo");

infoButton.addEventListener("click", function() {

    if (extraInfo.hidden) {
        extraInfo.hidden = false;
        infoButton.textContent = "Hide";
    } else {
        extraInfo.hidden = true;
        infoButton.textContent = "Show more";
    }

});
