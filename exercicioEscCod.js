let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))

// o tipo "undefined" foi impresso porque não foi atribuido nenhum valor à variável

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")

console.log(nome, idade)

console.log("Variável 'nome':",typeof(nome))
console.log("Variável 'idade':",typeof(idade))

// o tipo das variáveis mudaram de "undefined" para "string"

console.log("Olá",nome,", você tem", idade,"anos.")