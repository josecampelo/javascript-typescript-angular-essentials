// Desafio: Preparação de Time em Paralelo com async/await

const jogadores = [
    { nome: "Faker", campeao: "Ahri" },
    { nome: "brTT", campeao: "Lucian" },
    { nome: "Rekkles", campeao: "Ezreal" },
    { nome: "Caps", campeao: "LeBlanc" },
    { nome: "Jankos", campeao: "Lee Sin" }
]

function escolherCampeao(jogador) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Jogador ${jogador.nome} escolheu ${jogador.campeao}`)
            resolve(true)
        }, 1000)
    })
}

function confirmarParticipacao(jogador) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Jogador ${jogador.nome} confirmou participação`)
            resolve(true)
        }, 1000)
    })
}

function carregarJogo(jogador) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Jogador ${jogador.nome} está carregando o jogo...`)
            resolve(true)
        }, 1000)
    })
}

async function prepararJogador(jogador) {
    await confirmarParticipacao(jogador)
    await escolherCampeao(jogador)
    await carregarJogo(jogador)
}

async function prepararEquipe(jogadores) {
    const jogadoresPreparados = jogadores.map(prepararJogador)
    await Promise.all(jogadoresPreparados)
    console.log("Todos os jogadores estão prontos!")
}

prepararEquipe(jogadores)