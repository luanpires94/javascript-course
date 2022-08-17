// const dia = /[^\d\d]/;

// console.log(dia.test('2019'))
// console.log(dia.test('asd'))
// console.log(dia.test('05'))
// console.log(dia.test('asd1'))

let validarDominio = /[?www.]\w+\.com.br|.com/

console.log(validarDominio.test("www.google.com"))
console.log(validarDominio.test("www.google.com.br"))
console.log(validarDominio.test("google.com.br"))