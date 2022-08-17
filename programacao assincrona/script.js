// console.log("1")

// setTimeout(function() {
//     console.log("5")
// }, 2000)

/////////

let promessa = Promise.resolve(4 + 8)

console.log("algum código")

promessa.then((value) => console.log(`A soma é ${value}`))