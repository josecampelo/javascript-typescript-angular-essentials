// Exercício 4 – Criar mensagens com map

const campeoes = [
    { nome: "Kha'Zix", tipo: "Assassino" },
    { nome: "Zac", tipo: "Tank" },
    { nome: "Diana", tipo: "Mago" },
    { nome: "Rengar", tipo: "Assassino" }
]

const campeoesAssassinos = campeoes.filter(campeao => campeao.tipo === "Assassino")

const frasesCampeoesAssassinos = campeoesAssassinos.map(campeaoAssassino => `${campeaoAssassino.nome} é do tipo ${campeaoAssassino.tipo}`)

frasesCampeoesAssassinos.forEach(fraseCampeaoAssassino => console.log(fraseCampeaoAssassino))