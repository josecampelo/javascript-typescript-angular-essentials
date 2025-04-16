// Exercício 1 – Desestruturação de Array simples

const lanes = ["top", "jungle", "mid", "adc", "support"]
const [ , , mid, , support] = lanes

console.log(`O mid é: ${mid} e o suporte é: ${support}`)