const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

async function register(ev) {
    ev.preventDefault
    const email = emailInput.value;
    const password = passwordInput.value;

    await axios.post("http://localhost:3000/accounts", {
        email,
        password
    })

    console.log("Registrado com sucesso!");
}