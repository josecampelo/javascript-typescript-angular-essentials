// Exercício 4 – Conectando no servidor

function conectaServidor(servidor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            servidor === "BR" ? resolve(`Conectado ao servidor da região ${servidor}`) : reject(`Região ${servidor} não suportada`)
        }, 2000)
    })
}

async function executaConectaServidor(servidor) {
    try {
        const resposta = await conectaServidor(servidor)
        console.log(resposta)
    } catch (reject) {
        console.log(reject)
    }
}

executaConectaServidor("NA")
executaConectaServidor("BR")