// Exercício 5 — Criando múltiplos campeões

class Campeao {
    constructor(nome, funcao) {
        this.nome = nome
        this.funcao = funcao
    }
}

const lux = new Campeao("Lux", "Mago")
const darius = new Campeao("Darius", "Lutador")
const blitz = new Campeao("Blitz", "Suporte")

const campeoes = []
campeoes.push(lux)
campeoes.push(darius)
campeoes.push(blitz)

for (campeao of campeoes) {
    console.log(`Campeão: ${campeao.nome} | Função: ${campeao.funcao}`)
}