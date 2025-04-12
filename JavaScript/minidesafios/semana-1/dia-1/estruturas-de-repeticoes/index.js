let monstrosRestantes = 8;
let buffsPegos = 0;
let tempo = 0; // minutos
let arautoDisponivel = true;
let monstrosDerrotados = 0;
let contador = 0;
let tentativasDerrotarArauto = 0;

while (monstrosRestantes >= 1) {
    monstrosRestantes--;
    monstrosDerrotados++;
    contador++;
    tempo += 2;

    if (contador === 3) {
        buffsPegos++;
        contador = 0;
    }
}

if (tempo <= 14 && arautoDisponivel) {
    do {
        if (tentativasDerrotarArauto === 3) {
            console.log("Arauto escapou!")
            arautoDisponivel = false;
        } else {
            console.log("Tentando derrotar o Arauto...")
            tentativasDerrotarArauto++;
        }
    } while (arautoDisponivel)
}

console.log("------- Status da Jungle -------")
console.log(`Monstros derrotados: ${monstrosDerrotados}`)
console.log(`Buffs pegos: ${buffsPegos}`)
console.log(`Tempo de partida: ${tempo} minutos`)
console.log(`Tentativas de derrotar o arauto: ${tentativasDerrotarArauto}`)
console.log(`Arauto escapou?: ${!arautoDisponivel}`)
console.log(`Monstros restantes: ${monstrosRestantes}`)