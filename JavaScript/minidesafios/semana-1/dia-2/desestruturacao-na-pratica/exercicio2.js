// Exercício 2 – Desestruturando Objetos

const campeao = {
    nome: "Rengar",
    tipo: "Assassino",
    dano: "Físico"
}
const {nome, tipo} = campeao

console.log(`${nome} é do tipo ${tipo}`)