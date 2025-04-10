/*
Você foi contratado para criar uma parte do sistema de nível de invocador de um jogo 
estilo League of Legends. Esse sistema deve armazenar o nome do jogador, a quantidade 
de partidas vencidas e calcular o nível com base nas vitórias.

- O nome do jogador nunca muda (deve ser const)
- O número de vitórias pode mudar com o tempo (deve ser let)
- A cada 10 vitórias, o jogador sobe 1 nível
- Imprima no final:
    "Jogador Ahri está no nível 3 com 32 vitórias!"
*/

const nomeJogador = "Ahri";
let nivelJogador;
let quantidadeVitoriasJogador = 32;
nivelJogador = parseInt(quantidadeVitoriasJogador / 10)
console.log("Jogador " + nomeJogador + " está no nível " + nivelJogador + " com " + quantidadeVitoriasJogador + " vitórias!");