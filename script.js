const button = document.querySelector("#more-button");
const info = document.querySelector("#more-info");

button.addEventListener("click", function () {

    if (info.hidden) {

        info.hidden = false;
        button.textContent = "Show less";
        button.setAttribute("aria-expanded", "true");

    } else {

        info.hidden = true;
        button.textContent = "Show more";
        button.setAttribute("aria-expanded", "false");

    }

});