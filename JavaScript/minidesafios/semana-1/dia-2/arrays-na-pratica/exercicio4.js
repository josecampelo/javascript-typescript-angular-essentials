// Exercício 4 – Média de dano com forEach

const danos = [20361, 15592, 30321, 35777, 60036]
let danoTotal = 0;

danos.forEach(function (dano){
    danoTotal += dano
})

const mediaDano = danoTotal / danos.length

console.log(mediaDano.toFixed(2))