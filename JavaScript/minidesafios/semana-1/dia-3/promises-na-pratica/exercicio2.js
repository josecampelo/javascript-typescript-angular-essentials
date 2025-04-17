// Exercício 2 – Carregando campeão

const carregarCampeao = nome => {
    return new Promise((resolve, reject) => {
        nome === "Teemo" ? reject(`Campeão ${nome} está banido!`) : resolve(`Campeão ${nome} carregado com sucesso!`)
    })
}

carregarCampeao("Teemo")
    .then(resolve => console.log("OK:", resolve))
    .catch(reject => console.log("Erro:", reject))

carregarCampeao("Kha'Zix")
    .then(resolve => console.log("OK:", resolve))
    .catch(reject => console.log("Erro:", reject))