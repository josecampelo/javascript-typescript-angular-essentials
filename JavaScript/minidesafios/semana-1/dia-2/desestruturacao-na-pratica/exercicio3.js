// Exercício 3 – Renomeando ao desestruturar

const invocador = {
    nick: "Xpeke",
    elo: "Platina"
}
const {elo: nivel} = invocador

console.log(`O invocador está no elo: ${nivel}`)