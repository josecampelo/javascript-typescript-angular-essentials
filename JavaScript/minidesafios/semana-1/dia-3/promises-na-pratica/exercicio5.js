// Exercício 5 – Média de ping

function simularPing(servidor) {
    return new Promise(resolve => {
        const ping = Math.floor(Math.random() * 100) + 1 // entre 1 e 100ms
        setTimeout(() => {
            resolve({ servidor, ping })
        }, 1000)
    })
}

Promise.all([simularPing("BR"), simularPing("NA"), simularPing("EUW")])
    .then(resolve => {
        resolve.forEach(servidor => {
            console.log(`Servidor ${servidor.servidor} possui ${servidor.ping} de ping`)
        })
    })