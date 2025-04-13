// Desafio: Crie um sistema de relatório para ranqueamento de campeões com base em estatísticas de várias partidas.
class Partida {
    constructor(abates, assistencias, mortes, danoCausado) {
        this.abates = abates
        this.assistencias = assistencias
        this.mortes = mortes
        this.danoCausado = danoCausado
    }
}

class Campeao {
    constructor(nome, funcao, partidas) {
        this.nome = nome
        this.funcao = funcao
        this.partidas = partidas
    }

    gerarRelatorioDeCampeao () {
        let abatesPartidas = 0
        let assistenciasPartidas = 0
        let mortesPartidas = 0
        let danoCausadoPartidas = 0

        for (const partida of this.partidas) {
            abatesPartidas += partida.abates
            assistenciasPartidas += partida.assistencias
            mortesPartidas += partida.mortes
            danoCausadoPartidas += partida.danoCausado
        }

        const kdaMedio = this.calculaKDAMedio(abatesPartidas, assistenciasPartidas, mortesPartidas)
        const danoMedioCausado = this.calculaDanoCausadoMedio(danoCausadoPartidas)
        const classificaoGeral = this.calculaClassificacaoGeral(kdaMedio, danoMedioCausado)
        const resultado = `Campeão: ${this.nome}\nFunção: ${this.funcao}\nKDA médio: ${kdaMedio.toFixed(2)}\nDano médio causado: ${danoMedioCausado.toFixed(2)}\nClassificação: ${classificaoGeral}`

        return resultado.trim()
    }

    calculaKDAMedio (abates, assistencias, mortes) {
        return (abates + assistencias) / mortes
    }

    calculaDanoCausadoMedio (danoCausado) {
        return danoCausado / this.partidas.length
    }

    calculaClassificacaoGeral (kdaMedio, danoMedioCausado) {
        if (kdaMedio > 5 && danoMedioCausado > 20000) {
            return "Desempenho Excelente"
        } else if (kdaMedio >= 3 && danoMedioCausado >= 15000) {
            return "Bom Desempenho"
        } else {
            return "Desempenho Insatisfatório"
        }
    }
}

const partidasKhazix = [
    new Partida(15, 5, 2, 27000),
    new Partida(8, 10, 1, 23000),
    new Partida(2, 3, 7, 12000)
]

const khazix = new Campeao("Kha'Zix", "Assassino", partidasKhazix)

console.log(khazix.gerarRelatorioDeCampeao())