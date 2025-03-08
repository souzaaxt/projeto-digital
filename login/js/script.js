const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

function login() {
    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email === "" || senha === "") {
        alert("Preencha o seu e-mail");
    }
    console.log("fazendo o login");
}