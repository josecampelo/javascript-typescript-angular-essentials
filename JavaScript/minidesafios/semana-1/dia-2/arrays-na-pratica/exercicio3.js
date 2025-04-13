// Exercício 3 – Transformando campeões com map

class Campeao {
    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }
}

const campeoes = [
    new Campeao("Kha'Zix", "Assassino"),
    new Campeao("Zac", "Tank"),
    new Campeao("Diana", "Mago"),
    new Campeao("Kayn", "Assassino"),
    new Campeao("Lee Sin", "Lutador"),
    new Campeao("Twitch", "Atirador"),
    new Campeao("Rengar", "Assassino"),
    new Campeao("Ivern", "Suporte")
]

const campeoesMap = campeoes.map(function (campeao){
    return `${campeao.nome} é um campeão do tipo ${campeao.tipo}`
})

campeoesMap.forEach(function (campeao){
    console.log(campeao)
})