// Desafio: Simulador de Fila Ranqueada com Análise de Ping

const servidores = [
    {nome: "BR", ping: 21, latencia: 1000},
    {nome: "NA", ping: 153, latencia: 2000},
    {nome: "EUW", ping: 307, latencia: 3000}
]

function verificaPingServidores(servidores) {
    return servidores.map(servidor => {
        const promise = new Promise(resolve => {
            setTimeout(() => {
                resolve({nome: servidor.nome, ping: servidor.ping})
            }, servidor.latencia)
        })

        promise.then(servidor => console.log(`Servidor ${servidor.nome}: ${servidor.ping}ms`))

        return promise
    })
}

function verificaMenorPingServidor(servidores) {
    const promises = verificaPingServidores(servidores)

    return Promise.all(promises).then(pingServidores => {
        const menorPing = pingServidores.reduce((acumulador, servidor) => {
            return servidor.ping < acumulador.ping ? servidor : acumulador
        })

        console.log(`Servidor escolhido: ${menorPing.nome} (${menorPing.ping}ms)`)

        return menorPing
    })
}

function encontraPartida(servidores) {
    const partidaEncontrada = verificaMenorPingServidor(servidores)

    setTimeout(() => {
        new Promise(resolve => {
            resolve(partidaEncontrada)
        }).then(resolve => console.log(`Partida encontrada no servidor ${resolve.nome} com ping ${resolve.ping}ms`))
    }, 5000)
}

encontraPartida(servidores)