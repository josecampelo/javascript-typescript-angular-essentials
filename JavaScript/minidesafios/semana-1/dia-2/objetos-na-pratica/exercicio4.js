// Exercício 4 — Criando um relatório de campeão

const campeao = {
    nome : "Kha'Zix",
    funcao : "Assassino",
    dificuldade : "Difícil",
    habilidades : ["Q - Não lembro o nome", "W - Não lembro o nome", "E - Não lembro o nome", "R - Não lembro o nome"],
    informacoesCampeao : function () {
        return `${this.nome} é um ${this.funcao} com dificuldade ${this.dificuldade}.`
    },
    informacoesHabilidadesCampeao : function () {
        return `Suas habilidades são: ${this.habilidades[0]}, ${this.habilidades[1]}, ${this.habilidades[2]}, ${this.habilidades[3]}.`
    }
}

campeao.nome = "Mech Kha'Zix"
campeao.skinFavorita = "Mech"
campeao.informacoesSkinFavorita = function () {
    return `${this.skinFavorita} é a skin favorita.`
}
campeao.usarUltimate = function () {
    return `${this.nome} usou a sua ultimate: ${this.habilidades[3]}`
}

function gerarResumo (campeao) {
    return `Campeão: ${campeao.nome}\nFunção: ${campeao.funcao}\nHabilidades: ${campeao.habilidades[0]}, ${campeao.habilidades[1]}, ${campeao.habilidades[2]}, ${campeao.habilidades[3]}`
}

console.log(gerarResumo(campeao))