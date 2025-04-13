function gerarRelatorioPartida (nomeDoCampeao, abates, mortes, assistencias, tempoDePartida, danoCausado, objetivosFeitos, reportsRecebidos) {
    // Calcular KDA
    let kda = mortes === 0 ? "KDA Perfeito" : ((abates + assistencias) / mortes).toFixed(2);

    // Classificar Tempo de Partida
    let tempoPartida;

    if (tempoDePartida > 35) {
        tempoPartida = "Partida Longa"
    } else if (tempoDePartida >= 20) {
        tempoPartida = "Partida Média"
    } else {
        tempoPartida = "Partida Rápida"
    }

    // Classificar Desempenho em Dano
    let desempenhoDano;

    if (danoCausado > 30000) {
        desempenhoDano = "Alto dano causado"
    } else if (danoCausado >= 15000) {
        desempenhoDano = "Dano moderado"
    } else {
        desempenhoDano = "Dano baixo"
    }

    // Classificar Participação em Objetivos
    let participacaoObjetivos;

    if (objetivosFeitos > 5) {
        participacaoObjetivos = "Participação ativa nos objetivos"
    } else if (objetivosFeitos >= 3) {
        participacaoObjetivos = "Participação razoável"
    } else {
        participacaoObjetivos = "Participação baixa"
    }

    // Verificar comportamento
    let comportamentoJogador;

    if (reportsRecebidos >= 3) {
        comportamentoJogador = "Comportamento problemático"
    } else if (reportsRecebidos >= 1) {
        comportamentoJogador = "Comportamento ok"
    } else {
        comportamentoJogador = "Comportamento exemplar"
    }

    return `Campeão: ${nomeDoCampeao}\nTempo de Partida: ${tempoDePartida} minutos - ${tempoPartida}\nKDA: ${kda}\nDano: ${desempenhoDano}\nObjetivos: ${participacaoObjetivos}\nComportamento: ${comportamentoJogador}`
}

console.log(gerarRelatorioPartida("Kha'Zix", 17, 0, 10, 25, 28000, 7, 0))