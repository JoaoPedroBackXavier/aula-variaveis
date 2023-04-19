let nome
let idade
console.log(typeof nome, typeof idade)
//isso acontece pois nao estou dando algum valor ou tipo para as variaveis
nome = prompt("digite seu nome")
idade = Number(prompt("qual sua idade"))
console.log(typeof nome, typeof idade)
//isso acontece pois agora eu dei um tipo e um valor as variaveis
console.log("oi", nome, "sua idade é", idade, "os valores digitados sao", nome,"e" , idade)

let vson
let r1
let r2
let r3
vson = prompt("voce esta de sapatos pretos")
r1 = vson
vson = prompt("voce esta bem")
r2 = vson
vson = prompt("voce estuda")
r3 = vson
console.log("voce esta de sapatos pretos", r1, "voce esta bem", r2, "voce estuda", r3)

let a = 10
let b = 50
let c = a
a = b
b = c
console.log("a =",a ,"b =",b )

//desafio:

let n1 = Number(prompt("digite um numero"))
let n2 = Number(prompt("digite outro numero"))
let x = n1 + n2
let y = n1 * n2
console.log("a soma é", x, "a multiplicação é", y)