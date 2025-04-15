// Exercício 2 – Somar os abates das partidas com forEach

const partidas = [
    { abates: 5 }, { abates: 12 }, { abates: 9 }
]

// Sua lógica aqui

let totalAbates = 0

partidas.forEach(partida => {
    totalAbates += partida.abates
})

console.log(`Abates total de todas as partidas jogadas: ${totalAbates}`)