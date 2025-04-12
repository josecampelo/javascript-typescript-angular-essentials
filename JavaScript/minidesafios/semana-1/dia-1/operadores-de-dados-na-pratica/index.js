const nome = "Thresh";
let partidasJogadas = 100;
let partidasVencidas = 53;
let reportsRecebidos = 2;
let abandonos = 1;
let honorLevel = 4;
let eloAtual = "Prata";

// Calcular a taxa de vitória (winrate em %).
const taxaVitoria = Math.floor(partidasVencidas / partidasJogadas * 100)

// Se o jogador teve mais de 5 reports OU mais de 2 abandonos, ele não pode subir de elo.
const isBomComportamento = !(reportsRecebidos > 5 || abandonos > 2)
const statusDisciplinar = isBomComportamento ? "Bom comportamento" : "Mau comportamento"

// Se a taxa de vitória for maior que 60% e o honorLevel for 4 ou mais, ele sobe de elo.
const isSobeElo = taxaVitoria > 60 && honorLevel >= 4

// Se a taxa de vitória for menor que 40%, ele cai de elo.
const isDesceElo = taxaVitoria < 40

// Caso contrário, mantém o elo.
const isManterElo = isSobeElo === false && isDesceElo === false

// Resultado
const resultado = isBomComportamento ? isManterElo ? "Permaneceu no elo atual" : isSobeElo ? "Subiu de elo" : "Desceu de elo" : isDesceElo ? "Desceu de elo" : "Permaneceu no elo atual"

console.log(`Nome do jogador: ${nome}`)
console.log(`Elo atual: ${eloAtual}`)
console.log(`Winrate do jogador: ${taxaVitoria}%`)
console.log(`Status disciplinar: ${statusDisciplinar}`)
console.log(`Resultado: ${resultado}`)