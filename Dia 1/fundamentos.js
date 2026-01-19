// ===========================================================
// Semana 1 – Fundamentos
// Desafio 50 Dias de Código
// Este programa lê números digitados pelo utilizador, calcula
// soma, média, maior e menor, e faz validação de entradas.
// ===========================================================

// Mensagem inicial para o utilizador
console.log("Bem-vindo ao desafio – Semana 1");

// Criar interface de leitura do terminal
// readline permite perguntar algo ao utilizador e capturar a resposta
const readline = require('readline').createInterface({
  input: process.stdin,   // entrada padrão (teclado)
  output: process.stdout  // saída padrão (terminal)
});

// Perguntar ao utilizador para digitar números separados por espaço
// A resposta digitada será capturada na variável "entrada"
readline.question('Digite números separados por espaço: ', entrada => {

  // Transformar a entrada em uma lista de números
  // 1. split(' ') → divide a string em cada espaço
  // 2. map(Number) → transforma cada pedaço em número
  // 3. filter(n => !isNaN(n)) → remove valores inválidos (ex: letras)
  const numeros = entrada.split(' ').map(Number).filter(n => !isNaN(n));

  // Verificar se a lista de números é válida
  if (numeros.length === 0) {
    // Se nenhum número válido foi digitado, avisamos o utilizador
    console.log("Nenhum número válido foi digitado!");
  } else {
    // ==========================
    // Cálculos principais
    // ==========================

    // Soma: acumulamos todos os números da lista
    // reduce percorre a lista, acumulando valores
    const soma = numeros.reduce((a, b) => a + b, 0);

    // Média: soma dividido pelo número de elementos
    const media = soma / numeros.length;

    // Maior número: usamos Math.max com spread operator (...)
    const maior = Math.max(...numeros);

    // Menor número: usamos Math.min com spread operator (...)
    const menor = Math.min(...numeros);

    // ==========================
    // Mostrar resultados
    // ==========================
    console.log(`Soma: ${soma}`);      // mostra a soma
    console.log(`Média: ${media}`);    // mostra a média
    console.log(`Maior: ${maior}`);    // mostra o maior
    console.log(`Menor: ${menor}`);    // mostra o menor
  }

  // Fechar a interface de leitura para terminar o programa
  readline.close();
});
