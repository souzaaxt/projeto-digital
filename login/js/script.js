const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

let errorPassword = document.getElementById("error-password");
let errorEmail = document.getElementById("error-email");

let btnLogin = document.getElementById("login-btn");

function login() {
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email === "" || senha === "") {
        if (email === "") {
            errorEmail.classList.remove("hidden");
        }

        if (senha === "") {
            errorPassword.classList.remove("hidden");
        }
    } else {
        errorEmail.classList.add("hidden");
        errorPassword.classList.add("hidden");

        btnLogin.innerHTML = '<i class="fa-solid fa-spinner animate-spin"></i>';
        btnLogin.disabled = true;

        // verificando se o usuário esta cadastrado
        setTimeout(() => {
            Toastify({
                text: "Login realizado com sucesso!",
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "black",
                },
                onClick: function(){} // Callback after click
              }).showToast();

            btnLogin.innerHTML = "Entrar";
            btnLogin.disabled = false;
        }, 3000);
    }
    console.log("fazendo o login");
}
