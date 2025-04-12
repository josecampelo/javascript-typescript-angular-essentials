const nome = "Vayne";
const abates = 15;
const mortes = 3;
const assistencias = 7;
const tempoPartida = 32; // minutos
const objetivosParticipados = 6; // torres, dragões, barões etc.
const totalObjetivos = 9;
const reportsRecebidos = 1;

// Calcular KDA
//const kDA = Math.floor((abates + assistencias) / mortes);
//const statusKDA = mortes === 0 ? "Perfeito" : `${kDA}`;

let kda;
let statusKDA;

if (mortes === 0) {
    kda = "Perfeito"
    statusKDA = "Perfeito"
} else {
    kda = (abates + assistencias) / mortes;
    statusKDA = kda.toFixed(2);
}

// Calcular Participação em Objetivos
const participacaoObjetivos = Math.floor((objetivosParticipados / totalObjetivos) * 100);
let statusClassificacaoParticipacaoObjetivos;

if (participacaoObjetivos >= 70) {
    statusClassificacaoParticipacaoObjetivos = "Participou ativamente dos objetivos";
} else if (participacaoObjetivos >= 40) {
    statusClassificacaoParticipacaoObjetivos = "Participação moderada nos objetivos";
} else {
    statusClassificacaoParticipacaoObjetivos = "Participação baixa nos objetivos";
};

// Calcula Desempenho final
let statusDesempenhoFinal;

if (kda > 5 && participacaoObjetivos > 60 && reportsRecebidos === 0) {
    statusDesempenhoFinal = "Desempenho excepcional"
} else if (kda >= 3 && participacaoObjetivos > 40) {
    statusDesempenhoFinal = "Desempenho bom"
} else {
    statusDesempenhoFinal = "Desempenho precisa melhorar"
}

// Saída
console.log(`${nome} - KDA: ${statusKDA}`);
console.log(`${nome} - Participação em objetivos: ${participacaoObjetivos}%`);
console.log(`${nome} - Classificação: ${statusClassificacaoParticipacaoObjetivos}`);
console.log(`${nome} - Desempenho final: ${statusDesempenhoFinal}`);