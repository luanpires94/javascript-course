// let a = [1, 2, 3, 4, 5]

// console.log(a[0])

///////////////////////////////////////

// let pessoa = {
//     nome: "Luan",
//     idade: 27,
//     profissao: "dev"
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.profissao)

///////////////////////////////////////

// let carro = {
//     marca: "VW",
//     portas: 4,
//     eletrico: false,
//     motor: 1.0
// }

// console.log(carro.eletrico)

// delete carro.eletrico

// console.log(carro.eletrico)

// carro.cor = "vermelho"
// console.log(carro.cor)

///////////////////////////////////////

// let a = {
//     nome: "a",
//     idade: 10
// }

// let b = {
//     humano: true
// }

// console.log(a)

// Object.assign(a, b)

// console.log(a)

///////////////////////////////////////

// let obj = {
//     chave1: 1,
//     chave2: 2,
//     chave3: 3
// }

// console.log(obj)

// console.log(Object.keys(obj))

///////////////////////////////////////

// let a = {
//     pontos: 10
// }

// b = a

// let c = {
//     pontos: 10
// }

// console.log(a == b)
// console.log(a == c)

// let pessoa = {
//     nome: "Luan"
// }

// let pessoa2 = pessoa

// console.log(pessoa == pessoa2)

// pessoa2.nome = "teste"

// console.log("pessoa:", pessoa.nome)

// pessoa.nome = "outro"

// console.log("pessoa2:", pessoa2.nome)

///////////////////////////////////////

// let nomes = ["Riven", "LeeSin", "Kayn"]

// for (let i = 0; i <= nomes.length; i++) {
//     console.log(nomes[i])
// }

//

// let nomes = ["Riven", "LeeSin", "Kayn"]
// let x = 0;

// while (x <= nomes.length) {
//     console.log(nomes[x])
//     x++
// }

///////////////////////////////////////

// let a = [1, 2, 3, 4, 5]

// a.push(6)

// console.log(a)

// let a = [1, 2, 3, 4, 5]

// a.pop()

// console.log(a)

///////////////////////////////////////

// let b = ["a", "b", "c", "d"]

// console.log(b)
// b.shift()
// console.log(b)

// b.unshift("e")
// console.log(b)

///////////////////////////////////////

// let c = [0, 1, 2, 3, 4, 5, 7, 1]

// console.log(c.indexOf(3))

// console.log(c.lastIndexOf(1))

///////////////////////////////////////

// let s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(s.slice(-4))

///////////////////////////////////////

// let nomes = ["a", "b", "c", "d", "e"]

// nomes.forEach(n => {
//     console.log(`O nome é ${n}`)
// })

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// num.forEach(n => {
//     console.log(`O número é: ${n}`)
// })

///////////////////////////////////////

// let x = [1, 2, 3]

// console.log(x.includes(2))

///////////////////////////////////////

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(x.reverse())

///////////////////////////////////////

// let teste = "  eae galera do youtube! "

// console.log(teste.trim())


// let x = "1"

// console.log(x.padStart("5", "0"))

///////////////////////////////////////

// let frase = "testando o método split"

// console.log(frase.split(" "))

// let teste = "a;b;c;d;e;f"

// console.log(teste.split(";"))

///////////////////////////////////////

// let frase = "testando o método join"

// let palavras = frase.split(" ")

// let novaFrase = palavras.join("@")

// console.log(novaFrase)

///////////////////////////////////////

// let palavra = "repetindo a frase"

// console.log(palavra.repeat(10))

///////////////////////////////////////

// let num1 = 1
// let num2 = 2
// let num3 = 3
// let num4 = 4
// let num5 = 5
// let num6 = 6

// function imprimirNumeros(...args) {
//     for (let x = 0; x < 10; x++) {
//         console.log(args[x])
//     }
// }

// imprimirNumeros(num1, num2, num3)
// imprimirNumeros("pause")
// imprimirNumeros(num4, num5, num6)
// imprimirNumeros(2, 4, 6, 7, 8, 9)

///////////////////////////////////////

// let obj = {
//     rodas: 4,
//     portas: 4,
//     tetosolar: true,
//     motor: 2.0

// }

// const { rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor } = obj

// console.log(vPortas)
// console.log(vTetoSolar)

///////////////////////////////////////

// let nomes = ['Riven', 'LeeSin', 'Kayn']

// let [nomeA, nomeB, nomeC] = nomes

// console.log(nomeA)
// console.log(nomeB)
// console.log(nomeC)

///////////////////////////////////////

// let pessoa = {
//     "nome": "Luan",
//     "idade": 27
// }

// console.log(pessoa.nome)
// console.log(pessoa.idade)

///////////////////////////////////////

// const car = {
//     "brand": "BMW",
//     "wheels": 4,
//     "doors": 2,
//     "type": "Sedan"
// }

// let jsonToString = JSON.stringify(car)

// console.log(jsonToString)

// let stringToJson = JSON.parse(jsonToString)

// console.log(stringToJson)

///////////////////////////////////////

// let x = ["a", "b", "c", "d", "e", "f"]

// console.log(x[0])
// console.log(x[2])
// console.log(x[3])

///////////////////////////////////////

// let a = ["a", "b"]

// let b = ["c", "d", "e", "f"]

// console.log(a.length)
// console.log(b.length)

///////////////////////////////////////

// let onibus = {
//     rodas: 8,
//     limiteDePassageiros: 40,
//     portas: 2
// }

// console.log(onibus.rodas)
// console.log(onibus.limiteDePassageiros)
// console.log(onibus.portas)

///////////////////////////////////////

// let onibus = {
//     rodas: 8,
//     limiteDePassageiros: 40,
//     portas: 2
// }

// onibus.janelas = 20

// console.log(onibus.janelas)

// delete rodas

///////////////////////////////////////

// let nomes = ["Riven", "LeeSin", "Luan"]

// if (nomes.includes("Luan")) {
//     console.log("Seu nome está na lista!")
// } else {
//     console.log("Seu nome não está na lista!")
// }

///////////////////////////////////////

// let a = ["c", "d", "e", "f", "g", "h", "i"]

// let b = ["a", "b"]

// function verificarQuantidade(x) {
//     if (x.length < 5) {
//         console.log("Poucos elementos!")
//     } else {
//         console.log("Muitos elementos!")
//     }
// }

// verificarQuantidade(a)
// verificarQuantidade(b)

///////////////////////////////////////

// let arr = ['Riven', 'LeeSin', 'Kayn', 'Zed', 'KhaZix', 'Irelia', 'Rengar', 'Ziggs', 'Lux', 'Draven']

// for (let x = 0; x < 10; x++) {
//     console.log(arr[x])
// }

///////////////////////////////////////

// let note = {
//     "modelo": "nitro 5",
//     "marca": "acer",
//     "gen": 9
// }

// console.log(note.modelo)
// console.log(note.marca)
// console.log(note.gen)

///////////////////////////////////////

// let frase = "guardando uma frase aqui"

// let fraseToArr = frase.split(" ")
// console.log(fraseToArr)

// for (let x = 0; x < 10; x++) {
//     console.log(fraseToArr[x])
// }

///////////////////////////////////////

// let calculadora = {
//     somar: function (a, b) {
//         return a + b
//     },

//     subtrair: function (a, b) {
//         return a - b
//     },

//     multiplicar: function (a, b) {
//         return a * b
//     },

//     dividir: function (a, b) {
//         return a / b
//     }
// }

// console.log(calculadora.somar(2, 5))
// console.log(calculadora.subtrair(7, 3))
// console.log(calculadora.multiplicar(8, 3))
// console.log(calculadora.dividir(10, 5))