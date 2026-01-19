# Autor

# Nome: [Rafael_vicente67]

título: 50 Dias de Código
Linguagem: JavaScript
Data de início: 19/01/2026

# Desafio 50 Dias de Código – Semana 1: Fundamentos

## Descrição

💡 Este programa ajuda você a **analisar rapidamente números do seu dia a dia**, como **gastos, passos ou notas**.  
Ele calcula automaticamente **soma, média, maior e menor valor**, com validação de entrada e mensagens claras para o usuário.

---

## Funcionalidades

1. **Escolha do tipo de dado**
   - O usuário escolhe entre **Gastos**, **Passos** ou **Notas**
   - Cada tipo é contextualizado na saída, deixando claro o que os números representam

2. **Validação de entradas**
   - Remove espaços extras no começo e fim (`trim()`)
   - Aceita múltiplos espaços entre números (`split(/\s+/)`)
   - Converte corretamente para número (`map(Number)`)
   - Filtra apenas números válidos (`filter(Number.isFinite)`)

3. **Cálculos automáticos**
   - Soma total
   - Média
   - Maior valor
   - Menor valor

4. **Loop para múltiplos tipos**
   - Permite analisar outro tipo de dado sem reiniciar o programa

5. **Mensagens claras**
   - Resultados são apresentados de forma organizada
   - Cada tipo de dado recebe sua própria contextualização

---.

O objetivo é praticar **fundamentos de programação**, incluindo:
- Entrada e saída de dados
- Transformação de dados
- Validação de entrada
- Operações matemáticas básicas
- Estruturas de controle (`if`, loops, funções embutidas)

---

## Como usar

1. Abra o terminal na pasta do projeto.
2. Execute o programa com o Node.js:

```bash
node fundamentos.js

Exemplo de entrada:
Bem-vindo ao desafio – Semana 1
💡 Este programa ajuda você a analisar rapidamente números do seu dia a dia: gastos, passos ou notas.

Escolha o que você vai analisar hoje:
1 - Gastos
2 - Passos
3 - Notas
Digite 1, 2 ou 3: 2

Digite os passos separados por espaço: 1000 2000 1500

📊 Resultados dos seus passos:
- 🔹 Total de passos: 4500
- 🔹 Média de passos: 1500
- 🔹 Maior passo: 2000
- 🔹 Menor passo: 1000

Deseja analisar outro tipo de dado? (s/n): n
Obrigado por usar o programa! Até a próxima 👋

Observações

Valores inválidos (letras, símbolos ou espaços extras) serão ignorados.

Se nenhum número válido for digitado, o programa avisará o utilizador.

Código escrito de forma enxuta, clara e comentada para facilitar aprendizado.
