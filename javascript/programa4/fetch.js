async function buscarDados() {
    const dados = await fetch("https://viacep.com.br/ws/01001000/json/").then((resposta) => {

        return resposta.json()
    })

    return dados
}

// buscarDados().then((dados) => {
//     console.log("console 6");
//     console.log(dados)
// })

// Buscar dados de CEP pelo axios

async function buscarDadosAxios() {
    const dados = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((resposta) => {
        console.log(resposta)
        return resposta.data
    })

    return dados
}

buscarDadosAxios().then((dados) => {
    console.log(dados)
})