// Exercício 4 – Desestruturando em função

const jogador = {
    nome: "brTT",
    campeao: "Draven"
}

function exibirResumo({nome, campeao}) {
    return `Jogador ${nome} usou o campeão ${campeao}`
}

console.log(exibirResumo(jogador))