// https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript

// Constraint Validation API

const message = document.querySelector(".message");
const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("input", (e) => {
    if(passwordInput.validity.tooShort) {
        //run the Constraint Validation API method setCustomValidity(): 
        passwordInput.setCustomValidity("the password is too short");
        message.textContent = "yoo fix yo password";
    } else {
        passwordInput.setCustomValidity("");
        message.textContent = "";
    }
});