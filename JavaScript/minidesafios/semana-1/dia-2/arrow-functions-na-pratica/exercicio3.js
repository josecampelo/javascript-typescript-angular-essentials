// Exercício 3 – Filtrar campeões assassinos

const campeoes = [
    { nome: "Kha'Zix", tipo: "Assassino" },
    { nome: "Zac", tipo: "Tank" },
    { nome: "Diana", tipo: "Mago" },
    { nome: "Rengar", tipo: "Assassino" }
]

// Retornar só os do tipo "Assassino"

const campeoesAssassinos = campeoes.filter(campeao => campeao.tipo === "Assassino")

campeoesAssassinos.forEach(campeaoAssassino => console.log(`O campeão: ${campeaoAssassino.nome} é do tipo: ${campeaoAssassino.tipo}`))