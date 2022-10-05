document.getElementById("btn").addEventListener("click", function () {
    gerarPiada ()
})


async function gerarPiada () {
    const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"
    const resposta = await fetch(url)
    const piada = await resposta.json()
    document.getElementById("joke-area").innerHTML = piada.joke
}


gerarPiada ()