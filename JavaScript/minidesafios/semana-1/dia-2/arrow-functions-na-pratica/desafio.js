// Desafio: Análise de Desempenho em um Torneio de League of Legends

const jogadores = [
    {
        nome: "Faker",
        campeao: "LeBlanc",
        partidas: [
            { abates: 12, mortes: 1, assistencias: 5 },
            { abates: 8, mortes: 3, assistencias: 7 },
            { abates: 15, mortes: 2, assistencias: 6 }
        ]
    },
    {
        nome: "brTT",
        campeao: "Draven",
        partidas: [
            { abates: 9, mortes: 5, assistencias: 3 },
            { abates: 7, mortes: 4, assistencias: 1 },
            { abates: 11, mortes: 7, assistencias: 2 }
        ]
    },
    // Adicione mais jogadores se quiser!
]

jogadores.forEach(jogador => {
    jogador.kdaMedio = jogador.partidas
        .map(partida => (partida.abates + partida.assistencias) / partida.mortes)
        .reduce((acumulador, valorInicial) => acumulador + valorInicial, 0) / jogador.partidas.length
})

const relatorio = jogadores.filter(jogador => jogador.kdaMedio > 4)

relatorio.forEach(jogador => console.log(`Jogador: ${jogador.nome} | Campeão: ${jogador.campeao} | KDA Médio: ${jogador.kdaMedio.toFixed(2)}`))