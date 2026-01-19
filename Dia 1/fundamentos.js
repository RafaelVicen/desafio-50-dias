// ===========================================================
// Semana 1 – Fundamentos
// Desafio 50 Dias de Código
// Mini app: analisa múltiplos tipos de números do dia a dia
// ===========================================================

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para perguntar tipo de dado
function escolherTipo(callback) {
  console.log("\nEscolha o que você vai analisar hoje:");
  console.log("1 - Gastos");
  console.log("2 - Passos");
  console.log("3 - Notas");

  readline.question("Digite 1, 2 ou 3: ", tipo => {
    let nomeTipo;
    if (tipo === '1') nomeTipo = 'gasto';
    else if (tipo === '2') nomeTipo = 'passo';
    else if (tipo === '3') nomeTipo = 'nota';
    else {
      console.log("Opção inválida! Usando 'valor' como padrão.");
      nomeTipo = 'valor';
    }
    callback(nomeTipo);
  });
}

// Função para processar a lista de números
function processarNumeros(nomeTipo, callback) {
  readline.question(`\nDigite os ${nomeTipo}s separados por espaço: `, entrada => {
    const numeros = entrada.split(' ').map(Number).filter(n => !isNaN(n));

    if (numeros.length === 0) {
      console.log(`❌ Nenhum ${nomeTipo} válido foi digitado. Tente novamente!`);
    } else {
      const soma = numeros.reduce((a, b) => a + b, 0);
      const media = soma / numeros.length;
      const maior = Math.max(...numeros);
      const menor = Math.min(...numeros);

      console.log(`\n📊 Resultados dos seus ${nomeTipo}s:`);
      console.log(`- 🔹 Total de ${nomeTipo}s: ${soma}`);
      console.log(`- 🔹 Média de ${nomeTipo}s: ${media}`);
      console.log(`- 🔹 Maior ${nomeTipo}: ${maior}`);
      console.log(`- 🔹 Menor ${nomeTipo}: ${menor}`);
      console.log("✅ Indicadores calculados com sucesso!\n");
    }
    callback(); // chama a próxima etapa
  });
}

// Função para perguntar se deseja continuar
function perguntarContinuar() {
  readline.question("Deseja analisar outro tipo de dado? (s/n): ", resposta => {
    if (resposta.toLowerCase() === 's') {
      iniciar(); // reinicia o fluxo
    } else {
      console.log("\nObrigado por usar o programa! Até a próxima 👋");
      readline.close();
    }
  });
}

// Função principal
function iniciar() {
  escolherTipo(nomeTipo => {
    processarNumeros(nomeTipo, perguntarContinuar);
  });
}

// Mensagem inicial
console.log("Bem-vindo ao desafio – Semana 1");
console.log("💡 Este programa ajuda você a analisar rapidamente números do seu dia a dia: gastos, passos ou notas.");
console.log("Ele calcula automaticamente soma, média, maior e menor valor de cada tipo de dado.\n");

iniciar();
