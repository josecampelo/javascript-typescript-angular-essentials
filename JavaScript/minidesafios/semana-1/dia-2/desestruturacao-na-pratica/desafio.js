// Desafio: Relatório de Partidas Ranqueadas com Desestruturação

const jogadores = [
    {
        nome: "Faker",
        campeao: "Ahri",
        partidas: [
            { abates: 10, mortes: 2, assistencias: 5 },
            { abates: 7, mortes: 1, assistencias: 8 }
        ]
    },
    {
        nome: "brTT",
        campeao: "Lucian",
        partidas: [
            { abates: 8, mortes: 4, assistencias: 2 },
            { abates: 11, mortes: 3, assistencias: 1 }
        ]
    }
]

jogadores.forEach(jogador => {
    const {nome, campeao, partidas} = jogador
    const kdaMedio = partidas
        .map(partida => {
            const {abates, mortes, assistencias} = partida
            return (abates + assistencias) / mortes
        })
        .reduce((acumulador, valorAtual) => acumulador + valorAtual) / partidas.length

    console.log(`Jogador: ${nome} (${campeao}) - KDA médio: ${kdaMedio.toFixed(2)}`)
})