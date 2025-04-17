// Exercício 3 – Simulando atraso com setTimeout

const carregamentoPartida = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            status ? resolve("Partida encontrada!") : reject("Partida não foi encontrada!")
        }, 3000)
    })
}

console.log("Procurando partida...")
carregamentoPartida(true)
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))