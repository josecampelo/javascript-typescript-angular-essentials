// Exercício 2 – Filtrando campeões com filter

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

const campeoesAssassinos = campeoes.filter(function (campeao){
    return campeao.tipo === "Assassino"
})

campeoesAssassinos.forEach(function (campeao){
    console.log(`${campeao.nome} é um ${campeao.tipo}`)
})