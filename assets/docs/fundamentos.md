# Fundamentos de Javascript

## Ambiente
- podemos utilizar o javascript via navegador direto no console (f12 -> console)
- podemos utilizar arquivos .js e ver o resultado no navegador
- podemos utilizar o node e executar os arquivos .js através do comando node nomeDoArquivo.js

## Variáveis
- var - são variáveis com escopo global
- let - são variáveis com escopo de função
- const - são constantes, não podem ter seu valores alterados e nem ser redeclaradas

## Operações aritméticas
- precedência de operações naturais e com parenteses
- conversão de tipos parseInt("2")

## Atribuição e imutabilidade
- concatenação utilizando o +
- aspas simples e aspas duplas
- interpolação (template literal) `Texto e ${variavel}`

## Array
- const cidades = new Array()
- adicionando elementos cidades.push(novacidade)
- removendo elementos cidades.splice()

## Laços de repetição
- while
- for

## Formulário HTML
- tag inputs
- tag button
- atributo onclick
- tag script

## funções javascript
- document.querySelector('') -> busca o primeiro elemento (por id, classe ou elemento)
- document.querySelectorAll('') -> busca todos os elementos (por id, classe ou elemento)
- template string -> `texto normal com valores de ${variavel}`
- elemento.classList -> lista todas as classes do elemento
- elemento.classList.add() -> insere uma classe css
- elemento.classList.remove() -> remove uma classe css
- elemento.onkeydown = quando uma tecla é pressionada
- elemento.onkeyup = quando o usuário solta uma tecla
- funções anonimas em eventos tem como primeiro parametro o atributo event (evento que chamou a função)
- elemento.localName => nome do elemento


