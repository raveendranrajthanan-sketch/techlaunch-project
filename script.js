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


// ----------------------------------------FORM VALIDATION----------------------------------------//


const form = document.querySelector("#join-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    if (!emailInput.checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    if (message.length < 10) {
        formMessage.textContent =
            "Please write at minimum 10 characters in your message.";
        messageInput.focus();
        return;
    }
  
    formMessage.textContent =
        "Thanks, " + name + "! Your message has been received.";

    form.reset();
});