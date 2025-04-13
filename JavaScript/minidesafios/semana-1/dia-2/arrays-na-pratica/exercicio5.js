// Exercício 5 – Criando um relatório de desempenho com map e filter

class Partida {
    constructor(nome, abates, mortes, assistencias) {
        this.nome = nome
        this.abates = abates
        this.mortes = mortes
        this.assistencias = assistencias
    }
}

const partidas = [
    new Partida("Kha'Zix",22, 3, 2),
    new Partida("Darius",12, 7, 6),
    new Partida("Garen",9, 8, 0),
    new Partida("Veigar",3, 3, 1),
    new Partida("Vayne",15, 4, 20),
    new Partida("Blitz",10, 2, 8),
    new Partida("Nami",2, 10, 3)
]

const kdaPartidas = partidas.map(function (partida){
    return {nome : partida.nome, kda : (partida.abates + partida.assistencias) / partida.mortes}
})

const kdaPartidasMaior3 = kdaPartidas.filter(function (kdaPartida){
    return kdaPartida.kda > 3
})

kdaPartidasMaior3.forEach(function (kdaPartidaMaior3) {
    console.log(`Campeão: ${kdaPartidaMaior3.nome} | KDA: ${kdaPartidaMaior3.kda.toFixed(2)}`)
})