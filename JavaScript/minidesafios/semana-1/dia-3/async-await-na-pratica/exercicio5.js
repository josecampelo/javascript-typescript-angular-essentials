// Exercício 5 – Preparando para partida

function carregaCampeao() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Campeão carregado")
        }, 1000)
    })
}

function procuraPartida() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Partida encontrada")
        }, 2000)
    })
}

function confirmaPartida() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Partida confirmada")
        }, 1000)
    })
}

async function preparaPartida() {
    console.log("Procurando partida...")
    const resultadoProcuraPartida = await procuraPartida()
    console.log(resultadoProcuraPartida)

    console.log("Confirmando partida...")
    const resultadoConfirmaPartida = await confirmaPartida()
    console.log(resultadoConfirmaPartida)

    console.log("Carregando campeão...")
    const resultadoCarregaCampeao = await carregaCampeao()
    console.log(resultadoCarregaCampeao)
}

preparaPartida()