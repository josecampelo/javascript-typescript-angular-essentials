// Exercício 2 — Atualizando propriedades

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
    return `${campeao.skinFavorita} é a skin favorita.`
}

console.log(campeao.informacoesCampeao())
console.log(campeao.informacoesHabilidadesCampeao())
console.log(campeao.informacoesSkinFavorita())