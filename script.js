const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-pass");
const form = document.querySelector("form");

function showError(input, message) {
    const formEntrance = input.closest(".form-entrance");
    let error = formEntrance.querySelector(".error-message");

    if (!error) {
        error = document.createElement("p");
        error.className = "error-message";
        error.style.color = "red";
        error.style.fontSize = "0.8rem";
        formEntrance.appendChild(error);
    }

    error.textContent = message;
}

function clearError(input) {
    const formEntrance = input.closest(".form-entrance");
    const error = formEntrance.querySelector(".error-message");

    if (error) {
        error.remove();
    }
}

password2.addEventListener("input", () => {
    if (password1.value !== password2.value) {
        showError(password2, "Las contraseñas no coinciden.");
    } else {
        clearError(password2);
    }
});

form.addEventListener("submit", (e) => {
    if (password1.value !== password2.value) {
        e.preventDefault(); 
        showError(password2, "Las contraseñas no coinciden.");
    }
});