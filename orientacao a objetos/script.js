// let x = {
//     aqui: function () {
//         console.log("estou aqui")
//     },
//     ali: function () {
//         console.log("estou ali")
//     }
// }

// x.aqui()
// x.ali()

/////////////////////////////////////////////

// let cachorro = {
//     patas: 4,
//     raca: 'SRD',
//     latir: function() {
//         console.log("Au au")
//     }
// }

// let labrador = Object.create(cachorro)

// labrador.latir()

// labrador.raca = "Labrador"

// console.log(labrador.raca)
// console.log(cachorro.raca)

// let pastor = Object.create(cachorro)

// pastor.raca = "Pastor Alemão"

// console.log(pastor.raca)
// console.log(cachorro.raca)

/////////////////////////////////////////////

// function criaCachorro(raca,patas,cor) {
//     let cachorro = Object.create({})
//     cachorro.raca = raca
//     cachorro.patas = patas
//     cachorro.cor = cor
//     cachorro.latir = function() {
//         console.log("Au au")
//     }

//     return cachorro
// }

// let doberman = criaCachorro("Doberman", 4, "preta")

// console.log(doberman)

// doberman.latir()

/////////////////////////////////////////////

// function Cachorro(raca,patas,cor) {
//     this.raca = raca
//     this.patas = patas
//     this.cor = cor
// }

// Cachorro.prototype.uivar = function() {
//     console.log("Auuuuu")
// }

// let husky = new Cachorro('Husky', 4, 'cinza')

// husky.uivar()

/////////////////////////////////////////////

// class Cachorro {
//     constructor(raca, cor) {
//         this.raca = raca
//         this.cor = cor
//     }

//     latir() {
//         console.log("Au au")
//     }
// }

// Cachorro.prototype.raca = "SRD"
// Cachorro.prototype.patas = 4

// let labrador = new Cachorro("Labrador", "Amarelo")

// labrador.latir()

// console.log(Cachorro.prototype.raca)
// console.log(labrador.raca)

/////////////////////////////////////////////

// class contaBanco {
//     constructor(saldo) {
//         this.saldo = saldo
//     }

//     deposito(valor) {
//         this.saldo += valor
//     }

//     saque(valor) {
//         this.saldo -= valor
//     }
// }

// let conta = new contaBanco(1000)

// conta.deposito(1000)

// console.log(conta.saldo)

// conta.saque(500)

// console.log(conta.saldo)

/////////////////////////////////////////////

// class Carrinho {
//     constructor(itens, qtd, valorTotal) {
//         this.itens = itens
//         this.qtd = qtd
//         this.valorTotal = valorTotal
//     }

//     addItem(item) {

//         let contador = 0

//         for (let itemCarrinho in this.itens) {
//             if (this.itens[itemCarrinho].id == item.id) {
//                 this.itens[itemCarrinho].qtd += item.qtd
//                 contador = 1
//             }
//         }


//         if (contador == 0) {
//             this.itens.push(item)
//         }

//         this.qtd += item.qtd
//         this.valorTotal += item.preco * item.qtd
//     }

//     removeItem(item) {

//         for(let itemCarrinho in this.itens) {
//             if(this.itens[itemCarrinho].id == item.id) {

//                 let obj = this.itens[itemCarrinho]
//                 let index = this.itens.findIndex(function(obj) {
//                     return obj.id == item.id
//                 })

                
//                 this.qtd -= this.itens.qtd
//                 this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd

//                 this.itens.splice(index, 1)
//             }
//         }
//     }
// }

// let carrinho = new Carrinho([
//     {
//         id: 01,
//         nome: "Camisa",
//         qtd: 1,
//         preco: 20
//     },
//     {
//         id: 02,
//         nome: "Calça",
//         qtd: 2,
//         preco: 50
//     }
// ], 3, 120)


// console.log(carrinho)

// carrinho.addItem({ id: 01, nome: "Camisa", qtd: 2, preco: 20 })

// console.log(carrinho)

// carrinho.addItem({ id: 03, nome: "Boné", qtd: 1, preco: 15 })

// console.log(carrinho)

// carrinho.removeItem({id: 01, nome: "Camisa", qtd: 1, preco: 20})

// console.log(carrinho)

/////////////////////////////////////////////

// class Endereco {
//     constructor(rua, bairro, cidade, estado) {
//         this.rua = rua
//         this.bairro = bairro
//         this.cidade = cidade
//         this.estado = estado
//     }

//     set novaRua(novaRua) {
//         this.rua = novaRua
//     }

//     set novoBairro(novoBairro) {
//         this.bairro = novoBairro
//     }

//     set novaCidade(novaCidade) {
//         this.cidade = novaCidade
//     }
//     set novoEstado(novoEstado) {
//         this.estado = novoEstado
//     }
// }

// let endereco = new Endereco("Rua das Gaivotas", "Terrário", "São Joaquim", "SC")

// console.log(endereco)

// endereco.novaRua = "Rua dos Pardais"

// console.log(endereco)

// endereco.novaCidade = "São Paulo"

// console.log(endereco)

/////////////////////////////////////////////

// class Carro {
//     constructor(marca, cor, gasolinaRestante, consumo) {
//         this.marca = marca
//         this.cor = cor
//         this.gasolinaRestante = gasolinaRestante
//         this.consumo = consumo
//     }

//     dirigir(km) {
//         let litrosConsumidos = km / this.consumo

//         this.gasolinaRestante -= litrosConsumidos
//     }

//     abastecer(l) {
//         this.gasolinaRestante += l
//     }
// }

// let carro = new Carro("VW", "Cinza", 100, 14)

// console.log(carro)

// carro.dirigir(100)

// console.log(carro)

// carro.abastecer(10)

// console.log(carro)

/////////////////////////////////////////////

// class Conta {
//     constructor(saldoCC, saldoCP, juros) {
//         this.saldoCC = saldoCC
//         this.saldoCP = saldoCP
//         this.juros = juros
//     }

//     deposito(valor) {
//         this.saldoCC += valor
//     }

//     saque(valor) {
//         this.saldoCC -= valor
//     }

//     transferenciaCP(valor) {
//         this.saldoCC -= valor
//         this.saldoCP -= valor
//     }

//     transferenciaCC(valor) {
//         this.saldoCP -= valor
//         this.saldoCC -= valor
//     }

//     jurosDeAniversario() {
//         let juros = (this.saldoCP * this.juros) / 100
//         this.saldoCP += juros
//     }
// }

// class ContaEspecial extends Conta {
//     constructor(saldoCC, saldoCP, juros){
//         super(saldoCC, saldoCP, juros * 2)
//     }
// }

// let conta = new Conta(1000, 5000, 1)

// console.log(conta)

// conta.saque(500)

// console.log(conta)

// conta.deposito(5000)

// console.log(conta)

// conta.transferenciaCP(3000)

// console.log(conta)

// conta.jurosDeAniversario()

// console.log(conta)

// let conta2 = new ContaEspecial(10000, 50000, 1)

// console.log(conta2)

// conta2.saque(5000)

// console.log(conta2)

// conta2.jurosDeAniversario()

// console.log(conta2)

/////////////////////////////////////////////

