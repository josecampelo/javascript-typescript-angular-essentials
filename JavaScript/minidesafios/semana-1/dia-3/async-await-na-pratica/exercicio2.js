// Exercício 2 – Treinando habilidades

function treinaHabilidade(habilidade) {
    return new Promise((resolve, reject) => {
        if (habilidade === "Q" || habilidade === "E") {
            resolve(`Habilidade ${habilidade} treinada com sucesso!`)
        } else {
            reject(`Habilidade ${habilidade} inválida para treino.`)
        }
    })
}

async function executaTreinaHabilidade(habilidade) {
    try {
        const habilidadeTreinada = await treinaHabilidade(habilidade)
        console.log(habilidadeTreinada)
    } catch (reject) {
        console.log(reject)
    }
}

executaTreinaHabilidade("Q")
executaTreinaHabilidade("W")
executaTreinaHabilidade("E")
executaTreinaHabilidade("R")