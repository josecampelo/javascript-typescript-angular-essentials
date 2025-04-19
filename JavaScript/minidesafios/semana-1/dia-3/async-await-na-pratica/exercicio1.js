// Exercício 1 – Esperando carregar o campeão

function carregaCampeao(campeao) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Campeão ${campeao} carregado com sucesso!`), 2000)
    })
}

async function exibeMensagem(campeao) {
    const mensagem = await carregaCampeao(campeao)
    console.log(mensagem)
}

exibeMensagem("Yasuo")