// Desafio: Painel de desempenho de jogadores em partidas ranqueadas

class Partida {
    constructor(abates, mortes, assistencias, danoCausado) {
        this.abates = abates
        this.mortes = mortes
        this.assistencias = assistencias
        this.danoCausado = danoCausado
    }
}

class Jogador {
    constructor(nome, campeao, partidas) {
        this.nome = nome
        this.campeao = campeao
        this.partidas = partidas
    }

    calcularKDA() {
        let totalAbates = 0
        let totalMortes = 0
        let totalAssistencias = 0

        this.partidas.forEach(function (partida) {
            totalAbates += partida.abates
            totalMortes += partida.mortes
            totalAssistencias += partida.assistencias
        })

        const mediaKDAGeral = (totalAbates + totalAssistencias) / totalMortes

        return mediaKDAGeral
    }

    calcularDanoMedio() {
        let totalDanoCausado = 0

        this.partidas.forEach(function (partida) {
            totalDanoCausado += partida.danoCausado
        })

        const mediaTotalDanoCausado = totalDanoCausado / this.partidas.length

        return mediaTotalDanoCausado
    }

    resumo() {
        const resumoJogador = `Jogador: ${this.nome}\nCampeão: ${this.campeao}\nKDA médio: ${this.calcularKDA().toFixed(2)}\nDano médio causado: ${this.calcularDanoMedio().toFixed(2)}`

        return resumoJogador
    }
}

const jogador1 = new Jogador("Faker", "Ryze", [
    new Partida(20, 1, 2, 432001),
    new Partida(15, 3, 5, 291200),
    new Partida(10, 5, 7, 132301)
])

const jogador2 = new Jogador("brTT", "Draven", [
    new Partida(12, 3, 3, 342001),
    new Partida(20, 6, 0, 591200),
    new Partida(9, 2, 0, 152301)
])

const jogador3 = new Jogador("Kalec", "Kha'Zix", [
    new Partida(7, 10, 5, 132001),
    new Partida(6, 8, 3, 91200),
    new Partida(7, 7, 4, 152301)
])

const jogador4 = new Jogador("Campelo", "Kha'Zix", [
    new Partida(22, 3, 1, 632001),
    new Partida(17, 2, 3, 891200),
    new Partida(19, 5, 9, 632301)
])

const jogadores = Array()
jogadores.push(jogador1)
jogadores.push(jogador2)
jogadores.push(jogador3)
jogadores.push(jogador4)

const filtrarJogadores = jogadores.filter(function (jogador) {
    return jogador.calcularKDA() > 4
})

const resumoJogadores = filtrarJogadores.map(function (jogador) {
    return jogador.resumo()
})

resumoJogadores.forEach(function (jogador) {
    console.log(jogador)
})