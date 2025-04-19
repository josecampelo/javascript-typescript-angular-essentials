// Exercício 3 – Simulando compra na loja

function compraItem(item) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Item ${item} comprado com sucesso!`)
            resolve(true)
        }, 1000)
    })
}

async function compraDoisItens(item1, item2) {
    await compraItem(item1)
    await compraItem(item2)
}

compraDoisItens("Cajado do Vazio", "Gume do Infinito")