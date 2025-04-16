// Exercício 5 – Desestruturando arrays com valores ignorados

const resultados = ["Vitória", "Derrota", "Vitória", "Derrota", "Vitória"]
const [primeiro, , , , ultimo] = resultados

console.log(`Começou com ${primeiro} e terminou com ${ultimo}`)