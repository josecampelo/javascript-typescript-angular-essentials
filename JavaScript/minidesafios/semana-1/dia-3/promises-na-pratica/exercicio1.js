// Exercício 1 – Criando sua primeira Promise

const verificarServidor = new Promise((resolve, reject) => {
    const servidorOnline = true

    servidorOnline ? resolve("Servidor disponível") : reject("Servidor fora do ar")
})

verificarServidor
    .then(resolve => console.log("OK:", resolve))
    .catch(reject => console.log("ERRO:", reject))