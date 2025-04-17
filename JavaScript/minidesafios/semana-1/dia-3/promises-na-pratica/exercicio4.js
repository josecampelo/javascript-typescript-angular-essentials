// Exercício 4 – Treino de skill

const treinarSkill = skill => {
    return new Promise((resolve, reject) => {
        skill === "Q" ||  skill === "R" ? resolve(`Skill ${skill} dominada!`) : reject(`Skill ${skill} inválida para treino`)
    })
}

treinarSkill("Q")
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))

treinarSkill("W")
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))